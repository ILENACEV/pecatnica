---
description: Primeni naogjalista eden-po-eden so diff-inspekcija i test
agent: build
---

Za sekoj item od review/plan ($ARGUMENTS):
1. Pokazi diff PRED primena. Cekaj potvrda za HIGH-risk.
2. Primeni minimalno, samo toj item.
3. Test po item (tocna komanda + izlez). Crveno = stop, ne prodolzuvaj.
4. Commit po item ili na kraj po dogovor. Nikogas batch bez inspekcija.
