---
name: review-disciplina
description: Discipline for giving and receiving code review. Use after every task, before merge, and when review feedback arrives. No blind implementation of feedback.
---

# Review Discipline

## Requesting review (after every task)
- Pin the base: `git diff <base>...HEAD` (three-dot) + `git log`.
- Context: diff + plan + exact requirements. Never session history.
- Never skip "because it is simple".
- Two axes in parallel, separate agents: Standards (built right?)
  and Spec (right thing?). Aggregate without merge/rerank, < 400 words per axis.

## Receiving review (when feedback arrives)
- Verify-before-implement: check the note in code before applying it.
- No "great point!" + blind apply. If the reviewer is wrong: reply with
  technical reasoning + evidence, never silently ignore.
- Critical = fix now. Important = before continuing. Minor = park in
  a list, never into the fix-loop.
- Second opinion for HIGH-risk: one more independent reviewer (another
  model if available). Two PASS = PASS.

## Spec-to-code compliance
After patch: is every spec point covered? Missing/partial/scope-creep
with spec citation. Looks-implemented-but-wrong is caught only this way.
