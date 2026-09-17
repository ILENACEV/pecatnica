---
description: Zavrsi granka po zeleni testovi - meni merge/PR/keep
agent: build
---

Test-suite e zelena (proveri svezho). Detektiraj base-branch (ne pretpostavuvaj main).
Prikazi meni i cekaj broj:
1. Merge lokalno (checkout base + pull + merge + test na rezultat)
2. Push + PR
3. Keep as-is
$ARGUMENTS
Discard samo na eksplicitno `discard`. Nikogas --force, nikogas auto-merge.
