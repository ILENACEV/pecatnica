---
name: git-worktrees
description: Isolated workspace per feature or agent. Use at the start of plan execution or when parallel agents must not step on each other. Never fight the harness.
---

# Git Worktrees

1. Detect: are you already in a worktree? If yes - do not create a new one.
2. Prefer the native harness tool if one exists, only then
   `git worktree add`. Bypassing the native tool = phantom state.
3. Project-local dir `.worktrees/` must be git-ignored + committed
   in .gitignore. Submodule-guard: check `GIT_DIR` vs `GIT_COMMON`.
4. Setup + baseline tests BEFORE work. No green baseline, no start.
5. One agent = one worktree = one branch. Two agents in the same
   workdir is forbidden (commit --amend on someone else's commit).
6. Sandbox-fallback: if blocked, work in-place and say so.
