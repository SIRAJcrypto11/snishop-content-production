const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  '150-prompt-umkm-ultimate.md',
  '300-prompt-copywriting-ultimate.md',
  '200-template-social-media-ultimate.md',
];

for (const f of files) {
  console.log('=== ' + f + ' ===');
  const lines = fs.readFileSync(D(f), 'utf8').split('\n');

  // Find H1->H3 skips: track prev heading level
  let prevLevel = 0;
  let prevLine = 0;
  lines.forEach((line, i) => {
    const m = line.match(/^(#{1,6}) /);
    if (m) {
      const level = m[1].length;
      if (prevLevel && level > prevLevel + 1) {
        console.log(`  SKIP H${prevLevel}->H${level} at line ${i + 1}`);
        console.log(`    prev H${prevLevel} at line ${prevLine}: ${lines[prevLine - 1].slice(0, 80)}`);
        console.log(`    curr H${level} at line ${i + 1}: ${line.slice(0, 80)}`);
      }
      prevLevel = level;
      prevLine = i + 1;
    }
  });

  // Fence state debug: count fences up to the first double-space line
  let inFence = false;
  const fenceTransitions = [];
  lines.forEach((line, i) => {
    if (/^```/.test(line)) {
      inFence = !inFence;
      fenceTransitions.push({ line: i + 1, state: inFence ? 'OPEN' : 'CLOSE', text: line.slice(0, 40) });
    }
  });
  console.log(`  Total fences: ${fenceTransitions.length}, final state: ${inFence ? 'OPEN (BAD)' : 'CLOSED (OK)'}`);
  if (inFence) {
    // Find the last unmatched fence
    console.log('  Last 5 fence transitions:');
    fenceTransitions.slice(-5).forEach((t) => console.log(`    line ${t.line}: ${t.state} "${t.text}"`));
  }
}
