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

// Term replacements: [pattern, replacement, description]
// Order matters: more specific patterns first
// NOTE: "landing page", "followers", "engagement", "reach", "impression" are in KEEP list
const replacements = [
  // Structural terms
  [/\bcampaign\b/gi, 'kampanye', 'campaign→kampanye'],
  [/\bcopywriter\b/gi, 'penulis naskah iklan', 'copywriter→penulis naskah iklan'],
  [/\bcustomer\b/gi, 'pelanggan', 'customer→pelanggan'],
  [/\baudience\b/gi, 'audiens', 'audience→audiens'],
  [/\bgoal\b/gi, 'tujuan', 'goal→tujuan'],
  [/\bcatchy\b/gi, 'menarik', 'catchy→menarik'],
  [/\bfeedback\b/gi, 'masukan', 'feedback→masukan'],
  [/\bcalendar\b/gi, 'kalender', 'calendar→kalender'],
];

function fixFile(file) {
  let text = fs.readFileSync(file.path, 'utf8');
  const lines = text.split('\n');
  const fixedLines = [];
  let inFence = false;
  let fixCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Track code fences
    if (/^```/.test(line)) {
      inFence = !inFence;
      fixedLines.push(line);
      continue;
    }
    
    // Skip lines inside code fences
    if (inFence) {
      fixedLines.push(line);
      continue;
    }
    
    // Skip table rows (may contain technical terms in headers)
    if (/^\s*\|.*\|\s*$/.test(line) || /^\|/.test(line)) {
      fixedLines.push(line);
      continue;
    }
    
    // Skip lines with variable tokens like [ENGAGEMENT_RATE]
    // These are intentional English tokens
    if (/\[[A-Z_]+\]/.test(line)) {
      // Check if the line has variable tokens
      const hasVarToken = /\[[A-Z_]+\]/.test(line);
      if (hasVarToken) {
        // Only replace terms that are NOT inside brackets
        // This is tricky — for now, skip the entire line if it has variable tokens
        // Actually, we should be smarter: only skip the variable token itself
        // Let's do a more careful replacement
        
        let fixedLine = line;
        for (const [pattern, replacement, desc] of replacements) {
          // Find all matches
          const matches = [...fixedLine.matchAll(pattern)];
          for (const match of matches) {
            const matchStart = match.index;
            const matchEnd = matchStart + match[0].length;
            
            // Check if this match is inside a variable token [...]
            const beforeMatch = fixedLine.slice(0, matchStart);
            const afterMatch = fixedLine.slice(matchEnd);
            
            // Count brackets before and after
            const openBrackets = (beforeMatch.match(/\[/g) || []).length;
            const closeBrackets = (beforeMatch.match(/\]/g) || []).length;
            
            // If we're inside a bracket (more opens than closes), skip this match
            if (openBrackets > closeBrackets) {
              continue;
            }
            
            // Also check if the match is part of a larger token like ENGAGEMENT_RATE
            const charBefore = matchStart > 0 ? fixedLine[matchStart - 1] : '';
            const charAfter = matchEnd < fixedLine.length ? fixedLine[matchEnd] : '';
            
            if (/[A-Z_]/.test(charBefore) || /[A-Z_]/.test(charAfter)) {
              continue; // Part of a larger token
            }
            
            // Safe to replace
            fixedLine = fixedLine.slice(0, matchStart) + replacement + fixedLine.slice(matchEnd);
            fixCount++;
          }
        }
        
        fixedLines.push(fixedLine);
        continue;
      }
    }
    
    // Normal line: apply all replacements
    let fixedLine = line;
    for (const [pattern, replacement, desc] of replacements) {
      const matches = fixedLine.match(pattern);
      if (matches) {
        fixedLine = fixedLine.replace(pattern, (match) => {
          // Preserve capitalization
          if (match[0] === match[0].toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }
          return replacement;
        });
        fixCount++;
      }
    }
    
    fixedLines.push(fixedLine);
  }
  
  const fixedText = fixedLines.join('\n');
  fs.writeFileSync(file.path, fixedText, 'utf8');
  
  return fixCount;
}

// Main fix
console.log('=== ROUND 6 TERMINOLOGY FIX ===\n');

let totalFixes = 0;

for (const file of files) {
  const fixes = fixFile(file);
  console.log(`${file.name}: ${fixes} fixes`);
  totalFixes += fixes;
}

console.log(`\nTotal: ${totalFixes} fixes applied`);
console.log('\n=== FIX COMPLETE ===');
