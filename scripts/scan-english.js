#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DRAFTS = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(path.join(__dirname, '..', 'drafts')).filter(f => f.endsWith('.md')).map(f => 'drafts/' + f);

const ENG = /\b(the|and|with|your|you|for|this|that|will|when|what|how|from|are|have|has|was|were|not|but|they|their|them|then|than|more|most|each|every|all|any|include|including|make|made|use|used|using|write|create|ensure|ask|give|get|new|now|key|top|best|good|great|specific|clear|concise|detailed|actionable|comprehensive|professional|engaging|relatable|storytelling|story|stories|post|posts|posting|day|days|week|weeks|month|months|year|years|goal|goals|metrics|metric|insights|insight|audience|followers|engagement|reach|impressions|clicks|conversion|conversions|sales|revenue|growth|brand|awareness|content|caption|captions|hashtags|hashtag|review|reviews|plan|planning|strategy|strategies|analysis|analyze|report|reports|summary|recommendations|tips|ideas|results|result|performance|perform|customer|customers|product|products|price|pricing|promo|promotion|discount|offer|testimonials?|benefits?|features?|quality|trust|value|problems?|solutions?|challenges?|achievements?|milestones?|priorities?|budget|team|tools|risk|success|track|tracking|measure)\b/gi;

let total = 0;
for (const f of DRAFTS) {
  const text = fs.readFileSync(f, 'utf8');
  const blocks = text.match(/^```[^\n]*\n([\s\S]*?)^```/gm) || [];
  for (const b of blocks) {
    const body = b.replace(/^```\w*\n/, '').replace(/```\s*$/, '');
    const matches = body.match(ENG) || [];
    const words = body.split(/\s+/).length;
    const ratio = matches.length / Math.max(words, 1);
    if (matches.length >= 4) {
      const firstLine = body.trim().split('\n')[0].slice(0, 90);
      const lineNo = text.slice(0, text.indexOf(body)).split('\n').length;
      console.log(`${f}:${lineNo} eng=${matches.length}/${words} (${(ratio * 100).toFixed(0)}%)  ${firstLine}`);
      total++;
    }
  }
}
console.log(`\nTotal template bodies needing review: ${total}`);
