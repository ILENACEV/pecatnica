---
name: frontier-verify
description: Model-agnostic verification mechanics for hard decisions. Use when choosing between candidate solutions, refining after failure, or gating propagation. Trace-summary plus RTV select plus PDR refine plus verifier gate plus replay-branch.
---

# Frontier Verify

## 1. Trace-summary (always before selection)
Compress every attempt into `{hypothesis, attempt, error}` - no terminal spam.
Summaries beat full trajectories for comparison. Never compare raw traces.

## 2. RTV select (parallel selection)
Split N summaries into groups of 2 (G=2). Vote 8 times per group (V=8).
The winner advances, recursively down to 1. Small groups beat one flat
ranking of everything at once.

## 3. PDR refine (sequential reuse)
Take the K=4 best summaries -> run a fresh attempt in a clean context
conditioned on them -> final RTV. Never throw history away, distill it.

## 4. Verifier gate (absolute gate)
No change propagates without sandboxed execution:
`pass = output is empty AND FAILED/ERROR not in output`.
Architecture does not matter - execution is everything. Critic/evolution/
hetero-ensemble are forbidden (proven null).

## 5. Replay-branch (recycle, don't discard)
Archive of trajectories. Next iteration: 50% explore-from-scratch,
50% branch at a critical step from the archive (rare file-set +
reasoning-intense step). Restore via repo-diff only, never replay
expensive commands.
