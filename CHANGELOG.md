# Changelog

## v0.6 — English (official language)
- Full rewrite of every file in English: AGENTS.md, README, agents,
  skills, commands, templates, vault, evals, docs, CI, plugins
- Protocol tokens unchanged (machine-checked): stamp
  `100% SPREMNO - mozes na build`, `Ruling:`, `file:line`, `L-XXX`
- docs/METODOLOGIJA.md -> docs/METHODOLOGY.md

## v0.5 — Machine stamp (our own)
- `pecat-check.mjs`: plan.md check (sections + exact stamp + reuse-test)
- `pecat-gate` skill: PASS opens build, FAIL returns to plan
- lint extended: template must carry the gate markers

## v0.4 — Wave C
- eval-harness, preload-plugin, docs, SECURITY, CHANGELOG, badges

## v0.3 — Wave B
- 7 skills: systematic-debugging, verifier-hardening, review-disciplina,
  writing-skills, finishing-branch, git-worktrees, triage
- 6 commands: finish, safe-apply, discover, smart-review, compress-context, handoff

## v0.2 — Wave A
- guard + ledger hooks, compaction prune
- CI (skill-lint + gitleaks), CONTRIBUTING, PR template

## v0.1 — Foundation
- Two rooms (plan/build), 6 hidden subagents, 3 skills,
  vault skeleton, plan/L-XXX templates
