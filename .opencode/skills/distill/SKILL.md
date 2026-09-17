---
name: distill
description: Distill a finished build into a reusable vault lesson. Use after every product or major task. Writes one L-XXX file per lesson, never a recap of the past but an instruction for the future.
---

# Distill

## Pravila
1. Edna lekcija = eden L-XXX fajl po sablon
   (`.opencode/templates/lesson-template.md`). Ne grupiraj.
2. Instrukcija za idnina, ne recap na minato. Sekoja lekcija mora
   da ima STO SEKOGAS / NIKOGAS naredba.
3. Bez dokaz (file:linija, test, URL) = ne vleguva vo vault.
4. Posle zapis: apdejtiraj `research-vault/index.md`
   (lekcija + `koristeno vo` koga vtor product ke ja citira).
5. Reuse-test: `grep L-XXX plan.md` na sledniot product mora >= 1.
   Bez citat, distill se smeta za neuspeshen.

## Format na fajl
`research-vault/domains/<oblast>/L-XXX.md` po sablon. Sigurnost:
visoka/sredna/niska + rok na vazenje. Zastarenite se brisat na
nedelen prune, ne se cuvaat "za sekoj slucaj".
