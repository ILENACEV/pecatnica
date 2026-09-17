# Methodology (short)

PECATNICA is a composition, not an invention. Every part has a source.
The stamp string stays untranslated on purpose — it is a protocol token.

1. **Two rooms + stamp:** plan (read-only, never code) -> `plan.md` with
   `100% SPREMNO` -> build (never plans from scratch). The gate is technical
   (`permission.task` deny), not an agreement.
2. **Hidden subagents:** 6, `hidden: true`, wake on description-match.
   Fresh context per task, no nested subagents (depth=1).
   (superpowers SDD; Anthropic sub-agent architectures)
3. **Grill + tracer-bullet:** frontier rounds, decisions = user, facts =
   agent. Tickets are vertical slices with `Blocked by`. (mattpocock)
4. **Risk-first review:** triage, blast-radius 5/20/50, coverage elevation,
   adversarial for HIGH only, unassessable != PASS. (trailofbits)
5. **TDD + verification:** failing test first, fresh log + exit 0, otherwise
   not done. Mutants + PBT where green is not trustworthy.
6. **Frontier mechanics:** trace-summary > full trace; RTV (G=2,V=8);
   PDR (K=4); verifier-gate (sandbox); replay 50/50. (arXiv 2026)
7. **Fable conduct:** ledger footer, no-shortcut checklist, effort
   router, batch, append-only history. (Anthropic Fable docs)
8. **Vault + distill:** L-XXX lessons (instruction, not recap) + reuse-test
   (`grep L-XXX plan.md >= 1`). Local, never public. (Astra layered memory)
9. **Token economy:** budget-gate, repo-map first, handoff format,
   preload per agent (maxTokens + summaries). (Sayem7456, preload-plugin)
10. **Eval:** with-skill vs baseline, grader `text/passed/evidence`.
    No delta, no stamp. (anthropics skill-creator)
