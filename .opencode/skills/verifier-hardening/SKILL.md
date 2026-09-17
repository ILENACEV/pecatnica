---
name: verifier-hardening
description: Harden verification with mutation testing and property-based tests. Use when a green suite is not trusted, or before stamping risky code as verified.
---

# Verifier Hardening

Zelen test sto ne фаќа bug e lazна doverba. Dva alata:

## 1. Mutation testing
Ubaci namerni greski (mutanti) vo kodot. Test sto ne pagja na mutant
e slab test. Pravilo: sekoj HIGH-risk blok mora da ubie >= 1 mutant,
inaku verification = nepotpolneto.

## 2. Property-based testing
Namesto 3 racni primeri: generiraj 100+ (Hypothesis / fast-check /
proptest). Definiraj invarijanti (`za sekoj X vazi Y`), ne primeri.
Idealno za: parseri, matematika (EKS!), granici, enkodiranje.

## Gate
- HIGH blast-radius + samo primer-based testovi = FAIL.
- Mutant-prezivean test se poprava ili brise, nikogas "dovolno e".
- PBT invarijantite se pisuvaat od spec, ne od kod (inaku se tautologija).
