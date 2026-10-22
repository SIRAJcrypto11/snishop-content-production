# SNISHOP Content Production System

AI-agent-powered digital content production factory. Mass-produces premium digital products (PDF, Excel, flyers) from Markdown manuscripts with multi-tier pricing.

**Author:** Siraj Nur Ihrom (Founder & Lead Developer, SNISHOP)
**License:** Proprietary - SNISHOP Digital Products
**Status:** Production Ready

---

## Quick Start

```bash
# Install dependencies
npm install

# Produce a basic tier product (prompts only)
node scripts/produce.js --manuscript drafts/my-product.md --tier basic --slug my-product

# Produce a premium tier product (prompts + outputs + Excel)
node scripts/produce.js --manuscript drafts/my-product.md --data drafts/my-product.xlsx.json --tier premium --slug my-product

# Produce with marketing flyer
node scripts/produce.js --manuscript drafts/my-product.md --tier premium --slug my-product --flyer

# Run all tests
npm test
```

---

## What This System Does

This is a **content production factory** that turns Markdown manuscripts into sellable digital products. Each product theme generates 3 tier variants:

| Tier | Price (Launch) | Contents |
|------|---------------|----------|
| **Basic** | Rp 19.000 | Prompts only, glossary, quick reference |
| **Premium** | Rp 69.000 | Prompts + real AI outputs + Excel workbook + usage guides |
| **Ultimate** | Rp 149.000 | All Premium + AI chat screenshots + automation guides + video QR codes |

Each tier also gets a 2-page marketing flyer PDF with SNISHOP branding, pricing, CTA, and QRIS payment code.

---

## Architecture

```
content-production-system/
├── scripts/
│   ├── produce.js          # Main production runner (multi-tier)
│   ├── generate-flyer.js   # Flyer PDF generator
│   ├── build-companion.js  # Excel workbook builder
│   ├── draw-diagrams.js    # Diagram/image generator
│   ├── seed-topics.js      # Topic seed data
│   ├── setup.js            # Initial setup script
│   └── start-agents.js     # Agent orchestrator launcher
│
├── src/
│   ├── agents/
│   │   ├── orchestrator/   # OrchestratorAgent.js - coordinates all agents
│   │   ├── content/        # AITechContentAgent, BusinessContentAgent, SNISHOPContentAgent
│   │   ├── design/         # PDFGenerator.js, ExcelGenerator.js
│   │   └── marketing/      # MarketingAgent, TikTokPublisher, InstagramPublisher, EmailPublisher, SEOOptimizer
│   ├── api/                # REST API routes and middleware
│   ├── config/             # Database, Redis, Queue, Storage config
│   ├── database/           # Migrations and schema
│   ├── distribution/       # DistributionManager, SNISHOPAppAPI, LynkAPI, PricingEngine
│   ├── screenshot/         # ScreenshotCapture, AnnotationEngine
│   └── utils/              # Logger, helpers, metrics
│
├── drafts/                 # Markdown manuscripts (source of truth)
│   ├── parts/              # Manuscript parts (assembled before production)
│   └── *.xlsx.json         # Companion workbook specs
│
├── products/               # Generated output files
│   ├── manifest.json       # Product registry (auto-updated)
│   ├── *-basic.pdf         # Basic tier PDFs
│   ├── *-premium.pdf       # Premium tier PDFs
│   ├── *-premium.xlsx      # Premium tier workbooks
│   ├── *-ultimate.pdf      # Ultimate tier PDFs
│   ├── *-ultimate.xlsx     # Ultimate tier workbooks
│   ├── *-flyer.pdf         # Marketing flyers
│   └── assets/             # Screenshots, diagrams, mockups
│
├── tests/                  # Jest test suites (351 tests)
├── docs/
│   ── specs/              # Design specifications
└── package.json
```

---

## Production Pipeline

### Step 1: Write Manuscript

Create a Markdown file in `drafts/` with your content. The manuscript must pass the lint gate:

```markdown
# 300 Prompt AI untuk Copywriting dan Iklan Digital

## Pendahuluan
[Your introduction here]

## Bagian 1: Copywriting Dasar (P-001 hingga P-050)

### P-001: Buat Tagline Brand

**Prompt:**
Buatkan 5 tagline untuk [NAMA_BRAND] dengan tone [TONE] yang menyoroti [KEUNGGULAN].

**Variabel:**
- NAMA_BRAND: nama brand atau produk
- TONE: gaya bahasa (friendly, formal, playful, dll)
- KEUNGGULAN: fitur utama yang ingin disoroti

**Output (ChatGPT GPT-4):**
1. "Seteguk Cerita Indonesia"
2. "Dari Kebun Lokal, Untuk Dunia"
...

**Output (Gemini Pro):**
1. "Nusantara dalam Setiap Tegukan"
2. "Kopi Lokal, Rasa Global"
...

**Tips Penggunaan:**
- ChatGPT: Lebih baik untuk variasi kreatif
- Gemini: Lebih baik untuk deskriptif dan informatif
```

### Step 2: Lint Check

The production runner automatically checks for:
- No em-dash (—) or spaced en-dash ( – )
- No stray asterisks (except **bold**)
- No emoji glyphs
- No AI filler phrases ("dalam era digital yang...", "penting untuk dicatat bahwa...")
- No placeholder text ("TBD", "TODO", "lorem ipsum")

### Step 3: Produce

```bash
# Basic tier
node scripts/produce.js --manuscript drafts/my-product.md --tier basic --slug my-product

# Premium tier (with Excel workbook)
node scripts/produce.js --manuscript drafts/my-product.md --data drafts/my-product.xlsx.json --tier premium --slug my-product

# With flyer
node scripts/produce.js --manuscript drafts/my-product.md --tier premium --slug my-product --flyer
```

### Step 4: Output

Generated files appear in `products/`:
- `my-product-basic.pdf` - Basic tier product
- `my-product-premium.pdf` - Premium tier product
- `my-product-premium.xlsx` - Companion workbook
- `my-product-premium-flyer.pdf` - Marketing flyer
- `manifest.json` - Updated product registry

---

## Multi-Tier Strategy

### Content Differentiation

| Feature | Basic | Premium | Ultimate |
|---------|-------|---------|----------|
| Number of prompts | 300 | 300 | 300 |
| Real AI outputs | - | 300 | 300 |
| AI chat screenshots | - | - | 30-50 |
| Usage guides per AI | - | Yes | Detailed |
| Automation workflows | - | - | Yes |
| Excel workbook | - | 4 sheets | Enhanced |
| Video tutorial QR | - | - | Yes |
| Bonus templates | - | - | Yes |

### Pricing Strategy

| Tier | Normal | Launch (60-65% off) | Flash Sale (80% off) |
|------|--------|---------------------|---------------------|
| Basic | Rp 49.000 | Rp 19.000 | Rp 10.000 |
| Premium | Rp 149.000 | Rp 69.000 | Rp 49.000 |
| Ultimate | Rp 299.000 | Rp 149.000 | Rp 99.000 |
| Bundle All | - | - | Rp 199.000 |

### Distribution Channels

- **Primary:** app.snishop.com (0% commission, 100% revenue)
- **Secondary:** lynk.id (5% commission)
- **Tertiary:** Tokopedia Digital, Shopee Digital (2% each)

---

## Quality Standards

### Anti-AI-Slop Rules

All content must pass these checks before production:

1. **No em-dash** (—) or spaced en-dash ( – )
2. **No asterisk markers** outside code blocks (except **bold**)
3. **No emoji** glyphs unless contextually appropriate
4. **No filler phrases:**
   - "dalam era digital yang..."
   - "penting untuk dicatat bahwa..."
   - "kesimpulannya..."
   - "di dunia yang semakin cepat..."
   - "seiring berkembangnya teknologi..."
   - "tidak dapat dipungkiri bahwa..."
5. **No placeholder text** ("TBD", "TODO", "lorem ipsum", "placeholder")
6. **No generic stock photo** references
7. **No repetitive sentence structures** (3+ similar patterns)
8. **No AI voice markers** (overly formal, robotic transitions)

### Formatting Standards

- **Font:** Inter (primary), system-ui (fallback)
- **Body:** 11pt, 1.6 line height, justified alignment
- **Headings:** H1 24pt bold primary (#1E40AF), H2 18pt, H3 14pt, H4 12pt secondary (#7C3AED)
- **Spacing:** 12pt after paragraphs, 24pt before major headings
- **Margins:** 20mm top/bottom, 18mm left/right
- **Page numbering:** "Halaman X dari Y", bottom center, 8pt gray
- **Headers:** Product title + tier badge, 8pt gray

### Visual Standards

- **Screenshots:** Min 1920x1080, PNG lossless, annotated with arrows/highlights
- **Diagrams:** Clean, minimal, SNISHOP brand colors, SVG preferred
- **Mockups:** Real renders, consistent style, no AI-generated generic
- **Logo:** SNISHOP blue horizontal version in header + footer
- **QRIS:** SNISHOP.ID QR code in "Dukung Tim" section

---

## Brand Assets

- **Logo:** `../../LOGO/Logo snishop biru panjang.png`
- **QRIS:** `../../LOGO/QRIS SNISHOP.ID.jpeg`
- **Brand Colors:**
  - Primary: #1E40AF (blue)
  - Secondary: #7C3AED (purple)
  - Accent: #10B981 (green)
- **Payment:** QRIS SNISHOP.ID, NMID: ID1024346809782

---

## For AI Agents Continuing This Work

### Context

This system was built by Siraj Nur Ihrom, founder of SNISHOP. The goal is to mass-produce premium digital products (prompt libraries, guides, templates) for the Indonesian market. Products are sold via app.snishop.com and lynk.id.

### Key Decisions Made

1. **Multi-tier pricing** (Basic/Premium/Ultimate) to capture different customer segments
2. **Separate PDF files per tier** (not one PDF with sections) for clear product differentiation
3. **Real AI outputs** (not placeholders) for Premium and Ultimate tiers
4. **Screenshot evidence** for Ultimate tier to prove prompts work
5. **Flat file structure** to avoid Windows MAX_PATH issues
6. **Anti-AI-slop lint** to maintain human-crafted quality standard
7. **SNISHOP branding** on all products with QRIS for voluntary tips

### Current Products

1. **150 Prompt AI untuk Bisnis dan UMKM Indonesia** (basic tier produced)
2. **300 Prompt AI untuk Copywriting dan Iklan Digital** (basic tier produced)

### Next Steps

1. Generate Premium tier outputs for Product 2 (run each prompt in ChatGPT + Gemini)
2. Capture screenshots for Ultimate tier (30-50 representative prompts)
3. Write automation guides (Make.com, Zapier, n8n workflows)
4. Generate flyers for all tiers
5. Upload to app.snishop.com and lynk.id
6. Launch marketing campaign

### Testing

```bash
# Run all tests (351 tests across 18 suites)
npm test

# Run specific test file
npm test -- tests/unit/storage.test.js

# Run with coverage
npm test -- --coverage
```

### Git Workflow

- Repository: `SIRAJcrypto11/snishop-erp-system` (main ERP repo)
- This system lives in: `content-production-system/` subdirectory
- Always commit and push after completing work
- Use conventional commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`

### Environment

- Node.js 24.18.0 (CommonJS modules)
- Windows 10/11 (watch for MAX_PATH issues)
- Git Bash for shell commands
- Puppeteer 25.15 for PDF rendering
- No external APIs required for production (offline-capable)

---

## Revenue Projection

### Month 1 (per product family, conservative)

| Tier | Units | Price | Revenue |
|------|-------|-------|---------|
| Basic | 200 | Rp 19.000 | Rp 3.800.000 |
| Premium | 80 | Rp 69.000 | Rp 5.520.000 |
| Ultimate | 30 | Rp 149.000 | Rp 4.470.000 |
| **Total** | | | **Rp 13.790.000** |

### At Scale (5 product families active)

**Monthly recurring: ~Rp 34.000.000+**

---

## Support

For questions or issues, contact Siraj Nur Ihrom via:
- Website: snishop.com
- ERP: erp.snishop.com
- App: app.snishop.com
- QRIS: SNISHOP.ID (NMID: ID1024346809782)

---

*Built with care by Siraj Nur Ihrom. SNISHOP - Solusi Pembayaran dan Produk Digital.*
