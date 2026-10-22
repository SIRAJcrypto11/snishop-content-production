#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DRAFTS = path.join(ROOT, 'drafts');

let missed = [];

function edit(file, label, oldText, newText, min = 1) {
  const p = path.join(DRAFTS, file);
  let md = fs.readFileSync(p, 'utf8');
  const count = md.split(oldText).length - 1;
  if (count < min) {
    missed.push(`${file} :: ${label} (found ${count})`);
    return;
  }
  md = md.split(oldText).join(newText);
  fs.writeFileSync(p, md);
  console.log(`OK  ${file} :: ${label} x${count}`);
}

function editRe(file, label, re, newText, min = 1) {
  const p = path.join(DRAFTS, file);
  let md = fs.readFileSync(p, 'utf8');
  const count = (md.match(re) || []).length;
  if (count < min) {
    missed.push(`${file} :: ${label} (found ${count})`);
    return;
  }
  md = md.replace(re, newText);
  fs.writeFileSync(p, md);
  console.log(`OK  ${file} :: ${label} x${count}`);
}

// ============================================================
// P2 x3: localize remaining prose
// ============================================================
const P2 = [
  '300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  '300-prompt-copywriting-premium.md',
  '300-prompt-copywriting-ultimate.md',
];

const EXACTS = [
  ['data export ready', 'Buat data export ready email untuk', 'Buat email tautan unduh data untuk'],
  ['cta values', 'tujuan CTA (beli, daftar, download, hubungi)', 'tujuan CTA (beli, daftar, unduh, hubungi)'],
  ['welcome seq list', 'welcome sequence, promotional email, newsletter, re-engagement, dan automation', 'rangkaian sambutan, email promosi, newsletter, re-engagement, dan otomasi'],
  ['seq preview body', 'Sequence lengkap dengan subjek, preview, body, CTA, dan timing untuk setiap email.', 'Rangkaian lengkap dengan subjek, pratinjau, isi, CTA, dan timing untuk setiap email.'],
  ['teaser-launch', 'pendekatan teaser-announcement-launch', 'pendekatan teaser-pengumuman-peluncuran'],
  ['advanced', 'mengalir dari dasar ke advanced dengan soft sell natural', 'mengalir dari dasar ke lanjutan dengan soft sell yang natural'],
  ['quiz seq', 'Poll atau quiz lengkap dengan sequence story.', 'Poll atau kuis lengkap dengan rangkaian story.'],
  ['urgency section 1', 'Urgency section dengan countdown dan insentif.', 'Bagian urgensi dengan countdown dan insentif.'],
  ['cta section', 'Buat CTA section landing page', 'Buat bagian CTA landing page'],
  ['urgency section 2', 'Buat urgency section landing page', 'Buat bagian urgensi landing page'],
  ['countdown desc', '[COUNTDOWN]: countdown timer', '[COUNTDOWN]: penghitung mundur'],
  ['timing section yt', 'Script lengkap dengan timing per section dan total kata sesuai durasi.', 'Naskah lengkap dengan timing per bagian dan total kata sesuai durasi.'],
  ['timing transition', 'Script lengkap dengan timing dan transition.', 'Naskah lengkap dengan timing dan transisi.'],
  ['objection', 'Pitch script lengkap dengan transition dan objection handling.', 'Naskah pitch lengkap dengan transisi dan penanganan keberatan.'],
  ['talking points 1', 'Script 300-400 kata dengan struktur segmen dan talking points.', 'Naskah 300-400 kata dengan struktur segmen dan poin pembicaraan.'],
  ['talking points 2', 'Script lengkap dengan talking points per section.', 'Naskah lengkap dengan poin pembicaraan per bagian.'],
  ['interaction prompts', 'Script live dengan talking points dan interaction prompts.', 'Naskah live dengan poin pembicaraan dan pemicu interaksi.'],
  ['step-by-step', 'Script tutorial step-by-step yang jelas.', 'Naskah tutorial langkah demi langkah yang jelas.'],
  ['use case benefit', 'Script demo dengan use case dan benefit.', 'Naskah demo dengan use case dan manfaat.'],
  ['interview', 'Script interview testimoni dengan pertanyaan terbuka.', 'Naskah wawancara testimoni dengan pertanyaan terbuka.'],
  ['case study script', 'Script case study dengan storytelling dan data.', 'Naskah studi kasus dengan storytelling dan data.'],
  ['simple visual', 'Script explainer yang simple dan visual.', 'Naskah explainer yang sederhana dan visual.'],
  ['impactful', 'Lima script 30-40 kata yang impactful.', 'Lima naskah 30-40 kata yang berdampak.'],
  ['ad read', 'Ad read script yang natural dan personal.', 'Naskah pembacaan iklan yang natural dan personal.'],
  ['stick to it', 'Solusi: Buat content calendar dan stick to it. Konsistensi lebih penting dari perfection.', 'Solusi: Buat kalender konten dan patuhi jadwalnya. Konsistensi lebih penting daripada kesempurnaan.'],
  ['portfolio', 'Buat copy portfolio presentation dengan', 'Buat copy presentasi portofolio dengan'],
  ['montage', 'video recap atau montage', 'video recap atau montase'],
  ['segment qa', 'segment Q&A podcast', 'segmen Q&A podcast'],
  ['welcome email seq', 'welcome email sequence', 'rangkaian email sambutan'],
  ['winback seq', 'win-back email sequence', 'rangkaian email win-back'],
  ['edu seq', 'educational email sequence', 'rangkaian email edukasi'],
  ['email seq', 'email sequence', 'rangkaian email'],
  ['nurture seq', 'nurturing sequence', 'rangkaian nurturing'],
  ['persuasion seq 1', 'persuasion sequence', 'rangkaian persuasi'],
  ['persuasion seq 2', 'Persuasion sequence dengan detail per langkah.', 'Rangkaian persuasi dengan detail per langkah.'],
  ['ad read compound', 'ad read script', 'naskah pembacaan iklan'],
  ['pitch compound', 'webinar pitch script', 'naskah pitch webinar'],
  ['qa compound', 'Q&A segment script', 'naskah segmen Q&A'],
  ['listener compound', 'listener engagement script', 'naskah engagement pendengar'],
  ['guest compound', 'guest introduction script', 'naskah perkenalan tamu'],
  ['season compound', 'season preview script', 'naskah pratinjau season'],
  ['endscreen compound', 'end screen script', 'naskah end screen'],
  ['teaser compound', 'teaser script', 'naskah teaser'],
  ['intro compound', 'intro script', 'naskah intro'],
  ['outro compound', 'outro script', 'naskah outro'],
];

for (const f of P2) {
  for (const [label, from, to] of EXACTS) edit(f, label, from, to, 1);
  edit(f, 'Jumlah_EMAIL casing', '[Jumlah_EMAIL]', '[JUMLAH_EMAIL]');
  editRe(f, 'Script -> Naskah', /\bScript\b/g, 'Naskah', 1);
  editRe(f, 'script -> naskah', /\bscript\b/g, 'naskah', 1);
  editRe(f, 'Sequence -> Rangkaian', /\bSequence\b/g, 'Rangkaian', 1);
  editRe(f, 'sequence -> rangkaian', /\bsequence\b/g, 'rangkaian', 1);
  editRe(f, 'content calendar -> kalender konten', /content calendar/g, 'kalender konten', 1);
  editRe(f, 'Content calendar -> Kalender konten', /Content calendar/g, 'Kalender konten', 1);
}

// ============================================================
// P3 basic: script in templates + [DATA] desc lines
// ============================================================
edit('200-template-social-media-basic.md', 'script in templates', 'script', 'naskah');
edit('200-template-social-media-basic.md', 'desc data post', '- [DATA]: tempel data followers, likes, comments, shares, saves, reach', '- [DATA]: tempel data followers, like, komentar, bagikan, simpan, reach');
edit('200-template-social-media-basic.md', 'desc data video', '- [DATA]: tempel data video (views, watch time, retention, likes, shares, saves)', '- [DATA]: tempel data video (views, durasi tonton, retensi, like, bagikan, simpan)');

console.log(`\nMissed: ${missed.length}`);
missed.forEach((m) => console.log('MISSED  ' + m));
if (missed.length) process.exit(1);
