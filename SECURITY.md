# Security Policy

- Never secrets in the repo: tokens, keys, .env, personal data.
  CI runs gitleaks on every push/PR + push protection is on.
- Found secret: open an issue (without pasting it), rotate it
  at once, tell us.
- `research-vault/products/` and `domains/` are gitignored on purpose.
- Scope: this repo is methodology (markdown/config), no runtime code
  that executes anything on the user side except opencode plugins
  (guard/ledger - only read args, write a local log).
