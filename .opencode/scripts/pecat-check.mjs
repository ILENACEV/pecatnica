import { readFileSync } from "node:fs";

// PECATNICA pecat-gate: machine check of plan.md.
// Usage: node .opencode/scripts/pecat-check.mjs <plan.md>
// Output: PASS or FAIL:<reason> (exit 1). No stamp, no build.

const file = process.argv[2];
if (!file) {
  console.log("FAIL: no input (usage: pecat-check.mjs <plan.md>)");
  process.exit(1);
}

let t;
try {
  t = readFileSync(file, "utf8");
} catch {
  console.log(`FAIL: missing ${file} - back to the plan-room`);
  process.exit(1);
}

const fail = (why) => {
  console.log(`FAIL: ${why}`);
  process.exit(1);
};

const need = (re, label) => {
  if (!re.test(t)) fail(`missing section: ${label}`);
};

// 1. Structure (light, but mandatory)
need(/^## 1\. /m, "1. Goal");
need(/^## [23]\. /m, "research/reuse");
need(/^## 5\. /m, "Global Constraints");
need(/^### T\d+:/m, "at least 1 task T1..Tn");
need(/^## 7\. /m, "7. Out of Scope");
need(/^## 8\. /m, "8. Verification");

// 2. Stamp (exact string, no paraphrases)
if (!t.includes("100% SPREMNO - mozes na build"))
  fail("no stamp '100% SPREMNO - mozes na build' - plan not approved");

// 3. Reuse-test (proven transfer from the vault)
const hasCitation = /L-\d{3}/.test(t);
const hasFirstClaim = /nema prethodna lekcija/i.test(t);
if (!hasCitation && !hasFirstClaim)
  fail("reuse-test: neither L-XXX citation nor 'nema prethodna lekcija' - what did it inherit from the vault?");

console.log("PASS: stamp valid, you may build");
