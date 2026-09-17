---
name: git-worktrees
description: Isolated workspace per feature or agent. Use at the start of plan execution or when parallel agents must not step on each other. Never fight the harness.
---

# Git Worktrees

1. Detektiraj: dali veke si vo worktree? Ako da - ne kreiraj nov.
2. Preferiraj nativen harness-tool ako postoi, duri togas
   `git worktree add`. Bypass na nativen tool = phantom state.
3. Project-local dir `.worktrees/` mora da e git-ignored + commitiran
   vo .gitignore. Submodule-guard: proveri `GIT_DIR` vs `GIT_COMMON`.
4. Setup + baseline testovi PRED rabota. Bez zelen baseline nema start.
5. Eden agent = eden worktree = eden branch. Dva agenti vo ist
   workdir e zabraneto (commit --amend na tug commit).
6. Sandbox-fallback: ako e blokirano, raboti in-place i kazi go toa.
