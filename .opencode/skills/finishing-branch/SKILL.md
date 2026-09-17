---
name: finishing-branch
description: Close a development branch cleanly. Use when implementation is done and tests are green. Verify, choose merge/PR/keep, clean up.
---

# Finishing Branch

1. Fresh full test-suite FIRST. If red: no menu, back to fix.
2. Detect env: normal repo / named branch / detached HEAD.
   Confirm base-branch, never assume main.
3. Show the exact menu, wait for a decision:
   1. Merge locally (checkout base + pull + merge + test the result)
   2. Push + PR (follow template, link CI)
   3. Keep as-is (leave the branch, say why)
   Discard ONLY on explicit request + typed `discard`.
   Never `--force`, never auto-merge to main.
4. Cleanup: delete only the workspace we created
   (`.worktrees/`). Never touch someone else's.
5. PR-worktree is kept for feedback. Rejected push != force-push.
