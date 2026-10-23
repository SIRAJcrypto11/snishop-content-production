#!/usr/bin/env python3
"""Build Product 53 Inventory Management manuscript by appending parts."""
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
os.chdir('..')

# Part 2: Bab 6-12 (BAGIAN 2)
part2 = """
# BAGIAN 2: IMPLEMENTASI INVENTORY

## Bab 6: Manajemen Stok dan SKU

![Stok Management](../assets/im-ch6-stok.png)

### Apa Itu SKU?

SKU (Stock Keeping Unit) adalah kode unik untuk setiap produk.

Contoh:
- KEMEJA-PUTIH-S = Kemeja warna putih ukuran S
- SEPATU-HITAM-42 = Sepatu warna hitam ukuran 42
- KOPI-ARABICA-250G = Kopi Arabica kemasan 250 gram

### Best Practices untuk SKU

**Practice 1: Keep It Simple**
Jangan terlalu kompleks. Gunakan format yang mudah dibaca.

Good: KEMEJA-PUTIH-S
Bad: KMJ-PTH-S-2026-001

**Practice 2: Use Consistent Format**
Semua produk follow same pattern. Format: CATEGORY-ATTRIBUTE-SIZE.

**Practice 3: Avoid Special Characters**
Hanya gunakan huruf, angka, dan dash.

Good: SEPATU-HITAM-42
Bad: SEPATU_HITAM@42!

**Practice 4: Make It Scalable**
Pikirkan pertumbuhan bisnis. Start: PRODUK-001, Scale: PRODUK-0001.

**Practice 5: Document Your System**
Buat dokumentasi SKU naming convention.

### Stock Management Strategies

**Strategy 1: FIFO (First In, First Out)**
Barang yang pertama masuk, pertama keluar. Cocok untuk perishable goods.

Implementation: Label dengan tanggal masuk, simpan barang baru di belakang, ambil barang lama di depan.

**Strategy 2: LIFO (Last In, First Out)**
Barang yang terakhir masuk, pertama keluar. Cocok untuk non-perishable, harga fluktuatif.

**Strategy 3: Average Cost**
Hitung rata-rata cost semua units. Formula: Total Cost / Total Units.

### Stock Opname

Count physical stock secara periodik.

**Full Stock Opname** - Count semua produk. Biasanya setahun sekali.

**Cycle Counting** - Count sebagian produk setiap hari/minggu.

**Spot Check** - Random check untuk specific items.

**Stock Opname Process:**

Step 1: Preparation - Print stock count sheet, prepare tools, assign team, schedule.

Step 2: Counting - Count physical stock, record di sheet, note discrepancies.

Step 3: Reconciliation - Compare physical vs system, investigate discrepancies, adjust system.

Step 4: Reporting - Create report, analyze variances, present to management.

### Inventory Accuracy

Formula: (Matching Items / Total Items Counted) x 100%. Target: lebih dari 98%.

---

## Bab 7: Inventory Tracking dan Monitoring

![Inventory Tracking](../assets/im-ch7-tracking.png)

### Real-Time Tracking

Lihat stock levels secara real-time. Benefits: know exactly what you have, prevent stockouts, optimize ordering, better decision making.

### Batch dan Lot Tracking

Track setiap batch/lot produk. Why important: recall management, expiry tracking, quality control, supplier performance.

### Serial Number Tracking

Track individual items dengan serial number unik. Cocok untuk electronics, appliances, high-value items.

### Expiry Date Management

Khusus untuk perishable goods. Features: alert sebelum expired, FIFO enforcement, discount for near-expiry, auto-remove expired items.

### Multi-Location Tracking

Kelola inventory di beberapa lokasi. Challenges: stock transfer, centralized vs decentralized, visibility across locations.

### Inventory Alerts

**Low Stock Alert** - Trigger: Stock kurang dari Reorder Point. Action: Notify purchasing team.

**Overstock Alert** - Trigger: Stock lebih dari Max Level. Action: Stop ordering, push sales.

**Expiry Alert** - Trigger: Expiry kurang dari 30 days. Action: Discount, push sales.

**Dead Stock Alert** - Trigger: No movement lebih dari 90 days. Action: Review, discount, or write-off.

### Monitoring KPIs

**Metric 1: Inventory Turnover** - Target: 6-12x per year (retail).

**Metric 2: Days Sales of Inventory (DSI)** - Formula: (Average Inventory / COGS) x 365. Target: kurang dari 60 days.

**Metric 3: Stockout Rate** - Target: kurang dari 2%.

**Metric 4: Fill Rate** - Target: lebih dari 95%.

**Metric 5: Carrying Cost** - Target: kurang dari 25% of inventory value.

---

## Bab 8: Reorder Point dan Safety Stock

![Reorder Point](../assets/im-ch8-reorder.png)

### Reorder Point (ROP)

Kapan harus order lagi?

Formula: ROP = (Average Daily Usage x Lead Time) + Safety Stock

Contoh: Average daily usage 50 units, lead time 7 days, safety stock 100 units. ROP = (50 x 7) + 100 = 450 units.

### Safety Stock

Buffer untuk antisipasi ketidakpastian.

Formula: Safety Stock = (Max Daily Usage x Max Lead Time) - (Average Daily Usage x Average Lead Time)

### Economic Order Quantity (EOQ)

Berapa banyak yang harus di-order?

Formula: EOQ = sqrt((2 x D x S) / H)

Dimana: D = Annual demand, S = Ordering cost, H = Holding cost per unit.

### Min-Max System

Simple inventory control. Min Level = Reorder Point. Max Level = Min + EOQ. When stock hits Min, order EOQ units.

### ABC Analysis untuk Reorder

**Category A (High Value)** - Review daily, safety stock high, reorder frequent small quantities.

**Category B (Medium Value)** - Review weekly, safety stock medium, reorder periodic moderate quantities.

**Category C (Low Value)** - Review monthly, safety stock low, reorder infrequent bulk quantities.

### Automated Reordering

Software automatically place orders. Setup: define ROP untuk setiap item, set auto-order enabled, configure supplier, test dengan small orders.

---

## Bab 9: Warehouse Management

![Warehouse Management](../assets/im-ch9-warehouse.png)

### Warehouse Layout Design

Design layout untuk efficiency.

**Principle 1: Flow** - Barang masuk, Storage, Picking, Packing, Shipping.

**Principle 2: Accessibility** - Fast-moving items dekat dengan shipping area.

**Principle 3: Space Utilization** - Maximize vertical space dengan racking.

**Principle 4: Safety** - Clear aisles, proper lighting, fire exits.

### Storage Systems

**Option 1: Shelving** - Cocok untuk small items, manual picking.

**Option 2: Pallet Racking** - Cocok untuk bulk items, forklift access.

**Option 3: Bin System** - Cocok untuk small parts, components.

**Option 4: Mezzanine** - Cocok untuk multi-level storage.

### Picking Strategies

**Strategy 1: Discrete Picking** - One order at a time. Pros: simple, accurate. Cons: slow for many orders.

**Strategy 2: Batch Picking** - Pick multiple orders together. Pros: faster, efficient. Cons: more complex.

**Strategy 3: Zone Picking** - Pickers assigned to specific zones. Pros: specialized, fast. Cons: need handoff.

### Warehouse Management System (WMS)

Software untuk manage warehouse operations. Features: location management, picking optimization, packing management, shipping integration, labor tracking.

### Warehouse KPIs

**Metric 1: Space Utilization** - Target: lebih dari 85%.

**Metric 2: Picking Accuracy** - Target: lebih dari 99%.

**Metric 3: Order Cycle Time** - Target: kurang dari 24 hours.

**Metric 4: Labor Productivity** - Target: 50-100 orders/hour.

---

## Bab 10: Quality Control dan Inspection

![Quality Control](../assets/im-ch10-quality.png)

### Incoming Inspection

Check barang saat diterima dari supplier. What to check: quantity (sesuai PO?), quality (ada damage?), specifications (sesuai order?), packaging (proper?), documentation.

### In-Process Quality Control

Check during production. Benefits: catch defects early, reduce waste, improve process.

### Final Inspection

Check before shipping to customer. What to check: product quality, packaging quality, labeling accuracy, documentation completeness, quantity accuracy.

### Quality Metrics

**Metric 1: Defect Rate** - Target: kurang dari 1%.

**Metric 2: Return Rate** - Target: kurang dari 2%.

**Metric 3: Customer Complaint Rate** - Target: kurang dari 1%.

### Quality Improvement

**Method 1: Root Cause Analysis** - Find why defects happen using 5 Whys, Fishbone diagram, Pareto analysis.

**Method 2: Supplier Quality Management** - Work with suppliers: clear specifications, regular audits, feedback loop.

**Method 3: Process Improvement** - Lean manufacturing, Six Sigma, Kaizen.

---

## Bab 11: Inventory Valuation Methods

![Inventory Valuation](../assets/im-ch11-valuation.png)

### Mengapa Valuation Penting?

Inventory valuation affects: Cost of Goods Sold (COGS), gross profit, tax liability, balance sheet.

### Valuation Methods

**Method 1: FIFO (First In, First Out)**
Barang pertama masuk, pertama keluar (dari segi valuation).

Pros: matches physical flow, higher profit in inflation, better balance sheet.
Cons: higher tax, complex tracking.

**Method 2: LIFO (Last In, First Out)**
Barang terakhir masuk, pertama keluar (dari segi valuation).

Pros: lower tax, matches current costs.
Cons: doesn't match physical flow, not allowed in Indonesia for tax.

**Method 3: Weighted Average**
Average cost semua units.

Pros: simple, smooths price fluctuations, accepted for tax.
Cons: not exact, lags behind current prices.

**Method 4: Specific Identification**
Track cost setiap individual item. Cocok untuk high-value, unique items.

### Choosing the Right Method

Recommendation for Indonesia: FIFO most common dan matches physical flow. Average simple dan accepted for tax. LIFO not allowed for tax purposes.

---

## Bab 12: Analytics dan Reporting

![Analytics](../assets/im-ch12-analytics.png)

### Key Inventory Reports

**Report 1: Stock Status Report** - Shows current stock levels per SKU.

**Report 2: Inventory Valuation Report** - Shows inventory value by method.

**Report 3: Stock Movement Report** - Shows in/out movements with dates.

**Report 4: Aging Report** - Shows how long items in stock.

**Report 5: ABC Analysis Report** - Categorizes items by value contribution.

### Advanced Analytics

**Analytics 1: Demand Forecasting** - Predict future demand using historical data, seasonal patterns, trend analysis.

**Analytics 2: Inventory Optimization** - Optimize stock levels using EOQ, safety stock calculations, reorder points.

**Analytics 3: Supplier Performance** - Evaluate suppliers on delivery time, quality, cost competitiveness.

**Analytics 4: Carrying Cost Analysis** - Calculate total cost to hold inventory: storage, insurance, depreciation, opportunity cost.

### Dashboard Metrics

**Operational Metrics:** Total inventory value, stock turnover ratio, days sales of inventory, stockout incidents.

**Financial Metrics:** Inventory carrying cost, gross margin return on inventory, working capital tied up.

**Customer Metrics:** Fill rate, order cycle time, customer satisfaction score.

---
"""

# Part 3: Bab 13-16 (BAGIAN 3)
part3 = """
# BAGIAN 3: OPTIMASI DAN SCALE

## Bab 13: Integrasi dengan POS dan Accounting

![Integration](../assets/im-ch13-integrasi.png)

### Mengapa Integrasi Penting?

Tanpa integrasi: manual data entry (error prone), data inconsistency, time consuming, no real-time visibility.

Dengan integrasi: automatic data sync, consistent data, time saving, real-time visibility.

### POS Integration

Connect inventory dengan Point of Sales. Benefits: real-time stock update, automatic sales recording, accurate inventory levels, better reporting.

Popular POS in Indonesia: Moka POS, Pawoon, Majoo, Square.

### Accounting Integration

Connect inventory dengan accounting software. Benefits: automatic journal entries, accurate COGS calculation, real-time financial reporting, tax compliance.

Popular Accounting in Indonesia: Jurnal, Accurate, Xero, QuickBooks.

### Marketplace Integration

Connect inventory dengan online marketplaces. Benefits: centralized inventory management, automatic stock sync, prevent overselling, multi-channel selling.

Popular Marketplaces: Tokopedia, Shopee, TikTok Shop, Lazada, Bukalapak.

Integration Tools: Ginee, BigSeller, SellerApp, OneStock.

### Integration Best Practices

**Practice 1: Choose Compatible Systems** - Ensure systems can integrate before purchasing.

**Practice 2: Test Thoroughly** - Test integration dengan sample data before go live.

**Practice 3: Monitor Regularly** - Check sync status daily/weekly.

**Practice 4: Have Backup Plan** - What if integration fails? Manual process ready.

**Practice 5: Document Everything** - Document integration setup dan troubleshooting.

---

## Bab 14: Best Practices dan Tips

![Best Practices](../assets/im-ch14-bestpractice.png)

### Inventory Management Best Practices

**Practice 1: Regular Stock Opname**
Count physical stock regularly. Frequency: Category A monthly, Category B quarterly, Category C annually.

**Practice 2: FIFO Implementation**
Always use First In, First Out. Benefits: prevent expiry, reduce obsolescence, match physical flow.

**Practice 3: Safety Stock Maintenance**
Keep safety stock untuk critical items. Formula: Safety Stock = (Max Usage x Max Lead Time) - (Avg Usage x Avg Lead Time).

**Practice 4: Supplier Relationship**
Build strong relationships dengan suppliers. Benefits: better prices, flexible terms, priority service, quality assurance.

**Practice 5: Technology Adoption**
Use technology untuk efficiency. Tools: inventory software, barcode scanners, mobile apps, automation.

### Tips untuk UMKM

**Tip 1: Start Simple** - Don't overcomplicate. Start dengan basic system, upgrade later.

**Tip 2: Focus on Fast-Movers** - 80/20 rule: focus on 20% items that generate 80% revenue.

**Tip 3: Regular Review** - Review inventory weekly/monthly. Adjust as needed.

**Tip 4: Train Your Team** - Ensure team understands processes dan systems.

**Tip 5: Monitor KPIs** - Track key metrics. Make data-driven decisions.

### Common Mistakes to Avoid

**Mistake 1: Overstocking** - Problem: too much inventory. Impact: cash flow issues, storage cost. Solution: better demand forecasting, JIT.

**Mistake 2: Understocking** - Problem: too little inventory. Impact: lost sales, customer dissatisfaction. Solution: safety stock, better reorder points.

**Mistake 3: No System** - Problem: manual tracking. Impact: errors, inefficiency. Solution: implement inventory software.

**Mistake 4: Ignoring Data** - Problem: not using reports. Impact: poor decisions. Solution: regular review, data-driven decisions.

**Mistake 5: No Process** - Problem: ad-hoc processes. Impact: inconsistency, errors. Solution: document dan standardize processes.

### Scaling Your Inventory System

**Stage 1: Startup (0-100 SKUs)** - Spreadsheet atau basic software, single location, manual processes.

**Stage 2: Growth (100-1000 SKUs)** - Dedicated inventory software, multiple locations, some automation.

**Stage 3: Scale (1000+ SKUs)** - ERP system, multiple warehouses, full automation, advanced analytics.

---

## Bab 15: Studi Kasus Nyata

![Case Studies](../assets/im-ch15-case.png)

### Studi Kasus 1: Toko Sembako Jaya - Dari Manual ke Digital

**Latar Belakang:**
Toko Sembako Jaya adalah toko kelontong dengan 3 cabang di Surabaya. Sebelum inventory system, mereka pakai catatan manual di buku. Stock sering tidak akurat, banyak stockout, dan owner tidak punya visibility.

**Tantangan:**
- Stock accuracy kurang dari 70%
- Stockout 10-15 kali per bulan
- Overstock di beberapa item
- Tidak ada reporting
- Kerugian Rp 5-10 juta/bulan

**Solusi:**
Implementasi Jurnal Inventory + Moka POS integration.

**Implementasi:**

Phase 1: Setup (Bulan 1) - Setup Jurnal account, import 500+ SKUs, setup 3 warehouses, train 6 staff, connect Moka POS.

Phase 2: Migration (Bulan 2) - Stock opname semua cabang, adjust initial stock, setup reorder points, configure auto-reorder, test integration.

Phase 3: Optimization (Bulan 3) - Analyze ABC classification, optimize stock levels, setup reporting, train advanced features.

**Hasil:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Stock Accuracy | 70% | 98% | 40% |
| Stockout/bulan | 10-15 | 1-2 | 85% |
| Overstock | 25% | 8% | 68% |
| Revenue | Rp 300jt | Rp 420jt | 40% |
| Profit | Rp 30jt | Rp 55jt | 83% |

**ROI:** Investment Rp 15 juta. Profit increase Rp 25 juta/bulan x 6 bulan = Rp 150 juta. ROI: 900%.

### Studi Kasus 2: Fashion Brand Lokal - Multi-Channel Success

**Latar Belakang:**
Brand fashion lokal dengan penjualan di website, Tokopedia, Shopee, dan Instagram. Inventory tersebar di 4 channel, sering overselling, dan tidak ada central control.

**Tantangan:**
- Overselling 20-30 kali per bulan
- Stock discrepancy antar channel
- Manual sync memakan waktu 3 jam/hari
- Customer complaints tinggi
- Revenue loss Rp 15-20 juta/bulan

**Solusi:**
Implementasi Ginee untuk multi-channel inventory management.

**Implementasi:**

Phase 1: Integration (Bulan 1) - Connect semua channels, import product catalog, setup inventory sync, train team.

Phase 2: Optimization (Bulan 2) - Setup auto-sync real-time, configure stock allocation per channel, setup reorder alerts, create reporting.

Phase 3: Scale (Bulan 3) - Add more channels (Lazada, TikTok Shop), optimize stock levels, implement batch tracking, advanced analytics.

**Hasil:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Overselling/bulan | 20-30 | 0-1 | 97% |
| Sync Time | 3 jam/hari | 0 (auto) | 100% |
| Complaints/bulan | 50+ | 5 | 90% |
| Revenue | Rp 200jt | Rp 350jt | 75% |

**ROI:** Investment Rp 10 juta. Revenue increase Rp 150 juta/bulan x 6 bulan = Rp 900 juta. ROI: 8,900%.

### Studi Kasus 3: Distributor Makanan - Warehouse Optimization

**Latar Belakang:**
Distributor makanan dengan 2 gudang dan 500+ SKU. Warehouse tidak terorganisir, picking lambat, dan banyak expired products.

**Tantangan:**
- Picking time: 15 menit per order
- Expired products: Rp 10 juta/bulan
- Space utilization: 60%
- Order accuracy: 92%

**Solusi:**
Implementasi Zoho Inventory + barcode system + warehouse reorganization.

**Implementasi:**

Phase 1: Warehouse Reorganization (Bulan 1) - Redesign layout, install racking system, setup bin locations, label everything.

Phase 2: System Setup (Bulan 2) - Setup Zoho Inventory, configure 2 warehouses, import 500+ SKUs, setup barcode system, train 10 staff.

Phase 3: Process Optimization (Bulan 3) - Implement batch picking, setup expiry tracking, configure FIFO, optimize picking routes.

**Hasil:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Picking Time | 15 menit | 5 menit | 67% |
| Expired/bulan | Rp 10jt | Rp 1jt | 90% |
| Space Utilization | 60% | 90% | 50% |
| Order Accuracy | 92% | 99% | 7.6% |

**ROI:** Investment Rp 50 juta. Savings Rp 15 juta/bulan x 6 bulan = Rp 90 juta. ROI: 80%.

### Common Themes

**Theme 1: Technology is Key** - Semua cases menunjukkan bahwa digital system meningkatkan accuracy dan efficiency.

**Theme 2: Integration Matters** - Integration antar systems critical untuk success.

**Theme 3: Data-Driven Decisions** - Cases yang track metrics perform better.

**Theme 4: Training is Critical** - Technology only as good as the people using it.

**Theme 5: Continuous Improvement** - Inventory management is ongoing process.

---

## Bab 16: Roadmap 30 Hari dan Next Steps

![Roadmap](../assets/im-ch16-roadmap.png)

### 30-Hari Inventory Management Implementation Roadmap

**Week 1: Assessment dan Planning (Hari 1-7)**

Hari 1: Current State Assessment - Audit current process, identify pain points, count physical stock, document issues.

Hari 2: Goal Setting - Define objectives (SMART), set KPIs, get management buy-in, assign project lead.

Hari 3: Research Solutions - Research software, compare features dan pricing, read reviews, shortlist 3 options.

Hari 4: Demo dan Trial - Schedule demos, sign up for trials, test dengan sample data, get team feedback.

Hari 5: Decision - Choose solution, negotiate pricing (use referral codes!), purchase subscription, setup account.

Hari 6: Data Preparation - Collect all data, clean data, standardize formats, prepare import file.

Hari 7: Data Migration - Import data ke software, map fields correctly, validate data, fix errors.

**Week 2: Setup dan Configuration (Hari 8-14)**

Hari 8: Warehouse Setup - Define structure, setup locations, assign PICs, configure settings.

Hari 9: Product Catalog - Create categories, setup SKUs, add barcodes, set pricing.

Hari 10: Initial Stock - Input opening stock, verify quantities, adjust discrepancies, document.

Hari 11: Supplier Setup - Create supplier list, add contact info, set terms, link to products.

Hari 12: Integration Setup - Connect POS, connect accounting, connect marketplaces, test sync.

Hari 13: Automation Setup - Set reorder points, configure alerts, setup auto-reorder, test.

Hari 14: Reporting Setup - Create custom reports, setup dashboards, configure schedules, test.

**Week 3: Training dan Testing (Hari 15-21)**

Hari 15: Team Training (Basic) - Train on basic features, cover data entry, cover stock movements, Q&A.

Hari 16: Team Training (Advanced) - Train on reporting, train on automation, cover integrations, hands-on.

Hari 17: Pilot Program - Select pilot team, start using system, monitor usage, collect feedback.

Hari 18: Testing - Test all features, test integrations, test reporting, fix issues.

Hari 19: Process Documentation - Document workflows, create SOPs, create training materials.

Hari 20: Optimization - Review workflows, optimize processes, update configurations, refine settings.

Hari 21: Week 3 Review - Review pilot results, identify improvements, update training, prepare rollout.

**Week 4: Full Rollout dan Optimization (Hari 22-30)**

Hari 22: Full Team Training - Train all users, cover all features, provide documentation, set expectations.

Hari 23: Go Live - Migrate all operations, start using system, monitor closely, provide support.

Hari 24: Data Enrichment - Add missing information, update data, validate accuracy, clean up.

Hari 25: Integration Testing - Test all integrations, verify sync, check data flow, fix issues.

Hari 26: Process Optimization - Review processes, identify bottlenecks, optimize workflows.

Hari 27: Advanced Features - Setup advanced automation, configure analytics, create custom reports.

Hari 28: User Adoption - Monitor usage, identify non-users, provide training, celebrate wins.

Hari 29: Data Quality - Run quality checks, clean duplicates, update missing fields, validate.

Hari 30: Review dan Next Steps - Review 30-day results, celebrate achievements, identify priorities, plan next 90 days.

### Next Steps After 30 Days

**Month 2: Advanced Features** - Implement batch tracking, setup expiry management, create advanced reports, optimize reorder points.

**Month 3: Scale dan Optimize** - Add more warehouses, expand integrations, refine processes, measure ROI.

**Month 4-6: Continuous Improvement** - Regular reviews, ongoing training, process optimization, feature expansion.

### KPI Targets

**30-Day Targets:** Stock accuracy lebih dari 95%, user adoption lebih dari 80%, data quality lebih dari 90%, integration status 100%.

**90-Day Targets:** Stockout rate kurang dari 2%, inventory turnover 6-12x per year, order accuracy lebih dari 98%, time saved lebih dari 50%.

**6-Month Targets:** ROI lebih dari 300%, carrying cost kurang dari 25%, fill rate lebih dari 95%, customer satisfaction lebih dari 90%.

### Final Thoughts

Inventory management is foundation untuk bisnis success. Dengan system yang baik, Anda bisa: reduce costs, increase sales, improve customer satisfaction, make better decisions.

Start today. Follow the roadmap. Measure results. Optimize relentlessly.

Good luck!

---

## Tentang SNISHOP

Panduan ini diterbitkan oleh SNISHOP.COM, platform ERP terpercaya untuk UMKM Indonesia.

**Website:** https://snishop.com
**Email:** support@snishop.com
**Lynk.id:** https://lynk.id/snishop

**CEO:** Siraj Nur Ihrom

**Misi:** Memberdayakan UMKM Indonesia melalui teknologi dan edukasi.

---

## Daftar Referral Codes

Gunakan kode referral ini untuk mendapatkan diskon eksklusif:

- Jurnal: SNISHOPJR (20% off tahun pertama)
- Mekari: SNISHOPMK (Free 2 bulan)
- Accurate: SNISHOPAC (Free setup + 1 bulan)
- Zoho Inventory: SNISHOPZO (30% off tahun pertama)

---

**(c) 2026 SNISHOP.COM - Semua Hak Dilindungi**

Dilarang menggandakan, mendistribusikan, atau memodifikasi konten ini tanpa izin tertulis dari SNISHOP.COM.
"""

# Append parts
with open('drafts/panduan-lengkap-inventory-management-umkm.md', 'a', encoding='utf-8') as f:
    f.write(part2)
    f.write(part3)

# Count words
content = open('drafts/panduan-lengkap-inventory-management-umkm.md', 'r', encoding='utf-8').read()
words = len(content.split())
lines = len(content.splitlines())
print(f"Manuscript complete: {words} words, {lines} lines")
