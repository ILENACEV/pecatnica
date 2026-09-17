# Eval harness (with-skill vs without-skill)

Adaptation of the skill-creator harness for PECATNICA. Not automatic -
the eval is a deliberate exercise, the grader is mechanical.

## Procedure
1. Take an eval from `evals.json` (id, skill, prompt, expected).
2. In the SAME turn run twice: one agent WITH the skill, one baseline WITHOUT.
3. For each run write `evals/<id>/grading.json`:
   `{"text": "...", "passed": true/false, "evidence": "..."}`
4. `node evals/scripts/grade.mjs` - pass_rate + evidence.
5. If with-skill is not better than baseline: the skill goes back for rework
   (description? trigger? too many lines?), never stamped.

## Rules
- 2-3 evals per skill are enough at the start.
- Watch navigation: wrong reading order, ignored file.
- Iteration: `evals/<id>/iteration-N/` when reworking a skill.
