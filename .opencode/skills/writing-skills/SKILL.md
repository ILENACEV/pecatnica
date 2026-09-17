---
name: writing-skills
description: Meta-skill for creating and testing new skills. Use when adding any skill to this repo. Format, eval, then stamp.
---

# Writing Skills

## Format (tvrd)
- Folder `skill-name/` + `SKILL.md`. `name` == folder, lowercase, edna crticka.
- `description`: treto lice, sto + KOGA (`Use when...`) + trigger zborovi.
  Pushy protiv undertriggering: spomeni gi i implicitnite slucai.
- Telo < 500 linii. Detali vo `references/`, deterministicko vo `scripts/`.
- Degrees-of-freedom: tocna skripta za krevko (migracii, broenje),
  sloboda za otvoreno (dizajn, istraga).

## Sadrzina
- Checklist sto agentot kopira i stiklira. Validator loop
  (run -> fix -> repeat, samo koga validation passa).
- Gotchas od realni greski (najvisok signal).
- Default + escape hatch, ne 5 biblioteki.
- Bez time-sensitive info; staro vo `<details>Old patterns`.

## Eval (pred pecat)
- 2-3 test prompti + `evals.json`. With-skill vs baseline vo ist turn.
- Grader: `text/passed/evidence`. Meri delta + tokeni.
- Iteriraj dodeka feedback ne e prazen. Nabjuduvaj: dali cita pogresen
  redosled, dali ignorira fajl.
