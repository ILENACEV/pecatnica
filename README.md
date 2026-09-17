# PECATNICA — dve sobi, nula izbor za korisnikot

[![ci](https://github.com/ILENACEV/pecatnica/actions/workflows/ci.yml/badge.svg)](https://github.com/ILENACEV/pecatnica/actions/workflows/ci.yml)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Research-first builder za AI coding agenti (opencode).
Dve primarni sobi — `plan` i `build` — plus hidden subagenti koi se budat
sami. Korisnikot nikogas ne bira subagent. Sekoj product ostava trag vo
vault; sekoj N+1 product dokazano nasleduva od N.

## Kako raboti

```
SOBA 1: plan                    SOBA 2: build
clarify -> sirina ->             citaj plan.md (pecat) ->
dlabocina -> revise ->           explorer -> executor (TDD) ->
challenge -> plan.md             reviewer (PASS/FAIL) ->
"100% SPREMNO" -/- STOP          verify -> GOTOVO
```

- Plan ne smee da povika `build-*` (tehnicki deny). Bez pecat nema build.
- Build startuva samo so `plan.md` so pecat. Bez pecat: nazad vo plan.
- Reviewer e adversarial, `edit: deny`, samo PASS/FAIL. Fix-loop max 5.
- Nikogas auto-merge na main.

## Struktura

```
opencode.json          # task-vrzuvanje, permissions, MCP, LSP
AGENTS.md              # operativni pravila (sekogas vcita)
.opencode/agents/      # 6 hidden: plan-researcher/scout/challenger, build-explorer/executor/reviewer
.opencode/skills/      # verify/distill/handoff + debugging/review/triage/worktree paket
.opencode/commands/    # /finish /safe-apply /discover /smart-review /compress-context /handoff
.opencode/plugin/      # guard (tehnicki deny) + ledger (operations.log dokaz)
.opencode/templates/   # plan-template.md, lesson-template.md
research-vault/        # index.md + CONTEXT.md (samo skelet; products/ i domains/ se lokalni)
```

## Brz start

1. Kopiraj gi fajlovite vo tvojot proekt (ili kloniraj go repo-to).
2. Otvori opencode vo proektot. Restartiraj ja sesijata (config se cita na start).
3. Tab na `plan`, kazi sto sakas. Cekaj `100% SPREMNO - mozes na build`.
4. Tab na `build`, kazi "odi". Toa e se.

## Memorija i privatnost

`research-vault/products/` i `research-vault/domains/` se vo `.gitignore`
namerno: vistinskite lekcii od tvojata rabota ostanuvaat LOKALNI i nikogas
ne se pushaat. Javno odi samo skeletot. Nikogas ne stavaj tokeni, klucevi,
.env fajlovi ili licni podatoci vo repo.

## Metodologija (izvori)

- SDD / TDD / verification-before-completion: obra/superpowers
- Skill format + eval-harness: anthropics/skills
- Grill-frontier / tracer-bullet / diagnosing-bugs: mattpocock/skills
- Risk-first review / blast-radius / adversarial: trailofbits/skills
- Token-foundation: Sayem7456/opencode-engineering-skills
- Test-time scaling (RTV/PDR), verifier-gate, replay: arXiv 2026
- Long-horizon odnesuvanje: Anthropic Fable 5.1 prompting docs

## Licenca

MIT — vidi LICENSE.
