import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../..", import.meta.url).pathname;
let fail = 0;
const bad = (msg) => {
  console.log("FAIL:", msg);
  fail++;
};

// 1. opencode.json parses + has $schema
try {
  const c = JSON.parse(readFileSync(join(root, "opencode.json"), "utf8"));
  if (c.$schema !== "https://opencode.ai/config.json") bad("opencode.json: bad $schema");
  else console.log("OK: opencode.json");
} catch (e) {
  bad("opencode.json does not parse: " + e.message);
}

// 2. AGENTS.md carries the stamp markers
const agents = readFileSync(join(root, "AGENTS.md"), "utf8");
for (const s of ["100% SPREMNO", "Ruling:", "Evidence before synthesis"]) {
  if (!agents.includes(s)) bad("AGENTS.md: missing " + s);
}
console.log("OK: AGENTS.md markers");

// 2b. plan-template carries the gate markers + pecat-check exists
const tpl = readFileSync(join(root, ".opencode/templates/plan-template.md"), "utf8");
for (const s of ["100% SPREMNO - mozes na build", "## 7. ", "## 8. ", "### T1", "Reuse"]) {
  if (!tpl.includes(s)) bad("plan-template: missing " + s);
}
if (!existsSync(join(root, ".opencode/scripts/pecat-check.mjs")))
  bad("missing .opencode/scripts/pecat-check.mjs");
console.log("OK: plan-template + pecat-check");

// 3. skills: SKILL.md, name == folder, description 1-1024
const skillsDir = join(root, ".opencode/skills");
for (const d of readdirSync(skillsDir)) {
  const f = join(skillsDir, d, "SKILL.md");
  if (!existsSync(f)) {
    bad("skill without SKILL.md: " + d);
    continue;
  }
  const t = readFileSync(f, "utf8");
  const m = t.match(/^---\n([\s\S]*?)\n---/);
  if (!m) {
    bad("skill without frontmatter: " + d);
    continue;
  }
  const name = (m[1].match(/^name:\s*(.+)/m) || [])[1];
  const desc = (m[1].match(/^description:\s*(.+)/m) || [])[1];
  if (!name || name.trim() !== d) bad(`skill ${d}: name (${name}) != folder`);
  if (!desc || desc.length < 1 || desc.length > 1024)
    bad(`skill ${d}: description length outside 1-1024`);
  console.log("OK: skill " + d);
}

// 4. agents: description + mode subagent/primary
const agentsDir = join(root, ".opencode/agents");
for (const f of readdirSync(agentsDir)) {
  if (!f.endsWith(".md")) continue;
  const t = readFileSync(join(agentsDir, f), "utf8");
  const m = t.match(/^---\n([\s\S]*?)\n---/);
  if (!m || !/^description:/m.test(m[1]) || !/^mode: (subagent|primary|all)/m.test(m[1])) {
    bad("agent bad frontmatter: " + f);
    continue;
  }
  console.log("OK: agent " + f);
}

console.log(fail === 0 ? "LINT: PASS" : `LINT: ${fail} FAIL`);
process.exit(fail === 0 ? 0 : 1);
