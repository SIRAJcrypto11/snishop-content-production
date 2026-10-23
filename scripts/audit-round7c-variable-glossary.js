const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  { name: 'P1 Basic', path: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'), glossarySection: 'Lampiran C' },
  { name: 'P2 Basic', path: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'), glossarySection: 'Lampiran C' },
  { name: 'P3 Basic', path: D('200-template-social-media-basic.md'), glossarySection: 'Lampiran F' },
];

const issues = [];

function extractGlossaryVariables(text, glossarySection) {
  // Find the glossary section
  const glossaryPattern = new RegExp(`##\\s+${glossarySection}[:\\s]([\\s\\S]*?)(?=##\\s+Lampiran|$)`, 'i');
  const glossaryMatch = text.match(glossaryPattern);
  
  if (!glossaryMatch) {
    return new Set();
  }
  
  const glossaryText = glossaryMatch[1];
  
  // Extract variable definitions from table rows: | [VAR_NAME] | ... |
  const varPattern = /\|\s*\[([A-Z_]+)\]\s*\|/g;
  const matches = [...glossaryText.matchAll(varPattern)];
  
  return new Set(matches.map(m => m[1]));
}

function extractUsedVariables(text) {
  // Extract all variable usages: [VAR_NAME]
  const varPattern = /\[([A-Z_]+)\]/g;
  const matches = [...text.matchAll(varPattern)];
  
  return new Set(matches.map(m => m[1]));
}

function checkVariableCompleteness(file) {
  const text = fs.readFileSync(file.path, 'utf8');
  
  const glossaryVars = extractGlossaryVariables(text, file.glossarySection);
  const usedVars = extractUsedVariables(text);
  
  // Find variables that are used but not defined in glossary
  const undefinedVars = new Set();
  for (const varName of usedVars) {
    if (!glossaryVars.has(varName)) {
      undefinedVars.add(varName);
    }
  }
  
  // Find variables that are defined but not used
  const unusedVars = new Set();
  for (const varName of glossaryVars) {
    if (!usedVars.has(varName)) {
      unusedVars.add(varName);
    }
  }
  
  return {
    glossaryVars,
    usedVars,
    undefinedVars,
    unusedVars,
  };
}

// Main audit
console.log('=== AUDIT ROUND 7c: VARIABLE GLOSSARY COMPLETENESS ===\n');

for (const file of files) {
  console.log(`Checking ${file.name}...`);
  
  const result = checkVariableCompleteness(file);
  
  console.log(`  Glossary variables: ${result.glossaryVars.size}`);
  console.log(`  Used variables: ${result.usedVars.size}`);
  console.log(`  Undefined (used but not in glossary): ${result.undefinedVars.size}`);
  console.log(`  Unused (in glossary but not used): ${result.unusedVars.size}`);
  
  if (result.undefinedVars.size > 0) {
    const varList = [...result.undefinedVars].slice(0, 10).join(', ');
    const more = result.undefinedVars.size > 10 ? ` ... and ${result.undefinedVars.size - 10} more` : '';
    issues.push(`${file.name}: ${result.undefinedVars.size} undefined variables: ${varList}${more}`);
    console.log(`  ✗ Undefined variables: ${[...result.undefinedVars].join(', ')}`);
  }
  
  if (result.unusedVars.size > 0 && result.unusedVars.size < 5) {
    // Only report if small number (might be intentional for future use)
    console.log(`  ⚠ Unused variables: ${[...result.unusedVars].join(', ')}`);
  }
  
  console.log('');
}

if (issues.length === 0) {
  console.log('✓ ALL VARIABLES PROPERLY DEFINED');
  console.log('  - All used variables are in glossary');
  console.log('  - Glossary is complete');
} else {
  console.log(`✗ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
