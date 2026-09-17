# PECATNICA — two rooms, zero choice for the user

[![ci](https://github.com/ILENACEV/pecatnica/actions/workflows/ci.yml/badge.svg)](https://github.com/ILENACEV/pecatnica/actions/workflows/ci.yml)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A research-first builder for AI coding agents (opencode).
Two primary rooms — `plan` and `build` — plus hidden subagents that wake
up on their own. The user never picks a subagent. Every product leaves a
trace in the vault; every N+1 product provably inherits from N.

## Why it exists

Most agent setups rely on advice ("do not start until approved").
PECATNICA turns the plan-to-build handoff into **machine-checked gates**:
a stamp string, a section checklist, and a reuse citation — verified by
script, not by trust. What the top frameworks leave as recommendations,
here is code.

## How it works

```
ROOM 1: plan                    ROOM 2: build
clarify -> breadth ->            read plan.md (stamp) ->
depth -> revise ->               explorer -> executor (TDD) ->
challenge -> plan.md             reviewer (PASS/FAIL) ->
"100% SPREMNO" -/- STOP          verify -> DONE
```

- Plan can never invoke `build-*` (technical deny). No stamp, no build.
- Build starts only with a stamped `plan.md`. No stamp: back to plan.
- Reviewer is adversarial, `edit: deny`, PASS/FAIL only. Fix-loop max 5.
- Never auto-merge to main.
- The stamp is the literal string `100% SPREMNO - mozes na build`
  (kept across languages — it is a protocol token, checked by script).

## Structure

```
opencode.json          # task wiring, permissions, MCP, LSP
AGENTS.md              # operating rules (always loaded)
.opencode/agents/      # 6 hidden: plan-researcher/scout/challenger, build-explorer/executor/reviewer
.opencode/skills/      # pecat-gate, frontier-verify, distill, handoff + debugging/review/triage/worktree pack
.opencode/scripts/     # pecat-check.mjs - machine check of plan.md (PASS/FAIL)
.opencode/commands/    # /finish /safe-apply /discover /smart-review /compress-context /handoff
.opencode/plugin/      # guard (technical deny) + ledger (operations.log evidence)
.opencode/templates/   # plan-template.md, lesson-template.md
research-vault/        # index.md + CONTEXT.md (skeleton only; products/ and domains/ stay local)
evals/                 # with-skill vs baseline harness
docs/                  # INSTALL + METHODOLOGY
```

## Quickstart

1. Copy the files into your project (or clone this repo).
2. Open opencode in the project. Restart the session (config loads at start).
3. Tab to `plan`, say what you want. Wait for `100% SPREMNO - mozes na build`.
4. Tab to `build`, say "go". That is all.

See [docs/INSTALL.md](docs/INSTALL.md) for offline notes and details.

## Memory and privacy

`research-vault/products/` and `research-vault/domains/` are in
`.gitignore` on purpose: real lessons from your work stay LOCAL and are
never pushed. Only the skeleton goes public. Never put tokens, keys,
.env files or personal data in the repo. See [SECURITY.md](SECURITY.md).

## Methodology (sources)

- SDD / TDD / verification-before-completion: obra/superpowers
- Skill format + eval-harness: anthropics/skills
- Grill-frontier / tracer-bullet / diagnosing-bugs: mattpocock/skills
- Risk-first review / blast-radius / adversarial: trailofbits/skills
- Token-foundation: Sayem7456/opencode-engineering-skills
- Test-time scaling (RTV/PDR), verifier-gate, replay: arXiv 2026
- Long-horizon conduct: Anthropic Fable 5.1 prompting docs
- Proactive assistant + layered memory: Google DeepMind Project Astra

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Flow: issue first, branch, green
CI (`skill-lint` + gitleaks), strict PR template. No secrets in diffs.

## License

MIT — see LICENSE.
