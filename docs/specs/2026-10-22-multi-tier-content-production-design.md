# Design Spec: Multi-Tier Digital Content Production System

**Author:** Siraj Nur Ihrom (SNISHOP Founder & Lead Developer)
**Date:** 2026-10-22
**Status:** Approved for Implementation
**Version:** 1.0

---

## Executive Summary

Upgrade the content production system from single-tier PDF generation to a multi-tier product factory. Each theme produces 3 separate PDF products (Basic, Premium, Ultimate) + 3 marketing flyers, enabling price differentiation from Rp 10.000 to Rp 149.000 per product family.

---

## 1. Product Tier Architecture

### 1.1 Structure per Theme

```
Theme: "300 Prompt AI untuk [Topik]"
├─ Basic (Rp 19.000, launch from Rp 49.000)
│  ├─ {slug}-basic.pdf (150-200 pages, prompts only)
│  └─ {slug}-basic-flyer.pdf (2 pages, marketing)
│
├─ Premium (Rp 69.000, launch from Rp 149.000)
│  ├─ {slug}-premium.pdf (300-400 pages, prompts + real outputs)
│  ├─ {slug}-premium.xlsx (workbook: Library, Indeks, Variabel, Pelacak)
│  └─ {slug}-premium-flyer.pdf (2 pages, marketing)
│
└─ Ultimate (Rp 149.000, launch from Rp 299.000)
   ├─ {slug}-ultimate.pdf (500-600 pages, prompts + outputs + screenshots + automation)
   ├─ {slug}-ultimate.xlsx (enhanced workbook + templates)
   ├─ {slug}-ultimate-flyer.pdf (2 pages, marketing)
   ─ assets/{slug}/
      ├─ screenshots/ (ChatGPT, Gemini, Claude captures)
      ├─ diagrams/ (framework visualizations)
      └─ mockups/ (product branding)
```

### 1.2 Content per Tier

| Element | Basic | Premium | Ultimate |
|---------|-------|---------|----------|
| Prompts | 300 | 300 | 300 |
| Real AI outputs | - | 300 | 300 |
| AI chat screenshots | - | - | 30-50 (representative) |
| Usage guides (ChatGPT/Gemini/Claude) | - | Yes | Yes (detailed) |
| Automation workflows | - | - | Yes (Make/Zapier/n8n/API) |
| Excel workbook | - | Yes (4 sheets) | Yes (enhanced) |
| Video tutorial QR codes | - | - | Yes |
| Bonus templates | - | - | Yes (swipe file) |

### 1.3 File Naming Convention

```
products/
├─ {slug}-basic.pdf
├─ {slug}-basic-flyer.pdf
├─ {slug}-premium.pdf
├─ {slug}-premium.xlsx
├─ {slug}-premium-flyer.pdf
├─ {slug}-ultimate.pdf
├─ {slug}-ultimate.xlsx
├─ {slug}-ultimate-flyer.pdf
─ assets/{slug}/
   ├─ screenshots/chatgpt/{prompt-id}.png
   ├─ screenshots/gemini/{prompt-id}.png
   ├─ screenshots/claude/{prompt-id}.png
   ├─ diagrams/{diagram-name}.svg
   └─ mockups/{mockup-name}.png
```

---

## 2. Content Generation Workflow

### 2.1 Base Manuscript (Shared Source)

All tiers derive from a single base manuscript:
```
drafts/{slug}-base.md
├─ Front matter (title, TOC, intro, author bio)
├─ Bagian 1-N (prompt groups by category)
└─ Lampiran (glossary, references, license)
```

### 2.2 Tier Enhancement Process

**Basic:** Extract prompts only, add front matter + appendices.

**Premium:** For each prompt:
1. Execute in ChatGPT (GPT-4) with concrete example variables
2. Execute in Gemini Pro for comparison
3. Document: Prompt -> Variables -> Output (ChatGPT) -> Output (Gemini)
4. Add "Cara Penggunaan" section per AI platform
5. Generate Excel workbook

**Ultimate:** All Premium content plus:
1. Screenshot capture for 30-50 representative prompts (10% sample)
2. Annotate screenshots (arrows, highlights, numbered callouts)
3. Write automation workflow guides (Make.com, Zapier, n8n, custom API)
4. Create video tutorial scripts with QR code links
5. Add bonus template library and swipe file

### 2.3 Screenshot Capture Workflow

```
For each representative prompt (30-50 total):
1. Open ChatGPT -> Paste prompt with example variables -> Submit
2. Wait for complete response -> Capture full screen (prompt + response visible)
3. Repeat for Gemini Pro
4. Repeat for Claude 3
5. Annotate: Add arrows pointing to key elements, highlight important parts
6. Save: assets/{slug}/screenshots/{platform}/{prompt-id}.png
7. Quality: Min 1920x1080, text readable at 100% zoom
```

### 2.4 Automation Guide Content (Ultimate only)

5 Make.com workflows, 5 Zapier workflows, 3 n8n workflows, plus Node.js and Python API examples covering:
- Auto-generate social media content from prompt templates
- Batch process 100 prompts -> export to spreadsheet
- Schedule content publishing (Hootsuite/Buffer integration)
- AI-powered customer service chatbot setup
- Content repurposing pipeline (blog -> social -> email)

---

## 3. Flyer Generation System

### 3.1 Structure (2 pages per tier, A4 portrait)

**Page 1: Hook & Value Proposition**
- Header: SNISHOP logo + tier badge
- Hero: Headline + subheadline + product mockup
- Pain points: 3 relatable problems
- Solution: 4-5 specific benefits with checkmarks

**Page 2: Social Proof & CTA**
- What's inside: Bullet list of deliverables
- Pricing: Normal price (crossed out) + launch price + savings amount
- Testimonial/social proof
- CTA button: "BELI SEKARANG" + URL + QR code
- Guarantee: 30-day money back
- Footer: Logo + "Dukung Tim SNISHOP" + QRIS code

### 3.2 Content per Tier

**Basic Flyer (Rp 19.000):**
- Headline: "300 Prompt AI Siap Pakai untuk [Topik]"
- Focus: Efficiency, no brainstorming from scratch
- Benefits: Save 100+ hours, tested prompts, beginner-friendly, free updates

**Premium Flyer (Rp 69.000):**
- Headline: "300 Prompt AI + Contoh Output Nyata"
- Focus: Quality output, no trial-error
- Benefits: All Basic + real outputs, per-platform guides, Excel workbook, copy-paste templates

**Ultimate Flyer (Rp 149.000):**
- Headline: "300 Prompt AI Ultimate: Prompt + Output + Screenshot + Automation"
- Focus: Automation, scaling, maximum results
- Benefits: All Premium + screenshots, automation guides, video tutorials, bonus templates

### 3.3 Design Standards

- Font: Inter (primary), system-ui (fallback)
- Colors: SNISHOP brand (#1E40AF primary, #7C3AED secondary, #10B981 accent)
- Layout: Clean, professional, 20%+ white space
- Text alignment: Justified for body, left for headings
- Images: Real screenshots/mockups only, no stock photos
- Logo: SNISHOP blue horizontal version in header + footer
- QRIS: SNISHOP.ID QR code in "Dukung Tim" section

---

## 4. Quality Standards

### 4.1 Anti-AI-Slop Lint Rules

Auto-fail production on:
- Em-dash (—) or spaced en-dash ( – )
- Asterisk markers outside code blocks (except **bold**)
- Emoji glyphs (unless contextually appropriate)
- Filler phrases: "dalam era digital yang", "penting untuk dicatat bahwa", "kesimpulannya", "di dunia yang semakin cepat", "seiring berkembangnya teknologi", "tidak dapat dipungkiri bahwa"
- Placeholder text without context
- Generic stock photo references
- Repetitive sentence structures (3+ similar patterns)
- AI voice markers (overly formal, robotic transitions)

### 4.2 PDF Formatting

- Typography: Inter 11pt body, 1.6 line height, justified
- Headings: H1 24pt bold primary color, H2 18pt, H3 14pt, H4 12pt secondary
- Spacing: 12pt after paragraphs, 24pt before major headings
- Margins: 20mm top/bottom, 18mm left/right
- Page numbering: "Halaman X dari Y", bottom center, 8pt gray
- Headers: Product title (abbreviated) + tier badge, 8pt gray
- Section dividers: Full-page with section number + title
- No widows/orphans: Min 2 lines per paragraph at page break

### 4.3 Visual Quality

- Screenshots: Min 1920x1080, PNG lossless, annotated, platform-labeled
- Diagrams: Clean, minimal, SNISHOP brand colors, SVG preferred
- Mockups: Real renders, consistent style, no AI-generated generic
- Excel: 4 sheets (Library, Indeks, Variabel, Pelacak), formatted, filtered

### 4.4 Language Standards

- Indonesian, conversational but professional
- Not textbook formal, not overly casual
- Every claim backed by concrete example
- Natural transitions, not mechanical "Pertama... Kedua... Ketiga..."
- Reads like written by experienced practitioner

---

## 5. Pricing Strategy

### 5.1 Pricing Matrix

| Tier | Normal | Launch (60-65% off) | Flash Sale (80% off) |
|------|--------|---------------------|---------------------|
| Basic | Rp 49.000 | Rp 19.000 | Rp 10.000 |
| Premium | Rp 149.000 | Rp 69.000 | Rp 49.000 |
| Ultimate | Rp 299.000 | Rp 149.000 | Rp 99.000 |
| Bundle All | - | - | Rp 199.000 |

### 5.2 Discount Tactics

- Launch: 60-65% off first 30 days
- Flash sale: 80% off, 48 hours, max 100 copies
- Bundle: All 3 tiers at Ultimate price
- Loyalty: 20% off next purchase for existing buyers
- Referral: 10% commission per referred sale
- Seasonal: Extra 10% during Ramadan, Harbolnas, etc.

### 5.3 Value Ladder

Free (10 sample prompts) -> Basic -> Premium -> Ultimate -> Bundle -> Membership

### 5.4 Distribution Channels

| Platform | Commission | Net Revenue |
|----------|-----------|-------------|
| app.snishop.com | 0% | 100% |
| lynk.id | 5% | 95% |
| Tokopedia Digital | 2% | 98% |
| Shopee Digital | 2% | 98% |
| Gumroad | 10% + fee | ~88% |

Priority: app.snishop.com (100% revenue, full control)

---

## 6. Implementation Plan

### Phase 1: Production System Upgrade (Week 1)
- [ ] Task 1.1: Update produce.js for --tier and --flyer flags
- [ ] Task 1.2: Create scripts/generate-flyer.js + templates/flyer.html
- [ ] Task 1.3: Enhance PDFGenerator.js (justified text, headers/footers, page breaks)
- [ ] Task 1.4: Enhance ExcelGenerator.js (multi-sheet, formatting, filters)

### Phase 2: Content Generation (Week 2-3)
- [ ] Task 2.1: Generate real outputs for Product 2 Premium tier (300 prompts x 2 platforms)
- [ ] Task 2.2: Capture screenshots for Ultimate tier (30-50 prompts x 3 platforms)
- [ ] Task 2.3: Write automation guides (Make/Zapier/n8n/API)
- [ ] Task 2.4: Generate 3 flyers (Basic, Premium, Ultimate)

### Phase 3: Quality Assurance (Week 3)
- [ ] Task 3.1: Lint all manuscripts
- [ ] Task 3.2: Visual review (PDF, screenshots, flyers, Excel)
- [ ] Task 3.3: Content review (sample every 10th prompt)
- [ ] Task 3.4: Test full production pipeline

### Phase 4: Distribution (Week 4)
- [ ] Task 4.1: Prepare distribution assets
- [ ] Task 4.2: Upload to app.snishop.com + lynk.id
- [ ] Task 4.3: Create marketing materials
- [ ] Task 4.4: Launch campaign

---

## 7. Technical Stack

- Node.js 24.18.0 (CommonJS)
- Puppeteer 25.15 (PDF rendering, screenshot capture)
- marked 18.1.1 (Markdown parsing)
- exceljs 4.4.0 (Excel generation)
- Jest (351 tests across 18 suites)
- Playwright (automated browser for screenshots)
- Git + GitHub (version control)

---

## 8. Success Metrics

### Production
- 3 PDF products + 3 flyers generated per theme
- 1 Excel workbook (Premium + Ultimate)
- 90-150 screenshots captured (Ultimate)
- All 351 tests passing
- Zero lint violations

### Business (Month 1, per product family)
- 200+ Basic sales x Rp 19.000 = Rp 3.800.000
- 80+ Premium sales x Rp 69.000 = Rp 5.520.000
- 30+ Ultimate sales x Rp 149.000 = Rp 4.470.000
- **Total Month 1: Rp 13.790.000+**
- 1,000+ free downloads (lead magnet)

### At Scale (5 product families)
- **Monthly recurring: ~Rp 34.000.000+**

---

## 9. Risk Mitigation

| Risk | Mitigation | Fallback | Impact |
|------|-----------|----------|--------|
| Screenshot capture blocked | Manual login + Playwright | Text-only (Premium only) | Ultimate delayed |
| AI output inconsistent | Quality check every output | Curate best, remove weak | Fewer prompts (280 vs 300) |
| PDF rendering on Windows | Test Win 10/11, fix paths | Flat file structure (done) | Minor delays |
| Low initial sales | Aggressive launch discount | Free sample (10 prompts) | Slower revenue |

---

## 10. Brand Assets

- **Logo:** `C:\Users\Siraj Nur Ihrom\Documents\SNISHOP.ID\LOGO\Logo snishop biru panjang.png`
- **QRIS:** `C:\Users\Siraj Nur Ihrom\Documents\SNISHOP.ID\LOGO\QRIS SNISHOP.ID.jpeg`
- **Brand Colors:** Primary #1E40AF, Secondary #7C3AED, Accent #10B981
- **Payment:** QRIS SNISHOP.ID, NMID: ID1024346809782

---

## Appendix A: Prompt Output Format (Premium/Ultimate)

```markdown
### P-001: Buat Tagline Brand

**Prompt:**
Buatkan 5 tagline untuk [NAMA_BRAND] dengan tone [TONE] yang menyoroti [KEUNGGULAN]. Setiap tagline maksimal 8 kata.

**Variabel:**
- NAMA_BRAND: Kopi Nusantara
- TONE: Friendly, hangat, membanggakan lokal
- KEUNGGULAN: Biji kopi dari petani lokal Indonesia

**Output (ChatGPT GPT-4):**
1. "Seteguk Cerita Indonesia"
2. "Dari Kebun Lokal, Untuk Dunia"
3. "Rasa Nusantara, Semangat Lokal"
4. "Kopi Kita, Kebanggaan Indonesia"
5. "Secangkir Indonesia Sejati"

**Output (Gemini Pro):**
1. "Nusantara dalam Setiap Tegukan"
2. "Kopi Lokal, Rasa Global"
3. "Dari Tanah Indonesia, Untuk Jiwa Petualang"
4. "Warisan Rasa Nusantara"
5. "Kopi Kita, Cerita Indonesia"

**Tips Penggunaan:**
- ChatGPT: Lebih baik untuk variasi kreatif dan wordplay
- Gemini: Lebih baik untuk deskriptif dan informatif
- Claude: Lebih baik untuk tone yang konsisten dan profesional
```

---

## Appendix B: Flyer HTML Template Structure

```html
<!-- Page 1 -->
<div class="flyer-page">
  <header>
    <img src="logo-snishop.png" alt="SNISHOP" />
    <span class="badge badge-{tier}">{TIER}</span>
  </header>
  <section class="hero">
    <h1>{Headline}</h1>
    <p class="subheadline">{Subheadline}</p>
    <div class="mockup">{Product mockup image}</div>
  </section>
  <section class="pain-points">
    <h2>Apakah Anda mengalami...</h2>
    <ul>{3 pain points}</ul>
  </section>
  <section class="solution">
    <h2>Dengan produk ini, Anda mendapat...</h2>
    <ul>{4-5 benefits with checkmarks}</ul>
  </section>
</div>

<!-- Page 2 -->
<div class="flyer-page">
  <section class="whats-inside">
    <h2>Produk ini berisi...</h2>
    <ul>{Deliverables list}</ul>
  </section>
  <section class="pricing">
    <div class="price-box">
      <span class="normal-price">Harga Normal: Rp {normal}</span>
      <span class="launch-price">PROMO LAUNCHING: Rp {launch}</span>
      <span class="savings">Hemat {savings}%!</span>
    </div>
  </section>
  <section class="social-proof">{Testimonial or stat}</section>
  <section class="cta">
    <a href="{url}" class="cta-button">BELI SEKARANG</a>
    <p>atau scan QR code</p>
  </section>
  <section class="guarantee">Garansi 30 hari uang kembali</section>
  <footer>
    <img src="logo-snishop.png" />
    <div class="support">
      <p>Dukung Tim SNISHOP</p>
      <img src="qris-snishop.png" />
    </div>
  </footer>
</div>
```

---

*End of Design Specification*
