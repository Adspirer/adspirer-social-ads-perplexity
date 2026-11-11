// Validates an Adspirer host package (Perplexity or Manus). Run from the package root.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const read = p => fs.readFileSync(p, 'utf8');
const c = JSON.parse(read('connector.json'));
assert.ok(['perplexity', 'manus'].includes(c.host), 'host');
assert.match(c.mcp.url, /^https:\/\/mcp\.adspirer\.com\/(mcp|search-ads|social-ads|retail-ads|analytics)$/);
assert.match(c.logo, /^https:\/\/storage\.googleapis\.com\/adspirer-images-v1\/brand\//);
for (const f of ['README.md', 'LISTING.md', 'AGENT.md', 'SECURITY.md', 'LICENSE', 'CHANGELOG.md']) assert.ok(fs.existsSync(f), f);

const skills = fs.readdirSync('skills').filter(n => fs.existsSync(path.join('skills', n, 'SKILL.md'))).sort();
assert.deepEqual(skills, [...c.skills].sort(), 'connector.json skills must match skills/');
assert.ok(skills.includes(c.toolsSkill), 'tools skill');
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const n of skills) {
  const t = read(path.join('skills', n, 'SKILL.md'));
  const fm = t.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(fm, n + ': frontmatter');
  assert.ok(new RegExp('^name:\\s*"?' + n + '"?\\s*$', 'm').test(fm[1]), n + ': name must match folder');
  assert.match(fm[1], /^description:\s*\S/m, n + ': description');
  for (const r of t.matchAll(/references\/[a-z0-9-]+\.md/g)) {
    assert.ok(skills.some(s => fs.existsSync(path.join('skills', s, r[0]))), n + ': missing ' + r[0]);
  }
  assert.ok(fs.existsSync(path.join('dist', 'skills', n + '.zip')), n + ': zip missing; rebuild dist');
}
// The endpoint in every skill must be this connector's, not a sibling's.
const other = ['mcp', 'search-ads', 'social-ads', 'retail-ads', 'analytics'].map(s => 'https://mcp.adspirer.com/' + s).filter(u => u !== c.mcp.url);
for (const f of [...walk('skills'), 'AGENT.md', 'README.md', 'LISTING.md']) {
  if (!f.endsWith('.md')) continue;
  const t = read(f);
  for (const u of other) assert.ok(!new RegExp(u.replace(/[.\/]/g, '\\$&') + '(?![a-z-])').test(t), f + ': wrong endpoint ' + u);
  // Host-specific setup text from other clients must not leak in (doc maps list clients legitimately).
  if (!/doc-map\.md$|host-surfaces\.md$/.test(f)) assert.ok(!/Cursor Settings|\.cursor\/|~\/\.cursor/.test(t), f + ': Cursor-specific instructions');
}
// Approval and purchase rules must stay in the tools skill and the agent instructions.
const tools = read(path.join('skills', c.toolsSkill, 'SKILL.md'));
assert.match(tools, /Never buy/, 'purchase rule missing from tools skill');
assert.ok(fs.existsSync(path.join('skills', c.toolsSkill, 'references', `host-${c.host}.md`)), 'host reference');
assert.match(read('AGENT.md'), /Never buy/, 'purchase rule missing from AGENT.md');
if (!c.readOnly) assert.match(read('AGENT.md'), /explicit approval/, 'approval rule missing from AGENT.md');
if (c.host === 'perplexity') {
  const ex = read('examples/agent_api.py');
  assert.match(ex, /"type": "connector"/);
  if (!c.readOnly) assert.match(ex, /require_approval/, 'write connector example must set an approval policy');
}
// Relative links in the docs must resolve.
for (const f of ['README.md', 'LISTING.md', 'AGENT.md']) {
  for (const m of read(f).matchAll(/\]\(([^)]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (target && !/^(https?:|mailto:)/.test(target)) assert.ok(fs.existsSync(target), f + ': broken link ' + target);
  }
}
console.log(`PASS: ${c.name} for ${c.host}: ${skills.length} skills, endpoint, links, approval and purchase rules`);
