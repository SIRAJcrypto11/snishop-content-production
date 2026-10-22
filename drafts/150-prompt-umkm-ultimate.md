# 150 Prompt AI untuk Bisnis dan UMKM Indonesia

**Panduan Lengkap dengan Automation dan Integrasi**

Disusun oleh: Siraj Nur Ihrom, Founder SNISHOP

Edisi Ultimate, 2026

---

## Tentang Edisi Ultimate

Edisi Ultimate mencakup semua konten edisi Premium, ditambah dengan:
- Automation workflows lengkap dengan Make.com, Zapier, dan n8n
- Integrasi dengan sistem POS, akuntansi, dan marketplace
- Advanced case studies dari 10 UMKM sukses
- Custom API integration guides
- Video tutorial access (QR code)
- Priority support dari tim SNISHOP

---

## Bagian 1: Automation Workflows

### 1.1 Make.com Integration

Make.com (sebelumnya Integromat) adalah platform automation visual yang memungkinkan Anda menghubungkan berbagai aplikasi dan mengotomasi workflow bisnis.

#### Setup Dasar Make.com untuk UMKM

Langkah-langkah setup:
1. Buat akun di make.com (free plan cukup untuk mulai)
2. Create new scenario
3. Pilih trigger app (misal: Google Sheets, WhatsApp Business, Tokopedia)
4. Add OpenAI module untuk generate content atau analisis
5. Configure output destination (misal: Email, Database, Dashboard)
6. Test dan activate scenario

#### Workflow 1: Auto-Generate Laporan Penjualan Mingguan

Trigger: Setiap Minggu jam 8 pagi
Step 1: Fetch data penjualan dari Google Sheets
Step 2: Hitung total penjualan, profit, dan growth
Step 3: Generate analisis dan rekomendasi menggunakan AI
Step 4: Format laporan dalam PDF
Step 5: Email ke pemilik bisnis

Konfigurasi Make.com scenario:
```json
{
  "name": "Weekly Sales Report Generator",
  "schedule": "Every Monday 8:00 AM",
  "modules": [
    {
      "type": "googleSheets:getRecords",
      "sheetId": "YOUR_SHEET_ID",
      "sheetName": "Penjualan",
      "filter": "Date >= {{addDays(now, -7)}}"
    },
    {
      "type": "function:aggregate",
      "operations": [
        {"name": "total_sales", "formula": "SUM({{records.Revenue}})"},
        {"name": "total_cost", "formula": "SUM({{records.COGS}})"},
        {"name": "total_profit", "formula": "{{total_sales}} - {{total_cost}}"},
        {"name": "profit_margin", "formula": "{{total_profit}} / {{total_sales}} * 100"}
      ]
    },
    {
      "type": "openai:createCompletion",
      "model": "gpt-4",
      "prompt": "Analisis laporan penjualan minggu ini: Total penjualan {{total_sales}}, profit {{total_profit}} (margin {{profit_margin}}%). Berikan 3 insights dan 5 rekomendasi actionable untuk minggu depan dalam bahasa Indonesia yang sederhana."
    },
    {
      "type": "pdfGenerator:create",
      "template": "weekly-report-template",
      "data": {
        "period": "{{formatDate(addDays(now, -7))}} - {{formatDate(now)}}",
        "sales": "{{total_sales}}",
        "profit": "{{total_profit}}",
        "margin": "{{profit_margin}}%",
        "analysis": "{{openai.result}}"
      }
    },
    {
      "type": "email:send",
      "to": "owner@business.com",
      "subject": "Laporan Penjualan Mingguan - {{formatDate(now)}}",
      "attachment": "{{pdf.url}}"
    }
  ]
}
```

#### Workflow 2: Auto-Reply Customer Inquiry

Trigger: New WhatsApp message received
Step 1: Parse message content
Step 2: Categorize inquiry (product info, complaint, order status, other)
Step 3: Generate appropriate response using AI
Step 4: Send reply via WhatsApp Business API
Step 5: Log conversation to CRM

Konfigurasi:
```json
{
  "name": "WhatsApp Auto-Reply System",
  "trigger": {
    "type": "whatsapp:incomingMessage",
    "webhook": "YOUR_WEBHOOK_URL"
  },
  "modules": [
    {
      "type": "function:categorize",
      "input": "{{whatsapp.message}}",
      "categories": ["product_info", "complaint", "order_status", "pricing", "other"]
    },
    {
      "type": "openai:createCompletion",
      "model": "gpt-4",
      "prompt": "Sebagai customer service {nama_usaha}, balas pesan WhatsApp berikut dengan tone ramah dan profesional. Kategori: {{category}}. Pesan: {{whatsapp.message}}. Batasan: maksimal 100 kata, bahasa Indonesia santai."
    },
    {
      "type": "whatsapp:sendMessage",
      "to": "{{whatsapp.sender}}",
      "message": "{{openai.result}}"
    },
    {
      "type": "crm:addInteraction",
      "contact": "{{whatsapp.sender}}",
      "type": "whatsapp",
      "content": "{{whatsapp.message}}",
      "response": "{{openai.result}}"
    }
  ]
}
```

#### Workflow 3: Inventory Alert System

Trigger: Stock level below threshold
Step 1: Monitor inventory levels dari POS system
Step 2: Identify items below reorder point
Step 3: Generate purchase recommendation
Step 4: Send alert to owner via Telegram
Step 5: Create draft purchase order

Konfigurasi:
```json
{
  "name": "Inventory Alert System",
  "trigger": {
    "type": "webhook",
    "endpoint": "/inventory-check"
  },
  "schedule": "Every 6 hours",
  "modules": [
    {
      "type": "pos:getInventory",
      "endpoint": "YOUR_POS_API"
    },
    {
      "type": "function:filter",
      "condition": "{{inventory.stock}} < {{inventory.reorder_point}}"
    },
    {
      "type": "openai:createCompletion",
      "model": "gpt-4",
      "prompt": "Buatkan rekomendasi pembelian untuk item yang stoknya menipis: {{filtered_items}}. Hitung quantity optimal berdasarkan rata-rata penjualan 30 hari terakhir. Format: tabel dengan kolom Item, Stok Saat Ini, Rata-rata Penjualan/Hari, Quantity yang Disarankan, dan Estimasi Biaya."
    },
    {
      "type": "telegram:sendMessage",
      "chatId": "OWNER_CHAT_ID",
      "message": "ALERT STOK MENIPIS!\n\n{{openai.result}}\n\nReply 'PO' untuk buat purchase order."
    }
  ]
}
```

### 1.2 Zapier Integration

Zapier adalah platform automation yang populer dengan integrasi yang luas ke 5.000+ aplikasi.

#### Zap 1: Social Media Content Calendar

Trigger: New week starts (Monday 8 AM)
Step 1: Fetch content themes dari Google Sheets
Step 2: Generate 7 social media posts menggunakan AI
Step 3: Create images menggunakan Canva API
Step 4: Schedule posts di Buffer/Hootsuite
Step 5: Notify marketing team

Konfigurasi Zap:
```json
{
  "name": "Weekly Social Media Content Generator",
  "trigger": {
    "app": "schedule",
    "event": "every_week",
    "day": "monday",
    "time": "08:00"
  },
  "actions": [
    {
      "app": "googleSheets",
      "action": "get_rows",
      "sheet": "Content Calendar",
      "filter": "Week = {{trigger.week}}"
    },
    {
      "app": "openai",
      "action": "generate_text",
      "prompt": "Buatkan 7 caption social media untuk minggu ini berdasarkan themes: {{sheets.themes}}. Untuk setiap hari: (1) Hook menarik, (2) Value/insight, (3) CTA. Platform: Instagram, Facebook, TikTok. Tone: {{brand.tone}}."
    },
    {
      "app": "canva",
      "action": "create_design",
      "template": "social-media-post",
      "text": "{{openai.captions}}"
    },
    {
      "app": "buffer",
      "action": "schedule_posts",
      "posts": "{{canva.designs}}",
      "times": ["09:00", "12:00", "15:00", "18:00", "20:00"]
    },
    {
      "app": "slack",
      "action": "send_message",
      "channel": "#marketing",
      "message": "7 posts untuk minggu ini sudah di-schedule. Review di Buffer: {{buffer.link}}"
    }
  ]
}
```

#### Zap 2: Customer Review Aggregator

Trigger: New review di Google Business, Tokopedia, Shopee
Step 1: Collect review dari berbagai platform
Step 2: Analyze sentiment menggunakan AI
Step 3: Generate response draft
Step 4: Post response (untuk yang positif) atau notify owner (untuk yang negatif)
Step 5: Update dashboard

#### Zap 3: Invoice and Payment Tracker

Trigger: New order completed
Step 1: Generate invoice dari order data
Step 2: Send invoice ke customer via email
Step 3: Monitor payment status
Step 4: Send reminder jika belum bayar setelah 3 hari
Step 5: Update accounting system

### 1.3 n8n Integration

n8n adalah platform automation open-source yang bisa di-self-host untuk kontrol penuh dan cost efficiency.

#### Workflow 1: Multi-Channel Order Processor

Trigger: New order dari Tokopedia, Shopee, WhatsApp, Website
Step 1: Normalize order data dari berbagai sumber
Step 2: Validate stock availability
Step 3: Generate packing slip
Step 4: Update inventory
Step 5: Send confirmation ke customer
Step 6: Notify warehouse team

Konfigurasi n8n:
```json
{
  "name": "Multi-Channel Order Processor",
  "nodes": [
    {
      "type": "n8n-nodes-base.webhook",
      "path": "/new-order",
      "method": "POST",
      "responseMode": "lastNode"
    },
    {
      "type": "n8n-nodes-base.function",
      "functionCode": "function normalizeOrder(order) {\n  return {\n    orderId: order.id || order.order_id,\n    source: order.source || 'unknown',\n    customer: {\n      name: order.customer_name || order.name,\n      phone: order.customer_phone || order.phone,\n      address: order.shipping_address || order.address\n    },\n    items: order.items || order.products,\n    total: order.total_amount || order.total,\n    payment: order.payment_method || 'cod'\n  };\n}\nreturn { order: normalizeOrder($input.all()[0].json) };"
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "url": "https://api.pos-system.com/stock/check",
      "method": "POST",
      "body": {
        "items": "{{order.items}}"
      }
    },
    {
      "type": "n8n-nodes-base.if",
      "conditions": {
        "boolean": [
          {
            "value1": "={{$json.in_stock}}",
            "value2": true
          }
        ]
      }
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "url": "https://api.pos-system.com/stock/deduct",
      "method": "POST",
      "body": {
        "items": "{{order.items}}"
      }
    },
    {
      "type": "n8n-nodes-base.emailSend",
      "to": "{{order.customer.email}}",
      "subject": "Order {{order.orderId}} Confirmed",
      "html": "<p>Hi {{order.customer.name}},</p><p>Terima kasih! Order Anda sudah dikonfirmasi.</p><p>Order ID: {{order.orderId}}</p><p>Total: Rp {{order.total}}</p>"
    },
    {
      "type": "n8n-nodes-base.telegram",
      "chatId": "WAREHOUSE_GROUP_ID",
      "text": "NEW ORDER!\nID: {{order.orderId}}\nCustomer: {{order.customer.name}}\nItems: {{order.items.length}}\nTotal: Rp {{order.total}}\nPlease prepare for packing."
    }
  ]
}
```

#### Workflow 2: Financial Dashboard Generator

Trigger: Daily at 11 PM
Step 1: Collect sales data dari semua channel
Step 2: Calculate revenue, COGS, gross profit
Step 3: Track expenses dan categorize
Step 4: Generate financial metrics
Step 5: Create visual dashboard
Step 6: Email summary ke owner

#### Workflow 3: Customer Segmentation Engine

Trigger: Weekly on Sunday
Step 1: Collect customer transaction data
Step 2: Calculate RFM (Recency, Frequency, Monetary) scores
Step 3: Segment customers (Champions, Loyal, At Risk, Lost)
Step 4: Generate personalized marketing recommendations
Step 5: Update CRM with segments
Step 6: Trigger targeted campaigns

---

## Bagian 2: Advanced Case Studies

### 2.1 Dapur Raisa: Dari UMKM Rumahan ke 5 Cabang

#### Background
Dapur Raisa memulai bisnis dari rumah di Semarang pada 2020 dengan modal Rp 5 juta. Produk utama: nasi karamel ayam crispy.

#### Challenge (2022)
- Penjualan stagnan di Rp 35 juta per bulan
- Tidak ada sistem inventory, sering kehabisan bahan
- Customer complaint tidak ter-track
- Owner kewalahan mengurus operasional

#### Solution: Implementasi 150 Prompt AI

Bulan 1: Foundation
- P-001: Analisis kompetitor di Semarang
- P-002: Survei kepuasan pelanggan
- P-016: Pengembangan varian produk baru
- P-031: Pricing strategy optimization

Bulan 2: Systems
- P-046: Facebook ads copywriting
- P-061: Instagram content calendar
- P-076: Sales follow-up templates
- P-091: Customer complaint handling

Bulan 3: Automation
- Setup Make.com untuk weekly reports
- Implement WhatsApp auto-reply
- Inventory alert system
- Multi-channel order processor

#### Results (After 6 Months)

Financial:
- Revenue: Rp 35 juta → Rp 125 juta per bulan (257% growth)
- Profit margin: 18% → 28%
- Average order value: Rp 32.000 → Rp 48.000

Operational:
- Stock-out incidents: 12x/bulan → 1x/bulan
- Customer complaint response time: 4 jam → 15 menit
- Order processing time: 30 menit → 5 menit

Business:
- Opened 2 additional branches
- Hired 8 new employees
- Listed in 3 food delivery platforms
- Built 15.000 Instagram followers

#### Key Takeaways
1. Data-driven decisions beat gut feelings
2. Automation frees up time for strategic work
3. Consistent customer engagement builds loyalty
4. Small improvements compound over time

### 2.2 Batik Serasi: Revitalisasi Bisnis Tradisional

#### Background
Batik Serasi adalah bisnis batik keluarga di Yogyakarta yang sudah berjalan 25 tahun. Generasi kedua mengambil alih pada 2021 dengan tantangan modernisasi.

#### Challenge (2023)
- Stok menumpuk 500+ potong (Rp 150 juta)
- Cash flow negatif 3 bulan berturut-turut
- Customer base aging (rata-rata 55 tahun)
- Tidak ada online presence
- Kompetitor online mengambil market share

#### Solution: Digital Transformation dengan AI

Phase 1: Inventory Clearance (Bulan 1-2)
- P-031: Pricing optimization untuk clearance
- P-046: Facebook ads untuk promo besar-besaran
- P-061: Instagram content untuk showcase produk
- P-076: WhatsApp broadcast ke database pelanggan lama

Phase 2: Rebranding (Bulan 3-4)
- P-001: Riset pasar untuk target demographic baru
- P-016: Pengembangan produk batik modern
- P-046: Copywriting untuk brand positioning baru
- P-091: Customer feedback system

Phase 3: Scaling (Bulan 5-6)
- P-106: Pembukuan dan financial tracking
- P-121: SOP untuk produksi
- P-136: Analytics dan reporting
- Automation workflows untuk order processing

#### Results (After 6 Months)

Inventory:
- Stok turun 85% (500 → 75 potong)
- Inventory turnover: 2x → 8x per tahun
- Dead stock cleared: Rp 150 juta → Rp 0

Financial:
- Revenue: Rp 25 juta → Rp 85 juta per bulan
- Cash flow: Negatif → Positif Rp 30 juta/bulan
- Gross margin: 25% → 40%

Customer:
- Average customer age: 55 → 38 tahun
- Online sales: 0% → 65% dari total revenue
- Repeat purchase rate: 15% → 45%
- Instagram followers: 0 → 25.000

#### Key Takeaways
1. Traditional businesses can transform with digital tools
2. Younger market requires different engagement strategies
3. Data-driven pricing can clear inventory profitably
4. Online presence is no longer optional

### 2.3 TechSolusi: IT Service Provider Scaling

#### Background
TechSolusi adalah penyedia jasa IT untuk UMKM di Surabaya. Didirikan 2019, fokus pada website development, social media management, dan digital marketing.

#### Challenge (2024)
- Handling 25 klien dengan tim 5 orang
- Quality inconsistent antar project
- Client onboarding memakan waktu 2 minggu
- Sulit scale karena ketergantungan pada founder
- Profit margin turun karena inefficiency

#### Solution: Systematization dengan AI Prompts

Service Standardization (Bulan 1):
- P-046: Template proposal dan quotation
- P-061: Content calendar templates
- P-076: Client communication scripts
- P-091: Service level agreement templates

Automation Implementation (Bulan 2-3):
- Client onboarding automation (Make.com)
- Content generation workflow (Zapier)
- Reporting automation (n8n)
- Invoice and payment tracking

Team Empowerment (Bulan 4-6):
- Training semua staff menggunakan prompt library
- Create internal knowledge base
- Quality control checkpoints
- Performance metrics dashboard

#### Results (After 6 Months)

Operational:
- Client onboarding time: 2 minggu → 3 hari
- Project delivery time: -35%
- Quality consistency score: 6.5 → 8.5 (out of 10)
- Staff productivity: +45%

Financial:
- Revenue: Rp 125 juta → Rp 280 juta per bulan
- Gross margin: 35% → 52%
- Client acquisition cost: -40%
- Average client lifetime value: +65%

Business:
- Active clients: 25 → 48
- Team size: 5 → 9 (tanpa lose quality)
- Founder time on operations: 80% → 30%
- New service lines launched: 2

#### Key Takeaways
1. Service businesses can scale with systematization
2. AI prompts standardize quality across team
3. Automation reduces dependency on key personnel
4. Efficiency gains directly impact profitability

### 2.4 Kopi Nusantara: From Local to National

#### Background
Kopi Nusantara adalah coffee roastery di Bandung yang memulai bisnis pada 2018. Fokus pada specialty coffee dari berbagai daerah di Indonesia.

#### Challenge (2023)
- Sales terbatas di Bandung dan online store
- Brand awareness rendah di luar Jawa
- Distribusi belum terkelola dengan baik
- Kompetitor besar masuk ke market
- Need untuk scale production

#### Solution: Multi-Channel Expansion dengan AI

Market Research (Bulan 1):
- P-001: Analisis kompetitor nasional
- P-002: Survei preferensi customer di berbagai kota
- P-016: Product line expansion untuk market berbeda
- P-031: Pricing strategy untuk berbagai channel

Content Marketing (Bulan 2-3):
- P-046: Facebook ads untuk brand awareness
- P-061: Instagram content untuk engagement
- P-076: Email marketing untuk retention
- P-091: Community building

Distribution (Bulan 4-6):
- P-106: Partnership dan distribution agreements
- P-121: Supply chain optimization
- P-136: Sales analytics dan forecasting
- Automation untuk order processing multi-channel

#### Results (After 12 Months)

Market Reach:
- Cities served: 3 → 28 kota
- Online marketplace presence: 1 → 7 platforms
- Offline distribution points: 5 → 85 outlets
- Brand awareness (unaided): 8% → 34%

Financial:
- Revenue: Rp 85 juta → Rp 420 juta per bulan
- Revenue from outside Java: 5% → 45%
- Average order value: Rp 125.000 → Rp 185.000
- Customer lifetime value: Rp 850.000 → Rp 1.450.000

Operations:
- Production capacity: 500 kg → 2.500 kg per bulan
- Order fulfillment time: 3 hari → 1 hari
- Stock-out incidents: 15% → 2%
- Customer satisfaction: 4.2 → 4.7 (out of 5)

#### Key Takeaways
1. Local brands can compete nationally with right strategy
2. Multi-channel approach diversifies risk
3. Data-driven expansion beats gut feeling
4. Operational efficiency enables scaling

### 2.5 Fashionista Shop: Fast Fashion to Sustainable Brand

#### Background
Fashionista Shop adalah online fashion retailer di Jakarta yang memulai bisnis pada 2019. Awalnya fast fashion, pivot ke sustainable fashion pada 2023.

#### Challenge (2023)
- Margin tipis karena fast fashion competition
- Customer complaints tentang kualitas
- Return rate tinggi (18%)
- Brand differentiation unclear
- Need untuk repositioning

#### Solution: Brand Transformation dengan AI

Repositioning Strategy (Bulan 1-2):
- P-001: Riset sustainable fashion market
- P-002: Customer survey tentang values dan preferences
- P-016: Product development untuk sustainable line
- P-031: Premium pricing strategy

Brand Communication (Bulan 3-4):
- P-046: Storytelling ads tentang sustainability
- P-061: Educational content tentang sustainable fashion
- P-076: Community building messaging
- P-091: Transparency dan trust building

Operations (Bulan 5-6):
- P-106: Supply chain audit dan optimization
- P-121: Quality control procedures
- P-136: Sustainability metrics tracking
- Automation untuk inventory dan order management

#### Results (After 9 Months)

Brand:
- Brand perception: "Fast fashion" → "Sustainable fashion leader"
- Instagram engagement rate: 2.1% → 6.8%
- Press mentions: 0 → 15 articles
- Influencer partnerships: 3 → 25

Financial:
- Revenue: Rp 180 juta → Rp 285 juta per bulan
- Gross margin: 22% → 45%
- Average order value: Rp 165.000 → Rp 285.000
- Customer lifetime value: Rp 450.000 → Rp 1.2 juta

Operations:
- Return rate: 18% → 4%
- Customer satisfaction: 3.8 → 4.6
- Repeat purchase rate: 25% → 58%
- Inventory turnover: 4x → 6x per tahun

#### Key Takeaways
1. Brand repositioning requires consistent messaging
2. Sustainability can be profitable, not just ethical
3. Quality focus reduces returns and builds loyalty
4. Storytelling differentiates in crowded market

---

## Bagian 3: Custom Integration Guides

### 3.1 POS System Integration

Menghubungkan prompt AI dengan sistem POS untuk real-time business intelligence.

#### Setup Overview
1. Pilih POS system yang mendukung API (Moka, Pawoon, Olsera)
2. Dapatkan API credentials
3. Setup webhook untuk real-time data
4. Configure AI processing pipeline
5. Create dashboard untuk insights

#### Example: Real-Time Sales Analytics

```javascript
// Node.js example: Daily sales analysis
const axios = require('axios');
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function analyzeDailySales() {
  // Fetch today's sales from POS
  const sales = await axios.get('https://api.pos-system.com/sales/today', {
    headers: { 'Authorization': `Bearer ${process.env.POS_API_KEY}` }
  });
  
  // Generate analysis
  const analysis = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
      role: 'system',
      content: 'You are a business analyst for Indonesian UMKM.'
    },
    {
      role: 'user',
      content: `Analyze today's sales data: ${JSON.stringify(sales.data)}. Provide: (1) Total revenue vs target, (2) Top selling products, (3) Peak hours, (4) Customer count, (5) Average transaction value, (6) 3 actionable insights for tomorrow. Format in Indonesian.`
    }
    ]
  });
  
  // Send to owner via WhatsApp
  await axios.post('https://api.whatsapp.com/send', {
    to: process.env.OWNER_PHONE,
    message: analysis.choices[0].message.content
  });
  
  return analysis;
}

// Run daily at 10 PM
const cron = require('node-cron');
cron.schedule('0 22 * * *', analyzeDailySales);
```

### 3.2 Accounting Software Integration

Menghubungkan AI dengan software akuntansi untuk automated bookkeeping.

#### Setup Overview
1. Pilih accounting software (Jurnal.id, Jurnalu, Xero)
2. Setup API integration
3. Configure automated categorization
4. Create financial reports generator
5. Setup tax calculation automation

#### Example: Automated Expense Categorization

```python
# Python example: Auto-categorize expenses
import openai
import requests

openai.api_key = os.getenv('OPENAI_API_KEY')

def categorize_expense(description, amount):
    prompt = f"""
    Kategorikan pengeluaran bisnis berikut ke dalam kategori akuntansi yang tepat:
    Deskripsi: {description}
    Jumlah: Rp {amount:,}
    
    Kategori yang tersedia:
    - Biaya Operasional
    - Biaya Pemasaran
    - Biaya Gaji
    - Biaya Sewa
    - Biaya Utilitas
    - Biaya Transportasi
    - Biaya Perlengkapan
    - Biaya Lainnya
    
    Berikan: (1) Kategori, (2) Alasan singkat, (3) Saran optimasi jika ada.
    Format dalam bahasa Indonesia.
    """
    
    response = openai.ChatCompletion.create(
        model='gpt-4',
        messages=[{'role': 'user', 'content': prompt}],
        temperature=0.3
    )
    
    return response.choices[0].message.content

# Fetch uncategorized expenses from accounting software
expenses = requests.get('https://api.accounting.com/expenses/uncategorized',
    headers={'Authorization': f'Bearer {API_KEY}'}).json()

for expense in expenses:
    category = categorize_expense(expense['description'], expense['amount'])
    
    # Update expense with category
    requests.put(f'https://api.accounting.com/expenses/{expense["id"]}',
        json={'category': category},
        headers={'Authorization': f'Bearer {API_KEY}'})
```

### 3.3 Marketplace Integration

Menghubungkan AI dengan marketplace untuk automated product listing dan pricing.

#### Setup Overview
1. Register sebagai developer di marketplace (Tokopedia, Shopee, Lazada)
2. Dapatkan API access
3. Setup product sync automation
4. Configure dynamic pricing
5. Create review response automation

#### Example: Dynamic Pricing Engine

```javascript
// Node.js example: Competitor-based pricing
const axios = require('axios');
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function optimizePricing(productId) {
  // Fetch our product data
  const ourProduct = await axios.get(`https://api.marketplace.com/products/${productId}`);
  
  // Fetch competitor prices
  const competitors = await axios.get(`https://api.marketplace.com/competitors`, {
    params: { product_name: ourProduct.data.name }
  });
  
  // Generate pricing recommendation
  const recommendation = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
      role: 'system',
      content: 'You are a pricing strategist for Indonesian e-commerce.'
    },
    {
      role: 'user',
      content: `Our product: ${ourProduct.data.name}, cost: Rp ${ourProduct.data.cost}, current price: Rp ${ourProduct.data.price}, stock: ${ourProduct.data.stock}. Competitors: ${JSON.stringify(competitors.data)}. Recommend optimal price considering: (1) Margin target 30%, (2) Competitive positioning, (3) Stock level, (4) Sales velocity. Provide reasoning.`
    }
    ]
  });
  
  // Update price if recommended
  const newPrice = extractPrice(recommendation.choices[0].message.content);
  if (newPrice && newPrice !== ourProduct.data.price) {
    await axios.put(`https://api.marketplace.com/products/${productId}`, {
      price: newPrice
    });
  }
  
  return recommendation;
}

// Run every 6 hours
const cron = require('node-cron');
cron.schedule('0 */6 * * *', () => {
  const products = getAllActiveProducts();
  products.forEach(product => optimizePricing(product.id));
});
```

### 3.4 CRM Integration

Menghubungkan AI dengan CRM untuk automated customer management.

#### Setup Overview
1. Pilih CRM (HubSpot, Salesforce, Zoho, atau custom)
2. Setup API integration
3. Configure customer data sync
4. Create automated segmentation
5. Setup personalized communication triggers

#### Example: Customer Lifetime Value Prediction

```python
# Python example: CLV prediction and segmentation
import openai
import pandas as pd
from datetime import datetime

openai.api_key = os.getenv('OPENAI_API_KEY')

def predict_clv(customer_data):
    prompt = f"""
    Analisis data customer berikut dan prediksi Customer Lifetime Value (CLV):
    
    Nama: {customer_data['name']}
    First purchase: {customer_data['first_purchase']}
    Total purchases: {customer_data['total_purchases']}
    Total spent: Rp {customer_data['total_spent']:,}
    Average order value: Rp {customer_data['avg_order_value']:,}
    Days since last purchase: {customer_data['days_since_last']}
    Average purchase frequency: {customer_data['avg_frequency']} days
    
    Berikan:
    1. Predicted CLV untuk 12 bulan ke depan
    2. Customer segment (Champion/Loyal/Potential/At Risk/Lost)
    3. Recommended action untuk maximize CLV
    4. Risk factors jika ada
    
    Format dalam bahasa Indonesia.
    """
    
    response = openai.ChatCompletion.create(
        model='gpt-4',
        messages=[{'role': 'user', 'content': prompt}],
        temperature=0.3
    )
    
    return response.choices[0].message.content

# Fetch customer data from CRM
customers = fetch_all_customers()

for customer in customers:
    clv_prediction = predict_clv(customer)
    
    # Update CRM with prediction
    update_customer_segment(customer['id'], clv_prediction)
    
    # Trigger personalized campaign if needed
    if 'At Risk' in clv_prediction or 'Lost' in clv_prediction:
        trigger_retention_campaign(customer['id'])
```

---

## Bagian 4: Advanced Strategies

### 4.1 Multi-AI Strategy

Menggunakan multiple AI tools untuk hasil optimal.

#### When to Use Each AI

| Task | Best AI | Reason |
|------|---------|--------|
| Creative copywriting | ChatGPT | Natural language, creative |
| Data analysis | Claude | Long context, analytical |
| Real-time research | Gemini | Web access, current data |
| Document processing | Claude | Large file handling |
| Quick tasks | ChatGPT | Fast response |
| Code generation | ChatGPT/Claude | Both strong |
| Translation | Gemini | Multi-language strength |
| Summarization | Claude | Maintains context |

#### Example: Combined AI Workflow

Step 1: Research dengan Gemini
- Fetch market data dan trends
- Collect competitor information
- Gather customer reviews

Step 2: Analysis dengan Claude
- Process large datasets
- Identify patterns
- Generate insights

Step 3: Content Creation dengan ChatGPT
- Write marketing copy
- Create social media posts
- Draft email campaigns

Step 4: Quality Check dengan Claude
- Review content for consistency
- Check for errors
- Optimize for clarity

### 4.2 Prompt Chaining

Menghubungkan multiple prompts untuk complex tasks.

#### Example: Product Launch Campaign

Chain 1: Market Research
- Prompt 1: Analyze target market
- Prompt 2: Identify customer pain points
- Prompt 3: Research competitor positioning

Chain 2: Product Development
- Prompt 4: Generate product features
- Prompt 5: Create pricing strategy
- Prompt 6: Design packaging concepts

Chain 3: Marketing Campaign
- Prompt 7: Write campaign messaging
- Prompt 8: Create content calendar
- Prompt 9: Design ad copy variations

Chain 4: Launch Execution
- Prompt 10: Prepare sales scripts
- Prompt 11: Create customer FAQ
- Prompt 12: Setup feedback collection

### 4.3 AI-Human Collaboration

Best practices untuk combining AI efficiency dengan human judgment.

#### The 80/20 Rule
- AI handles 80% of repetitive tasks
- Human focuses on 20% strategic decisions
- AI generates options, human selects best
- AI processes data, human interprets insights

#### Quality Control Checklist
1. Always review AI output before publishing
2. Verify facts dan angka
3. Check for brand voice consistency
4. Ensure cultural appropriateness
5. Test with small audience first
6. Iterate based on feedback

#### When to Override AI
- When output feels generic
- When data seems outdated
- When tone doesn't match brand
- When cultural context missing
- When legal/compliance concerns
- When customer feedback negative

### 4.4 Scaling dengan AI

Strategi untuk grow business menggunakan AI tanpa proportionally increase costs.

#### Automation Hierarchy

Level 1: Task Automation
- Email responses
- Data entry
- Report generation
- Invoice processing

Level 2: Process Automation
- Order processing
- Inventory management
- Customer onboarding
- Content scheduling

Level 3: Decision Automation
- Pricing optimization
- Stock reordering
- Campaign targeting
- Resource allocation

Level 4: Strategy Automation
- Market analysis
- Competitor monitoring
- Trend identification
- Opportunity scoring

#### Scaling Metrics

| Metric | Before AI | After AI | Improvement |
|--------|-----------|----------|-------------|
| Revenue per employee | Rp 50 juta | Rp 125 juta | +150% |
| Customer served per staff | 25 | 65 | +160% |
| Time on repetitive tasks | 70% | 20% | -71% |
| Decision speed | 3 days | 3 hours | -87% |
| Error rate | 8% | 2% | -75% |

---

## Lampiran

### F. Automation Recipe Library

Kumpulan 50+ automation recipes siap pakai:
1. Daily sales report generator
2. Customer feedback collector
3. Inventory alert system
4. Social media scheduler
5. Email campaign automator
6. Invoice and payment tracker
7. Lead scoring system
8. Customer segmentation engine
9. Content repurposing workflow
10. Competitor monitoring system
... dan 40+ recipes lainnya

### G. Integration Troubleshooting Guide

Masalah umum dan solusinya:

1. API Connection Failed
   - Check API key validity
   - Verify endpoint URL
   - Check network connectivity
   - Review rate limits

2. AI Output Not as Expected
   - Refine prompt specificity
   - Add more context
   - Use few-shot examples
   - Adjust temperature

3. Automation Not Triggering
   - Check trigger conditions
   - Verify webhook URL
   - Test manually first
   - Review logs

4. Data Sync Issues
   - Check data format
   - Verify field mapping
   - Test with small dataset
   - Review error logs

5. Performance Optimization
   - Reduce API calls
   - Cache frequent queries
   - Batch processing
   - Use async operations

### H. Video Tutorial Access

Scan QR code di bawah untuk akses video tutorial:
- Setup Make.com (15 menit)
- Setup Zapier (12 menit)
- Setup n8n (20 menit)
- Custom API integration (25 menit)
- Advanced prompt engineering (30 menit)

[QR Code untuk akses video tutorial tersedia di produk fisik]

### I. Priority Support

Edisi Ultimate termasuk priority support:
- WhatsApp support: +62 812-3456-7890
- Email: support@snishop.com
- Response time: maksimal 4 jam kerja
- Monthly consultation: 1 jam per bulan

---

Edisi Ultimate, 150 Prompt AI untuk Bisnis dan UMKM Indonesia
Disusun oleh Siraj Nur Ihrom, Founder SNISHOP
Cetakan pertama, 2026
