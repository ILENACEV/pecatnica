# Security Policy

- Nikogas tajni vo repo: tokeni, klucevi, .env, licni podatoci.
  CI vrti gitleaks na sekoj push/PR + push protection e uklucen.
- Najdena tajna: otvori issue (bez da ja paste-iras), rotiraj ja
  vednas, javi ni.
- `research-vault/products/` i `domains/` se gitignore-irani namerno.
- Scope: ova repo e metodologija (markdown/config), nema runtime kod
  sto izvrsuva nesto kaj korisnikot osven opencode plugin-ovi
  (guard/ledger - samo cita args, pisuva lokalen log).
