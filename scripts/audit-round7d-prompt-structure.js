const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  { name: 'P1 Basic', path: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md') },
  { name: 'P2 Basic', path: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md') },
  { name: 'P3 Basic', path: D('200-template-social-media-basic.md') },
];

const issues = [];
const stats = {};

function analyzePromptStructure(text, fileName) {
  const lines = text.split('\n');
  const prompts = [];
  let currentPrompt = null;
  
  stats[fileName] = {
    totalPrompts: 0,
    withKapanPakai: 0,
    withVariabel: 0,
    withPrompt: 0,
    withHasilDiharapkan: 0,
    incompletePrompts: [],
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect prompt start: ### P-XXX. Title or ### T-XXX. Title
    const promptMatch = line.match(/^###\s+([PT]-\d{3})\.\s+(.+)$/);
    if (promptMatch) {
      if (currentPrompt) {
        prompts.push(currentPrompt);
      }
      
      currentPrompt = {
        code: promptMatch[1],
        title: promptMatch[2],
        line: i + 1,
        hasKapanPakai: false,
        hasVariabel: false,
        hasPrompt: false,
        hasHasilDiharapkan: false,
        content: [],
      };
      
      stats[fileName].totalPrompts++;
      continue;
    }
    
    if (currentPrompt) {
      currentPrompt.content.push(line);
      
      if (/^Kapan pakai:/i.test(line)) {
        currentPrompt.hasKapanPakai = true;
        stats[fileName].withKapanPakai++;
      }
      if (/^Variabel:/i.test(line)) {
        currentPrompt.hasVariabel = true;
        stats[fileName].withVariabel++;
      }
      if (/^Prompt:/i.test(line)) {
        currentPrompt.hasPrompt = true;
        stats[fileName].withPrompt++;
      }
      if (/^Hasil yang diharapkan:/i.test(line)) {
        currentPrompt.hasHasilDiharapkan = true;
        stats[fileName].withHasilDiharapkan++;
      }
    }
  }
  
  if (currentPrompt) {
    prompts.push(currentPrompt);
  }
  
  // Find incomplete prompts
  for (const prompt of prompts) {
    const missing = [];
    if (!prompt.hasKapanPakai) missing.push('Kapan pakai');
    if (!prompt.hasVariabel) missing.push('Variabel');
    if (!prompt.hasPrompt) missing.push('Prompt');
    if (!prompt.hasHasilDiharapkan) missing.push('Hasil yang diharapkan');
    
    if (missing.length > 0) {
      stats[fileName].incompletePrompts.push({
        code: prompt.code,
        title: prompt.title,
        line: prompt.line,
        missing,
      });
    }
  }
}

// Main audit
console.log('=== AUDIT ROUND 7d: PROMPT STRUCTURE CONSISTENCY ===\n');

for (const file of files) {
  const text = fs.readFileSync(file.path, 'utf8');
  analyzePromptStructure(text, file.name);
}

// Print statistics
console.log('Prompt Structure Statistics:\n');
console.log('File           | Total | Kapan Pakai | Variabel | Prompt | Hasil');
console.log('---------------|-------|-------------|----------|--------|------');

for (const file of files) {
  const s = stats[file.name];
  console.log(
    `${file.name.padEnd(15)}| ${String(s.totalPrompts).padStart(5)} | ${String(s.withKapanPakai).padStart(11)} | ${String(s.withVariabel).padStart(8)} | ${String(s.withPrompt).padStart(6)} | ${String(s.withHasilDiharapkan).padStart(5)}`
  );
}

// Report incomplete prompts
let totalIncomplete = 0;
for (const file of files) {
  const incomplete = stats[file.name].incompletePrompts;
  if (incomplete.length > 0) {
    console.log(`\n${file.name}: ${incomplete.length} incomplete prompts`);
    
    for (const prompt of incomplete.slice(0, 5)) {
      console.log(`  - ${prompt.code} (${prompt.title}): missing ${prompt.missing.join(', ')}`);
      totalIncomplete++;
    }
    
    if (incomplete.length > 5) {
      console.log(`  ... and ${incomplete.length - 5} more`);
      totalIncomplete += incomplete.length - 5;
    }
  }
}

if (totalIncomplete === 0) {
  console.log('\n✓ ALL PROMPTS HAVE COMPLETE STRUCTURE');
  console.log('  - All prompts have "Kapan pakai"');
  console.log('  - All prompts have "Variabel"');
  console.log('  - All prompts have "Prompt"');
  console.log('  - All prompts have "Hasil yang diharapkan"');
} else {
  console.log(`\n✗ FOUND ${totalIncomplete} INCOMPLETE PROMPTS`);
}

console.log('\n=== AUDIT COMPLETE ===');
