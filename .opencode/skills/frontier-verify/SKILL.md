---
name: frontier-verify
description: Model-agnostic verification mechanics for hard decisions. Use when choosing between candidate solutions, refining after failure, or gating propagation. Trace-summary plus RTV select plus PDR refine plus verifier gate plus replay-branch.
---

# Frontier Verify

## 1. Trace-summary (sekogas pred selekcija)
Kompresiraj sekoj obid vo `{hipoteza, obid, greska}` - bez terminal-spam.
Summaries > full trajectories za sporedba. Nikogas ne sporeduvaj
sirovi trace-ovi.

## 2. RTV select (paralelna selekcija)
Podeli N summaries vo grupi po 2 (G=2). Za sekoja grupa glasaj 8 pati
(V=8). Pobednikot odi ponatamu, rekurzivno do 1. Mali grupi > flat
rangiranje na site odednas.

## 3. PDR refine (sekvencijalna re-upotreba)
Zemi K=4 najdobri summaries -> pusti svez obid vo cist kontekst
usloven na niv -> finalen RTV. Ne frlaj ja istorijata, destiliraj ja.

## 4. Verifier gate (apsolutna porta)
Niedna promena ne propagira bez sandbox-egzekucija:
`pass = izlez e prazen AND FAILED/ERROR ne e vo output`.
Arhitekturata ne e bitna - egzekucijata e se. Critic/evolution/
hetero-ensemble se zabraneti (dokazano null).

## 5. Replay-branch (recikliraj, ne frlaj)
Arhiva na traektorii. Sledna iteracija: 50% explore-from-scratch,
50% branch na kriticen step od arhiva (redok file-set +
reasoning-intenziven step). Restore samo so repo-diff, ne replay
na skapi komandi.
