---
name: writing-skills
description: Meta-skill for creating and testing new skills. Use when adding any skill to this repo. Format, eval, then stamp.
---

# Writing Skills

## Format (hard)
- Folder `skill-name/` + `SKILL.md`. `name` == folder, lowercase, single hyphens.
- `description`: third person, what + WHEN (`Use when...`) + trigger words.
  Pushy against undertriggering: mention implicit cases too.
- Body < 500 lines. Details in `references/`, deterministic parts in `scripts/`.
- Degrees-of-freedom: exact script for fragile (migrations, counting),
  freedom for open-ended (design, research).

## Content
- Checklist the agent copies and ticks. Validator loop
  (run -> fix -> repeat, only when validation passes).
- Gotchas from real mistakes (highest signal).
- Default + escape hatch, not 5 libraries.
- No time-sensitive info; old stuff in `<details>Old patterns`.

## Eval (before stamp)
- 2-3 test prompts + `evals.json`. With-skill vs baseline in the same turn.
- Grader: `text/passed/evidence`. Measure delta + tokens.
- Iterate until feedback is empty. Watch: does it read in the wrong
  order, does it ignore a file.
