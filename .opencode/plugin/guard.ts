import type { Plugin } from "@opencode-ai/plugin"

// PECATNICA guard: tehnicki deny za destruktivno, ne samo tekst.
// Pravilo 4 od AGENTS.md stanuva kod: stop samo za ovie slucai,
// se drugo pominuva.

const BLOCKED_BASH: Array<[RegExp, string]> = [
  [/(^|[;&|]\s*)(sudo\s+)?rm\s+-rf?\s+(\/|~|\*|$)/, "rm -rf na root/home/wildcard"],
  [/git\s+push\b.*--force/, "force-push"],
  [/supabase\s+db\s+(push|reset)\b.*--linked/, "direktna db-push/reset akcija"],
];

const BLOCKED_PATH = /(^|\/)\.env(\.|$)|(^|\/)\.env\.|\.pem$|\.key$|id_rsa/i;

function findPaths(value: unknown, out: string[]): void {
  if (typeof value === "string") {
    if (value.length < 512) out.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const v of value) findPaths(v, out);
    return;
  }
  if (value && typeof value === "object") {
    for (const v of Object.values(value)) findPaths(v, out);
  }
}

export default (async () => {
  return {
    "tool.execute.before": async (input: unknown, output: unknown) => {
      try {
        const i = (input ?? {}) as Record<string, unknown>;
        const o = (output ?? {}) as Record<string, unknown>;
        const tool = String(i.tool ?? o.tool ?? "");
        const args = (o.args ?? i.args ?? {}) as unknown;

        if (tool === "bash") {
          const cmd =
            typeof args === "string"
              ? args
              : String(
                  (args as Record<string, unknown>).command ??
                    (args as Record<string, unknown>).cmd ??
                    JSON.stringify(args),
                );
          for (const [re, why] of BLOCKED_BASH) {
            if (re.test(cmd)) {
              throw new Error(
                `PECATNICA guard: blokirano (${why}). Baraj covecka potvrda. Komanda: ${cmd.slice(0, 160)}`,
              );
            }
          }
          return;
        }

        if (tool === "read" || tool === "edit" || tool === "write") {
          const paths: string[] = [];
          findPaths(args, paths);
          for (const p of paths) {
            if (BLOCKED_PATH.test(p)) {
              throw new Error(
                `PECATNICA guard: blokiran pristap do tajna (${p}). Nikogas tajni vo kontekst.`,
              );
            }
          }
        }
      } catch (err) {
        if (err instanceof Error && err.message.startsWith("PECATNICA guard:")) throw err;
        // Nikogas ne krsi sesija poradi guard-greska: fail-open za se osven blokiranite.
      }
    },
  };
}) satisfies Plugin;
