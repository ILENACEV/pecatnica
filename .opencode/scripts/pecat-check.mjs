import { readFileSync } from "node:fs";

// PECATNICA pecat-gate: masinska proverka na plan.md.
// Upotreba: node .opencode/scripts/pecat-check.mjs <plan.md>
// Izlez: PASS ili FAIL:<pricina> (exit 1). Bez pecat nema build.

const file = process.argv[2];
if (!file) {
  console.log("FAIL: nema vlez (upotreba: pecat-check.mjs <plan.md>)");
  process.exit(1);
}

let t;
try {
  t = readFileSync(file, "utf8");
} catch {
  console.log(`FAIL: ne postoi ${file} - vrati se vo plan-soba`);
  process.exit(1);
}

const fail = (why) => {
  console.log(`FAIL: ${why}`);
  process.exit(1);
};

const need = (re, label) => {
  if (!re.test(t)) fail(`fali sekcija: ${label}`);
};

// 1. Struktura (lesna, no zadolzitelna)
need(/^## 1\. /m, "1. Cel");
need(/^## [23]\. /m, "research/reuse");
need(/^## 5\. /m, "Global Constraints");
need(/^### T\d+:/m, "barem 1 task T1..Tn");
need(/^## 7\. /m, "7. Out of Scope");
need(/^## 8\. /m, "8. Verifikacija");

// 2. Pecat (tocen string, bez parafrazi)
if (!t.includes("100% SPREMNO - mozes na build"))
  fail("nema pecat '100% SPREMNO - mozes na build' - planot ne e odobren");

// 3. Reuse-test (dokazan prenos od vault)
const hasCitation = /L-\d{3}/.test(t);
const hasFirstClaim = /nema prethodna lekcija/i.test(t);
if (!hasCitation && !hasFirstClaim)
  fail("reuse-test: nitu L-XXX citat, nitu 'nema prethodna lekcija' - sto nasledi od vault?");

console.log("PASS: pecat vazi, mozes na build");
