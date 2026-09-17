---
name: pecat-gate
description: Machine gate between plan and build rooms. Use before leaving plan and before starting build. Runs pecat-check on plan.md; PASS opens build, FAIL returns to plan.
---

# Pecat Gate

Portata e kod, ne dogovor.

## Koga
1. Kraj na plan-soba: plan-agentot ja pusta proverkata vrz svojata plan.md.
2. Start na build-soba: build-agentot ja pusta proverkata PRED da procita
   bilo koj task. Bez PASS nema citanje.

## Kako
`node .opencode/scripts/pecat-check.mjs <plan.md>`

## Pravila
- `PASS` = pecat vazi, mozes na build. Samo togas.
- `FAIL` = vrati se vo plan-soba so tocnata pricina (fali sekcija /
  nema pecat / nema reuse-dokaz). Ne krsi, ne zaobikoluvaj, ne
  "popravi racno" - plan-soba ja poprava plan.md, pa re-check.
- Pecatot e tocen string `100% SPREMNO - mozes na build`.
  Parafrazi ("spremno e", "moze build") NE vazat.
- Reuse: ili `L-XXX` citat (sto tocno se prezema) ili eksplicitno
  `nema prethodna lekcija - prv patent`. Treta opcija ne postoi.
