# Instalacija

## Vo postojecki proekt (opencode)
1. Kopiraj `opencode.json`, `AGENTS.md`, `.opencode/` i `research-vault/`
   (samo `index.md` + `CONTEXT.md`) vo root na proektot.
2. Proveri: `node .github/scripts/lint.mjs` — mora PASS.
   (skriptata e vo repo-to; ako ne ja kopiras, preskokni)
3. Restartiraj ja opencode sesijata — config se cita na start.
4. Tab na `plan`, kazi sto sakas. Cekaj `100% SPREMNO - mozes na build`.
5. Tab na `build`, kazi "odi".

## Napomeni
- `plugin: opencode-plugin-preload-skills` se instalira sam pri start
  (npm). Bez internet: izbrisi ja linijata `plugin` od opencode.json.
- `context7` MCP e remote, bez kluc. Bez internet: izbrisi `mcp` blok.
- `small_model` NE e postaven namerno — dodaj go sam spored provider:
  `"small_model": "anthropic/claude-haiku-..."`.
- `research-vault/products/` i `domains/` se lokalni (gitignore) —
  vistinskite lekcii nikogas ne se pushaat.
