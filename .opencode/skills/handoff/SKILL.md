---
name: handoff
description: Compress session context and hand off between rooms or sessions. Use when switching plan to build, when context grows, or before compaction. Fixed output format, references not pastes.
---

# Handoff

## Budget gate (before every plan)
Measure context: if plan + relevant files > 50% of the window,
first launch a hidden subagent for repo-map only, never read everything.
A single file > 5k tokens is never read whole - grep + first 30 lines.

## Compression (what stays, what goes)
Keep verbatim: errors, `file:line`, commands, API/schemas, migrations,
goal, constraints, decisions + why, verifications, open questions.
Drop: verbose tool output, dead attempts, paraphrased errors.

## Output (fixed format, always)
- Context used / Files inspected / Important facts retained
- Details intentionally skipped / Next minimal action
- Verification status
- Suggested skills (which skills the next agent should invoke)

## Rules
- Reference path/URL, never paste content. Never duplicate
  spec/plan/ADR/diff - path only.
- The handoff lives outside workspace state (temp-dir principle):
  goal, state (`git status`), changed files, exact last user message,
  rejected approaches (so they are not re-explored).
- Redact secrets/PII everywhere.
