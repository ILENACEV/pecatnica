---
name: verifier-hardening
description: Harden verification with mutation testing and property-based tests. Use when a green suite is not trusted, or before stamping risky code as verified.
---

# Verifier Hardening

A green test that catches no bug is false confidence. Two tools:

## 1. Mutation testing
Inject deliberate faults (mutants) into the code. A test that does not
fail on a mutant is a weak test. Rule: every HIGH-risk block must kill
>= 1 mutant, otherwise verification = incomplete.

## 2. Property-based testing
Instead of 3 handwritten examples: generate 100+ (Hypothesis /
fast-check / proptest). Define invariants (`for every X holds Y`), not
examples. Ideal for: parsers, math, boundaries, encoding.

## Gate
- HIGH blast-radius + only example-based tests = FAIL.
- A mutant-surviving test gets fixed or deleted, never "good enough".
- PBT invariants are written from spec, not from code (else tautology).
