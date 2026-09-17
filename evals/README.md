# Eval harness (so skill vs bez skill)

Adaptacija na skill-creator harness za PECATNICA. Ne e avtomatski -
evalot e svesna vezba, graderot e mehanicki.

## Postapka
1. Zemi eval od `evals.json` (id, skill, prompt, expected).
2. Vo IST turn pusti dva run-a: eden agent SO skill, eden baseline BEZ.
3. Za sekoj run zapisi `evals/<id>/grading.json`:
   `{"text": "...", "passed": true/false, "evidence": "..."}`
4. `node evals/scripts/grade.mjs` - pass_rate + evidencija.
5. Ako with-skill ne e podobar od baseline: skillot se vraka na dorabotka
   (opis? trigger? premnogu linii?), ne se pecati.

## Pravila
- 2-3 evali po skill se dovolni na pocetok.
- Nabjuduvaj navigacija: pogresen redosled na citanje, ignoriran fajl.
- Iteracija: `evals/<id>/iteration-N/` ako se dorabotuva skill.
