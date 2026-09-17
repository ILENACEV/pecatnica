---
name: distill
description: Distill a finished build into a reusable vault lesson. Use after every product or major task. Writes one L-XXX file per lesson, never a recap of the past but an instruction for the future.
---

# Distill

## Rules
1. One lesson = one L-XXX file per template
   (`.opencode/templates/lesson-template.md`). Never group.
2. Instruction for the future, not a recap of the past. Every lesson must
   carry an ALWAYS / NEVER command.
3. No evidence (file:line, test, URL) = does not enter the vault.
4. After writing: update `research-vault/index.md`
   (lesson + `used-in` when a second product cites it).
5. Reuse test: `grep L-XXX plan.md` on the next product must return >= 1.
   Without a citation, the distill counts as failed.

## File format
`research-vault/domains/<area>/L-XXX.md` per template. Confidence:
high/medium/low + expiry date. Outdated lessons are deleted on the
weekly prune, never kept "just in case".
