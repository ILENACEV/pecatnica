---
name: systematic-debugging
description: Root-cause debugging in 4 gated phases. Use when facing any bug, test failure, or unexpected behavior. No fix without Phase 1 investigation.
---

# Systematic Debugging

## Iron Law
NO fix without Phase 1 investigation. Fix the source, not the symptom.

## 4 phases (in order, no skipping)
1. **Root cause:** reproduction + git diff + instrumentation at component
   boundaries (echo at every boundary). Backward-tracing.
2. **Pattern:** find a working example, compare fully. What is different?
3. **Hypothesis:** ONE, falsifiable (`If X, then Y will disappear`),
   minimal test. Show it before testing.
4. **Implementation:** failing test first, then ONE fix.

## Stop rules
- Tight feedback loop is the gate: without a red-capable command (failing
  test, curl, CLI fixture) there is no Phase 2 - do not hypothesize.
- 1 variable at a time. Every log tagged `[DEBUG-xxxx]`, deleted at the end.
- 3 failed fixes -> STOP, ask about architecture. Never a 4th identical fix.
- Regression test BEFORE fix. Cleanup checklist: repro green, DEBUG deleted,
  hypothesis in commit message. Redact secrets `<REDACTED>`.
