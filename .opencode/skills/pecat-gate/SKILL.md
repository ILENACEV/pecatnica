---
name: pecat-gate
description: Machine gate between plan and build rooms. Use before leaving plan and before starting build. Runs pecat-check on plan.md; PASS opens build, FAIL returns to plan.
---

# Pecat Gate

The gate is code, not agreement.

## When
1. End of plan-room: the plan agent runs the check on its own plan.md.
2. Start of build-room: the build agent runs the check BEFORE reading
   any task. No PASS, no reading.

## How
`node .opencode/scripts/pecat-check.mjs <plan.md>`

## Rules
- `PASS` = stamp valid, you may build. Only then.
- `FAIL` = back to the plan-room with the exact reason (missing section /
  no stamp / no reuse-evidence). Do not break, do not bypass, do not
  "fix by hand" - the plan-room fixes plan.md, then re-check.
- The stamp is the exact string `100% SPREMNO - mozes na build`.
  Paraphrases ("it is ready", "build may start") do NOT count.
- Reuse: either an `L-XXX` citation (exactly what is adopted) or explicit
  `nema prethodna lekcija - prv patent`. There is no third option.
