# Metodologija (kratko)

PECATNICA e kompozicija, ne invencija. Sekoj del ima izvor:

1. **Dve sobi + pecat:** plan (read-only, nikogas kod) -> `plan.md` so
   `100% SPREMNO` -> build (nikogas plan od nula). Portata e tehnicka
   (`permission.task` deny), ne dogovor.
2. **Hidden subagenti:** 6, `hidden: true`, se budat po description-match.
   Svez kontekst po task, zabrana za vgnezdени subagenti (depth=1).
   (superpowers SDD; Anthropic sub-agent arhitekturi)
3. **Grill + tracer-bullet:** frontier rundi, odluki = korisnik, fakti =
   agent. Tiketi se vertikalni slices so `Blocked by`. (mattpocock)
4. **Risk-first review:** triage, blast-radius 5/20/50, coverage-elevacija,
   adversarial samo za HIGH, unassessable != PASS. (trailofbits)
5. **TDD + verification:** failing test prvo, svez log + exit 0, inaku ne
   e gotovo. Mutanti + PBT kade zelenото ne e doverlivо.
6. **Frontier mehanika:** trace-summary > full trace; RTV (G=2,V=8);
   PDR (K=4); verifier-gate (sandbox); replay 50/50. (arXiv 2026)
7. **Fable-odnesuvanje:** ledger footer, no-shortcut checklist, effort
   router, batch, append-only istorija. (Anthropic Fable docs)
8. **Vault + distill:** L-XXX lekcii (instrukcija, ne recap) + reuse-test
   (`grep L-XXX plan.md >= 1`). Lokalno, nikogas јавно. (Astra 3-slojna memorija)
9. **Token-ekonomija:** budget-gate, repo-map prvo, handoff-format,
   preload po agent (maxTokens + summaries). (Sayem7456, preload-plugin)
10. **Eval:** with-skill vs baseline, grader `text/passed/evidence`.
    Bez delta nema pecat. (anthropics skill-creator)
