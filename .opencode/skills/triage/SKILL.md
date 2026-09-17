---
name: triage
description: Entry state-machine for incoming work. Use when a new request, bug, or idea arrives. Classify into needs-triage, ready-for-agent, or wontfix before any investigation.
---

# Triage

## States
`needs-triage` -> `ready-for-agent` | `wontfix`. No fourth one.

## Rules
1. Every incoming item is classified FIRST: what it is (bug/feature/question),
   how big (1 file / many / unknown), whether it is blocked by anything.
2. `ready-for-agent` requires: clear scope + acceptance criterion + known
   input (files or area). Without that: back to `needs-triage` with an exact
   question, not a guess.
3. `wontfix` requires a 1-sentence reason + what would change that.
   Never silently drop.
4. Work > 1 session: map decision-tickets (wayfinder) - which ticket
   is frontier (prerequisites resolved), which waits. A question depending
   on another open one goes to the next round.
5. Grill/questionnaire for what you cannot decide alone: gather facts alone
   (sub-agent, filesystem), ask the user for decisions. Do not block -
   ask the rest of the frontier now.
