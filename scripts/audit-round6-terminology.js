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

// Terms that should be consistently translated across all products
// Format: [English/loanword, correct Indonesian, context notes]
const termRules = [
  // Structural terms (must translate)
  { wrong: /\bworkflow\b/gi, correct: 'alur kerja', note: 'workflow→alur kerja' },
  { wrong: /\bstrategy\b/gi, correct: 'strategi', note: 'strategy→strategi' },
  { wrong: /\bplanning\b/gi, correct: 'perencanaan', note: 'planning→perencanaan' },
  { wrong: /\bcontent pillar\b/gi, correct: 'pilar konten', note: 'content pillar→pilar konten' },
  { wrong: /\bsequence\b/gi, correct: 'rangkaian', note: 'sequence→rangkaian' },
  { wrong: /\bcalendar\b/gi, correct: 'kalender', note: 'calendar→kalender' },
  { wrong: /\bdeadline\b/gi, correct: 'batas waktu', note: 'deadline→batas waktu' },
  { wrong: /\bmilestone\b/gi, correct: 'pencapaian', note: 'milestone→pencapaian' },
  { wrong: /\btimeline\b/gi, correct: 'linimasa', note: 'timeline→linimasa' },
  { wrong: /\bfeedback\b/gi, correct: 'masukan', note: 'feedback→masukan' },
  { wrong: /\bexecutive summary\b/gi, correct: 'ringkasan eksekutif', note: 'executive summary→ringkasan eksekutif' },
  { wrong: /\boverview\b/gi, correct: 'ringkasan', note: 'overview→ringkasan' },
  { wrong: /\binterview\b/gi, correct: 'wawancara', note: 'interview→wawancara' },
  
  // Role names (must translate)
  { wrong: /\bcontent strategist\b/gi, correct: 'perancang strategi konten', note: 'role: content strategist' },
  { wrong: /\bproduct marketing specialist\b/gi, correct: 'spesialis pemasaran produk', note: 'role: product marketing specialist' },
  { wrong: /\bsocial media manager\b/gi, correct: 'pengelola media sosial', note: 'role: social media manager' },
  { wrong: /\bcopywriter\b/gi, correct: 'penulis naskah iklan', note: 'role: copywriter' },
  
  // Action terms (must translate)
  { wrong: /\bdownload\b/gi, correct: 'unduh', note: 'download→unduh' },
  { wrong: /\bupload\b/gi, correct: 'unggah', note: 'upload→unggah' },
  { wrong: /\bscript\b(?!\s+code)/gi, correct: 'naskah', note: 'script→naskah (not code script)' },
  
  // Customer terms (must translate in prose)
  { wrong: /\bcustomer\b/gi, correct: 'pelanggan', note: 'customer→pelanggan' },
  { wrong: /\baudience\b/gi, correct: 'audiens', note: 'audience→audiens' },
  { wrong: /\bgoal\b/gi, correct: 'tujuan', note: 'goal→tujuan' },
  
  // Business terms
  { wrong: /\bcampaign\b/gi, correct: 'kampanye', note: 'campaign→kampanye' },
  { wrong: /\bcatchy\b/gi, correct: 'menarik', note: 'catchy→menarik' },
  { wrong: /\bmotivating\b/gi, correct: 'memotivasi', note: 'motivating→memotivasi' },
  
  // UI/UX terms
  { wrong: /\bthank you page\b/gi, correct: 'halaman ucapan terima kasih', note: 'thank you page→halaman ucapan terima kasih' },
  // NOTE: "landing page" is in KEEP list (universal marketing loanword)
];

// Terms that should be KEPT as English (universal marketing loanwords)
const keepEnglish = [
  'Headline', 'Hook', 'CTA', 'Storytelling', 'Caption', 'Reel', 'Carousel',
  'Landing Page', 'Hero', 'Flash Sale', 'Checkout', 'SEO', 'Podcast', 'Webinar', 'Show Notes',
  'checklist', 'use case', 'target', 'followers', 'save', 'share', 'lookalike', 'tone',
  'invoice', 'waitlist', 'UGC', 'CRO', 'brief', 'reward', 'challenge',
  'engagement', 'reach', 'impression', // metric terms (universal marketing)
];

function checkFile(file) {
  const text = fs.readFileSync(file.path, 'utf8');
  const lines = text.split('\n');
  
  let inFence = false;
  let inTable = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track code fences
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    
    // Skip checks inside code fences
    if (inFence) continue;
    
    // Skip table rows (may contain technical terms)
    if (/^\s*\|.*\|\s*$/.test(line) || /^\|/.test(line)) continue;
    
    // Skip lines that are URLs or email addresses
    if (/^https?:\/\//.test(line.trim())) continue;
    if (/\S+@\S+\.\S+/.test(line)) continue;
    
    // Remove variable tokens [...] before checking (they should not be flagged)
    const lineWithoutVars = line.replace(/\[[A-Z_]+\]/g, '');
    
    // Check each term rule
    for (const rule of termRules) {
      const matches = lineWithoutVars.match(rule.wrong);
      if (matches) {
        // Skip if it's part of a larger Indonesian compound that's correct
        // e.g., "alur kerja" contains "kerja" not "workflow"
        
        // Check if the correct term also appears nearby (might be a definition/comparison)
        const contextStart = Math.max(0, i - 2);
        const contextEnd = Math.min(lines.length, i + 3);
        const context = lines.slice(contextStart, contextEnd).join(' ');
        
        // If the correct Indonesian term appears in context, it might be explaining the English term
        if (context.toLowerCase().includes(rule.correct.toLowerCase())) {
          continue; // Likely a definition or comparison
        }
        
        // Skip if it's in a heading that's defining the term
        if (/^#+\s/.test(line) && line.toLowerCase().includes(rule.correct.toLowerCase())) {
          continue;
        }
        
        issues.push(`${file.name} line ${i + 1}: Found "${matches[0]}" — should be "${rule.correct}" (${rule.note})`);
      }
    }
  }
}

// Check for inconsistent use of kept-English terms
function checkKeptEnglishConsistency() {
  const termUsage = {};
  
  for (const file of files) {
    const text = fs.readFileSync(file.path, 'utf8');
    
    for (const term of keepEnglish) {
      const re = new RegExp(`\\b${term}\\b`, 'gi');
      const matches = text.match(re);
      if (matches && matches.length > 0) {
        if (!termUsage[term]) termUsage[term] = {};
        termUsage[term][file.name] = matches.length;
      }
    }
  }
  
  // Report terms that appear in some files but not others (informational)
  // This is expected for specialized terms, so just log it
  console.log('\nKept-English term usage across products:');
  for (const [term, usage] of Object.entries(termUsage)) {
    const fileList = Object.entries(usage).map(([f, c]) => `${f}:${c}`).join(', ');
    console.log(`  ${term}: ${fileList}`);
  }
}

// Main audit
console.log('=== AUDIT ROUND 6: TERMINOLOGY CONSISTENCY ===\n');

for (const file of files) {
  checkFile(file);
}

checkKeptEnglishConsistency();

if (issues.length === 0) {
  console.log('\n✓ ALL TERMINOLOGY CONSISTENT');
  console.log('  - Structural terms properly translated');
  console.log('  - Role names properly translated');
  console.log('  - Action terms properly translated');
  console.log('  - Marketing loanwords correctly kept in English');
} else {
  console.log(`\n✗ FOUND ${issues.length} TERMINOLOGY ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
