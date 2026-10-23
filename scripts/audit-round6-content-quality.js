const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  { name: 'P1 Basic', path: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md') },
  { name: 'P1 Premium', path: D('150-prompt-umkm-premium.md') },
  { name: 'P1 Ultimate', path: D('150-prompt-umkm-ultimate.md') },
  { name: 'P2 Basic', path: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md') },
  { name: 'P2 Premium', path: D('300-prompt-copywriting-premium.md') },
  { name: 'P2 Ultimate', path: D('300-prompt-copywriting-ultimate.md') },
  { name: 'P3 Basic', path: D('200-template-social-media-basic.md') },
  { name: 'P3 Premium', path: D('200-template-social-media-premium.md') },
  { name: 'P3 Ultimate', path: D('200-template-social-media-ultimate.md') },
];

const issues = [];

// Placeholder patterns that should NOT appear in demo outputs
const placeholderPatterns = [
  { re: /\[PLACEHOLDER\]/gi, tag: '[PLACEHOLDER]' },
  { re: /\[TODO\]/gi, tag: '[TODO]' },
  { re: /\[TBD\]/gi, tag: '[TBD]' },
  { re: /\[FIXME\]/gi, tag: '[FIXME]' },
  { re: /\[INSERT .* HERE\]/gi, tag: '[INSERT ... HERE]' },
  { re: /\[NAMA PERUSAHAAN\]/gi, tag: '[NAMA PERUSAHAAN]' },
  { re: /\[PRODUK ANDA\]/gi, tag: '[PRODUK ANDA]' },
  { re: /\[DESKRIPSI\]/gi, tag: '[DESKRIPSI]' },
  { re: /xxx+/gi, tag: 'xxx placeholder' },
  { re: /lorem ipsum/gi, tag: 'lorem ipsum' },
];

// Check for empty or very short demo sections (< 50 chars after header)
function checkDemoContent(text, fileName) {
  const lines = text.split('\n');
  let inDemo = false;
  let demoStart = 0;
  let demoContent = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect demo section start: ### P-XXX. Title (Contoh Output)
    if (/^###\s+[PT]-\d{3}\..*\(Contoh Output\)/i.test(line)) {
      inDemo = true;
      demoStart = i + 1;
      demoContent = [];
      continue;
    }
    
    // Detect demo section end: next ### heading or ## section
    if (inDemo && /^#{2,3}\s/.test(line)) {
      // Check collected demo content
      const content = demoContent.join('\n').trim();
      
      if (content.length === 0) {
        issues.push(`${fileName}: Demo section at line ${demoStart} is EMPTY`);
      } else if (content.length < 50) {
        issues.push(`${fileName}: Demo section at line ${demoStart} too short (${content.length} chars): ${content.slice(0, 40)}...`);
      }
      
      // Check for placeholders in demo content
      for (const { re, tag } of placeholderPatterns) {
        const matches = content.match(re);
        if (matches) {
          issues.push(`${fileName}: Demo at line ${demoStart} contains ${tag} (${matches.length}x)`);
        }
      }
      
      // Check for generic/vague content (red flags)
      if (/^(\.|,|;|:|-|\*|\d+\.\s)*$/m.test(content)) {
        issues.push(`${fileName}: Demo at line ${demoStart} contains only punctuation/bullets`);
      }
      
      inDemo = false;
      demoContent = [];
      continue;
    }
    
    if (inDemo) {
      demoContent.push(line);
    }
  }
  
  // Handle last demo section if file ends while in demo
  if (inDemo) {
    const content = demoContent.join('\n').trim();
    if (content.length === 0) {
      issues.push(`${fileName}: Demo section at line ${demoStart} is EMPTY (EOF)`);
    } else if (content.length < 50) {
      issues.push(`${fileName}: Demo section at line ${demoStart} too short (${content.length} chars)`);
    }
  }
}

// Check for "contoh output" sections that are actually just prompts repeated
function checkDemoIsNotPromptRepeat(text, fileName) {
  const lines = text.split('\n');
  let inDemo = false;
  let demoStart = 0;
  let demoContent = [];
  let precedingPrompt = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Capture prompt before demo
    if (/^###\s+[PT]-\d{3}\./.test(line) && !/\(Contoh Output\)/i.test(line)) {
      precedingPrompt = [];
      let j = i + 1;
      while (j < lines.length && !/^#{2,3}\s/.test(lines[j])) {
        precedingPrompt.push(lines[j]);
        j++;
      }
    }
    
    if (/^###\s+[PT]-\d{3}\..*\(Contoh Output\)/i.test(line)) {
      inDemo = true;
      demoStart = i + 1;
      demoContent = [];
      continue;
    }
    
    if (inDemo && /^#{2,3}\s/.test(line)) {
      const demoText = demoContent.join('\n').trim();
      const promptText = precedingPrompt.join('\n').trim();
      
      // If demo is >80% similar to prompt, it's probably just a repeat
      if (demoText.length > 0 && promptText.length > 0) {
        const similarity = calculateSimilarity(demoText, promptText);
        if (similarity > 0.8) {
          issues.push(`${fileName}: Demo at line ${demoStart} appears to repeat the prompt (${Math.round(similarity * 100)}% similar)`);
        }
      }
      
      inDemo = false;
      demoContent = [];
      continue;
    }
    
    if (inDemo) {
      demoContent.push(line);
    }
  }
}

function calculateSimilarity(a, b) {
  const wordsA = new Set(a.toLowerCase().split(/\s+/));
  const wordsB = new Set(b.toLowerCase().split(/\s+/));
  const intersection = new Set([...wordsA].filter(x => wordsB.has(x)));
  const union = new Set([...wordsA, ...wordsB]);
  return intersection.size / union.size;
}

// Main audit
console.log('=== AUDIT ROUND 6: DEMO OUTPUT QUALITY ===\n');

for (const file of files) {
  const text = fs.readFileSync(file.path, 'utf8');
  checkDemoContent(text, file.name);
  checkDemoIsNotPromptRepeat(text, file.name);
}

if (issues.length === 0) {
  console.log('✓ ALL DEMO OUTPUTS PASS QUALITY CHECKS');
  console.log('  - No empty demos');
  console.log('  - No placeholders in demos');
  console.log('  - No demos that just repeat the prompt');
} else {
  console.log(`✗ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
