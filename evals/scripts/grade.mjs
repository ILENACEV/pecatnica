import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// Grader: cita evals/<id>/grading.json ({text, passed, evidence}) i dava
// pass_rate + delta with-skill vs baseline. Vlezot e racen run, ne avtomatski.
const dir = new URL("..", import.meta.url).pathname;
let total = 0,
  passed = 0;
const rows = [];
for (const id of readdirSync(dir)) {
  if (id === "scripts" || id === "evals.json") continue;
  const g = join(dir, id, "grading.json");
  if (!existsSync(g)) continue;
  const { text, passed: p, evidence } = JSON.parse(readFileSync(g, "utf8"));
  if (typeof p !== "boolean" || typeof text !== "string" || typeof evidence !== "string") {
    console.log("FAIL: los grading format:", id);
    process.exit(1);
  }
  total++;
  if (p) passed++;
  rows.push(`${p ? "PASS" : "FAIL"} ${id} :: ${evidence.slice(0, 120)}`);
}
console.log(rows.join("\n"));
console.log(total === 0 ? "Nema grading.json fajlovi - pusti evals prvo." : `pass_rate: ${passed}/${total}`);
process.exit(0);
