import type { Plugin } from "@opencode-ai/plugin"

// PECATNICA guard: technical deny for destructive actions, not just text.
// Rule 4 of AGENTS.md becomes code: stop only for these cases,
// everything else passes.

const BLOCKED_BASH: Array<[RegExp, string]> = [
  [/(^|[;&|]\s*)(sudo\s+)?rm\s+-rf?\s+(\/|~|\*|$)/, "rm -rf on root/home/wildcard"],
  [/git\s+push\b.*--force/, "force-push"],
  [/supabase\s+db\s+(push|reset)\b.*--linked/, "direct db-push/reset action"],
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
                `PECATNICA guard: blocked (${why}). Ask for human confirmation. Command: ${cmd.slice(0, 160)}`,
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
                `PECATNICA guard: blocked access to a secret (${p}). Never secrets in context.`,
              );
            }
          }
        }
      } catch (err) {
        if (err instanceof Error && err.message.startsWith("PECATNICA guard:")) throw err;
        // Never break a session because of a guard error: fail-open for everything unblocked.
      }
    },
  };
}) satisfies Plugin;
