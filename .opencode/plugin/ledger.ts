import type { Plugin } from "@opencode-ai/plugin"

// PECATNICA ledger: the rule "Ledger: 1 line before an action, 1 line
// after each tool" becomes file evidence in .guardian/operations.log.
// Fail-open: a ledger error never breaks the session.

export default (async () => {
  const append = async (line: string) => {
    try {
      const fs = await import("node:fs");
      const path = await import("node:path");
      const dir = path.join(process.cwd(), ".guardian");
      await fs.promises.mkdir(dir, { recursive: true });
      await fs.promises.appendFile(
        path.join(dir, "operations.log"),
        `${new Date().toISOString()} ${line}\n`,
      );
    } catch {
      // deliberately silent
    }
  };

  const short = (v: unknown): string => {
    try {
      const s = typeof v === "string" ? v : JSON.stringify(v);
      return s.length > 300 ? s.slice(0, 300) + "…" : s;
    } catch {
      return "?";
    }
  };

  return {
    "tool.execute.before": async (input: unknown) => {
      const i = (input ?? {}) as Record<string, unknown>;
      await append(`BEFORE tool=${String(i.tool ?? "?")} args=${short((i as Record<string, unknown>).args ?? i)}`);
    },
    "tool.execute.after": async (input: unknown, output: unknown) => {
      const i = (input ?? {}) as Record<string, unknown>;
      const o = (output ?? {}) as Record<string, unknown>;
      const out = (o.output ?? o.result ?? o.text ?? "") as unknown;
      await append(`AFTER tool=${String(i.tool ?? "?")} out_len=${short(out).length}`);
    },
  };
}) satisfies Plugin;
