# Installation

## Into an existing project (opencode)
1. Copy `opencode.json`, `AGENTS.md`, `.opencode/` and `research-vault/`
   (`index.md` + `CONTEXT.md` only) into the project root.
2. Check: `node .github/scripts/lint.mjs` — must PASS.
   (the script lives in this repo; skip if you do not copy it)
3. Restart the opencode session — config loads at start.
4. Tab to `plan`, say what you want. Wait for `100% SPREMNO - mozes na build`.
5. Tab to `build`, say "go".

## Notes
- `plugin: opencode-plugin-preload-skills` self-installs at start
  (npm). Offline: delete the `plugin` line from opencode.json.
- `context7` MCP is remote, no key. Offline: delete the `mcp` block.
- `small_model` is intentionally NOT set — add it yourself per provider:
  `"small_model": "anthropic/claude-haiku-..."`.
- `research-vault/products/` and `domains/` are local (gitignore) —
  real lessons are never pushed.
