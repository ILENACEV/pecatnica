---
name: systematic-debugging
description: Root-cause debugging in 4 gated phases. Use when facing any bug, test failure, or unexpected behavior. No fix without Phase 1 investigation.
---

# Systematic Debugging

## Iron Law
NEMA fix bez Phase 1 istraga. Fix na izvor, ne na simptom.

## 4 fazi (redom, bez preskok)
1. **Root cause:** reprodukcija + git diff + instrumentacija po granici
   na komponenti (echo na sekoja granica). Backward-tracing.
2. **Pattern:** najdi working primer, sporedi kompletno. Sto e razlicno?
3. **Hipoteza:** EDNA, falsifiable (`If X, then Y ke iscezne`),
   minimalen test. Pokazi ja pred testiranje.
4. **Implementacija:** prvo failing test, pa EDEN fix.

## Stop-pravila
- Tight feedback loop e gate: bez red-capable komanda (failing test,
  curl, CLI fixture) nema Phase 2 - ne hipotetiziraj.
- 1 promenliva odednas. Sekoj log tagiran `[DEBUG-xxxx]`, izbrisi gi na kraj.
- 3 failirani fixa -> STOP, prasaј arhitektura. Nikogas 4-ti ist fix.
- Regression test PRED fix. Cleanup checklist: repro zelen, DEBUG izbrisan,
  hipoteza vo commit message. Redact secrets `<REDACTED>`.
