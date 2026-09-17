---
description: Finish a branch after green tests - merge/PR/keep menu
agent: build
---

The test-suite is green (verify fresh). Detect base-branch (never assume main).
Show the menu and wait for a number:
1. Merge locally (checkout base + pull + merge + test the result)
2. Push + PR
3. Keep as-is
$ARGUMENTS
Discard only on explicit `discard`. Never --force, never auto-merge.
