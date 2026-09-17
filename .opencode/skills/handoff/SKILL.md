---
name: handoff
description: Compress session context and hand off between rooms or sessions. Use when switching plan to build, when context grows, or before compaction. Fixed output format, references not pastes.
---

# Handoff

## Budget gate (pred sekoj plan)
Izmeri kontekst: ako planot + relevantni fajlovi > 50% od prozorecot,
prvo pusti hidden subagent samo za repo-map, ne citaj se odma.
Poединечен fajl > 5k tokeni ne se cita cel - grep + prvite 30 linii.

## Kompresija (sto se cuva, sto se frla)
Cuvaј verbatim: greski, `file:linija`, komandi, API/shemi, migracii,
cel, ogranicuvanja, odluki + zosto, verifikacii, otvoreni prasanja.
Frli: verbose tool output, mrtvi obidi, parafrazirani greski.

## Izlez (fiksen format, sekogas)
- Context used / Files inspected / Important facts retained
- Details intentionally skipped / Next minimal action
- Verification status
- Suggested skills (koi Skill tool da gi vika sledniot agent)

## Pravila
- Referenciraj path/URL, ne paste-iraj sodrzina. Ne dupliraj
  spec/plan/ADR/diff - samo path.
- Handoffot zivee nadvor od workspace state (temp-dir princip):
  cel, sostojba (`git status`), izmeneti fajlovi, tocna posledna
  korisnicka poraka, otfrleni pristapi (da ne se istrazuvaat povtorno).
- Redact secrets/PII sekade.
