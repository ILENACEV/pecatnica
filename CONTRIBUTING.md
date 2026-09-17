# Contributing vo PECATNICA

## Flow (pecat-logika i za kontribucii)
1. Otvori issue PRVO (bug / feature / nov-skill) — bez issue nema PR.
2. Branch od `main`: `feat/<ime>`, `fix/<ime>`, `skill/<ime>`.
3. Sekoja promena na skill/agent mora da pomine `node .github/scripts/lint.mjs` lokalno.
4. Nov skill: `name == folder`, `description` so trigger zborovi
   ("Use when..."), telo < 500 linii, detali vo `references/`.
5. Nikogas tajni vo PR: tokeni, klucevi, .env, licni podatoci.
   CI (gitleaks) pagja namerno ako protece.
6. PR kon `main` so popolnet template. Merge samo na zelen CI.

## Zabraneto (CI + reviewer gi fakjaat)
- try/except:pass, mock za da mine test, brisenje test sto pagja
- Tvrdnja "popraveno e" bez log (test/build izlez)
- Refaktor nadvor od taskot
