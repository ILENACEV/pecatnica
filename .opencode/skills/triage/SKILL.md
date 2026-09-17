---
name: triage
description: Entry state-machine for incoming work. Use when a new request, bug, or idea arrives. Classify into needs-triage, ready-for-agent, or wontfix before any investigation.
---

# Triage

## Sostojbi
`needs-triage` -> `ready-for-agent` | `wontfix`. Nema cetvrta.

## Pravila
1. Sekoj vlez stuff se klasificira PRVO: sto e (bug/feature/prasanje),
   kolku e golemo (1 fajl / poveke / nepoznato), dali e blokirano od nesto.
2. `ready-for-agent` bara: jasen opseg + acceptance kriterium + znaen
   vlez (fajlovi ili oblast). Bez ova: nazad vo `needs-triage` so tocno
   prasanje, ne nagagjanje.
3. `wontfix` bara 1-recenica pricina + sto bi go smenilo toa.
   Nikogas tivko otfrlanje.
4. Rabota > 1 sesija: mapiraj decision-tiketi (wayfinder) - koj tiket
   e frontier (preduslovi reseni), koj ceka. Prasanje sto zavisi od
   drugo otvoreno odi vo sledna runda.
5. Grill/questionnaire za ona sto ne mozes sam: fakti soberi sam
   (sub-agent, filesystem), odluki prasaj korisnik. Ne blokiraj -
   prasaj go ostatokot od frontier sega.
