# Contributing to PECATNICA

## Flow (stamp logic applies to contributions too)
1. Open an issue FIRST (bug / feature / new-skill) — no issue, no PR.
2. Branch from `main`: `feat/<name>`, `fix/<name>`, `skill/<name>`.
3. Every skill/agent change must pass `node .github/scripts/lint.mjs` locally.
4. New skill: `name == folder`, `description` with trigger words
   ("Use when..."), body < 500 lines, details in `references/`.
5. Never secrets in a PR: tokens, keys, .env, personal data.
   CI (gitleaks) fails on purpose if one leaks.
6. PR to `main` with the template filled. Merge only on green CI.

## Forbidden (CI + reviewer catch these)
- try/except:pass, mocks to pass a test, deleting a failing test
- Claiming "fixed" without a log (test/build output)
- Refactoring outside the task
