---
name: finishing-branch
description: Close a development branch cleanly. Use when implementation is done and tests are green. Verify, choose merge/PR/keep, clean up.
---

# Finishing Branch

1. Svezha cela test-suite PRVO. Ako e crvena: nema meni, nazad na fix.
2. Detektiraj env: normalen repo / named branch / detached HEAD.
   Potvrdi base-branch, ne pretpostavuvaj main.
3. Prikazi tocno meni, cekaj odluka:
   1. Merge lokalno (checkout base + pull + merge + test na rezultat)
   2. Push + PR (sleden template, link do CI)
   3. Keep as-is (ostavi granka, kazi zosto)
   Discard SAMO na eksplicitno baranje + vneseno `discard`.
   Nikogas `--force`, nikogas auto-merge na main.
4. Cleanup: izbrisi samo workspace sto nie go kreiravme
   (`.worktrees/`). Tugje ne cepkaj.
5. PR-worktree se cuva za feedback. Odbien push != force-push.
