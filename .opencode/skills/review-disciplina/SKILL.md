---
name: review-disciplina
description: Discipline for giving and receiving code review. Use after every task, before merge, and when review feedback arrives. No blind implementation of feedback.
---

# Review Disciplina

## Baranje review (posle sekoj task)
- Fiksiraj base: `git diff <base>...HEAD` (three-dot) + `git log`.
- Kontekst: diff + plan + tocni baranja. Nikogas istorija od sesija.
- Nikogas skip "bidejki e ednostavno".
- Dve oski paralelno, odvoeni agenti: Standards (pravilno napraveno?)
  i Spec (pravata rabota?). Agregacija bez merge/rerank, < 400 zborovi po osa.

## Primanje review (koga feedback stigne)
- Verify-before-implement: proveri ja zabeleskata vo kod pred da ja primenis.
- Bez "great point!" + slep apply. Ako reviewerot gresi: vrati so
  tehnicko obrazlozenie + dokaz, ne ignoriraj tivko.
- Critical = fix vednas. Important = pred prodolzuvanje. Minor = parkiraj
  vo lista, nikogas vo fix-loop.
- Second-opinion za HIGH-risk: uste eden nezavisen reviewer (drug model
  ako e dostapen). Dva PASS = PASS.

## Spec-to-code compliance
Posle patch: dali sekoja tocka od spec e pokriena? Missing/partial/scope-creep
so citat od spec. Izgleda-implementirano-ama-pogresno se fakja samo vaka.
