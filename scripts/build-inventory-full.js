#!/usr/bin/env node
/**
 * Build expanded Product 53 Inventory Management manuscript
 * Adds Bab 3-5 and expands Bab 6-16 to reach 15,000+ words
 */
const fs = require('fs');
const path = require('path');

const manuscriptPath = path.join(__dirname, '..', 'drafts', 'panduan-lengkap-inventory-management-umkm.md');

// Read existing content to preserve Bab 1-2
let existing = fs.readFileSync(manuscriptPath, 'utf8');

// Find where BAGIAN 2 starts (after Bab 2)
const bagian2Start = existing.indexOf('# BAGIAN 2: IMPLEMENTASI INVENTORY');
if (bagian2Start === -1) {
  console.error('Could not find BAGIAN 2 marker');
  process.exit(1);
}

// Keep everything before BAGIAN 2 (Bab 1-2 + checklist)
const part1Base = existing.substring(0, bagian2Start).trimEnd();

// Bab 3-5 content (missing from current manuscript)
const bab3to5 = `

---

## Bab 3: Strategi Inventory untuk UMKM

![Strategi Inventory](../assets/im-ch3-strategi.png)

### 3.1 Mengapa Strategi Itu Penting

Punya sistem inventory tanpa strategi ibarat punya mobil tanpa tahu tujuan. Anda bisa mengemudi seharian, tapi tidak akan sampai ke mana-mana. Strategi inventory menjawab pertanyaan fundamental: berapa banyak stok yang harus Anda simpan, kapan harus order, dan bagaimana merespons fluktuasi permintaan.

Untuk UMKM di Indonesia, strategi inventory punya tantangan khusus. Permintaan bisa melonjak drastis saat musim Lebaran atau hari raya lainnya. Supply chain sering tidak reliable, dengan lead time yang bisa berubah tiba-tiba. Dan modal kerja terbatas, jadi setiap rupiah yang tertanam di stok harus benar-benar produktif.

### 3.2 Just In Time (JIT) untuk UMKM

Just In Time adalah filosofi inventory di mana barang datang tepat saat dibutuhkan, bukan sebelum atau sesudah. Toyota mempopulerkan metode ini di industri otomotif, tapi prinsipnya bisa diadaptasi untuk UMKM.

**Keuntungan JIT:**
- Modal kerja lebih efisien karena uang tidak tertahan di stok
- Ruang gudang lebih hemat
- Risiko barang kedaluwarsa atau usang lebih kecil
- Masalah kualitas terdeteksi lebih cepat

**Tantangan JIT di Indonesia:**
- Supplier tidak selalu reliable dalam hal waktu pengiriman
- Infrastruktur logistik belum merata di semua daerah
- Risiko stockout lebih tinggi jika supplier gagal kirim
- Membutuhkan hubungan yang kuat dengan supplier

**Cara menerapkan JIT untuk UMKM:**
1. Mulai dengan item kategori A yang nilainya tinggi
2. Bangun hubungan dekat dengan 2-3 supplier utama
3. Negosiasi waktu pengiriman yang konsisten
4. Siapkan buffer stock untuk 3-5 hari pertama
5. Monitor dan evaluasi setiap bulan

Contoh nyata: Bu Rina punya bisnis catering di Bandung. Dulu ia belanja bahan baku seminggu sekali dalam jumlah besar. Banyak yang terbuang karena tidak terpakai semua. Setelah menerapkan JIT, ia belanja setiap 2-3 hari sesuai order yang masuk. Waste berkurang 60%, dan ia menghemat Rp 3 juta per bulan.

### 3.3 Economic Order Quantity (EOQ)

EOQ membantu menjawab pertanyaan: berapa banyak yang harus saya order setiap kali?

Formula EOQ:
EOQ = akar((2 x D x S) / H)

Dimana:
- D = Demand tahunan (unit per tahun)
- S = Biaya per order (biaya admin, ongkir, dll)
- H = Biaya simpan per unit per tahun

Contoh perhitungan:
- Toko menjual 5.000 unit/tahun
- Biaya per order: Rp 100.000
- Biaya simpan: Rp 5.000/unit/tahun

EOQ = akar((2 x 5000 x 100.000) / 5.000) = akar(200.000) = 447 unit

Artinya, setiap kali order, toko sebaiknya pesan sekitar 450 unit. Order lebih kecil berarti biaya order lebih sering. Order lebih besar berarti biaya simpan lebih tinggi. EOQ menemukan titik optimalnya.

**Penyesuaian untuk UMKM:**
Formula EOQ mengasumsikan demand konstan, yang jarang terjadi di dunia nyata. Untuk UMKM, tambahkan faktor penyesuaian:
- Jika demand fluktuatif, gunakan rata-rata 6-12 bulan terakhir
- Jika ada diskon quantity, bandingkan total cost EOQ vs total cost dengan diskon
- Jika modal terbatas, sesuaikan EOQ ke bawah dan terima biaya order yang sedikit lebih tinggi

### 3.4 Safety Stock: Asuransi Terhadap Ketidakpastian

Safety stock adalah buffer yang melindungi Anda dari ketidakpastian. Ada dua sumber ketidakpastian utama: fluktuasi demand dan keterlambatan supplier.

Formula safety stock:
Safety Stock = (Max Daily Usage x Max Lead Time) - (Average Daily Usage x Average Lead Time)

Contoh:
- Rata-rata penjualan: 20 unit/hari, maksimum: 35 unit/hari
- Rata-rata lead time: 5 hari, maksimum: 8 hari
- Safety Stock = (35 x 8) - (20 x 5) = 280 - 100 = 180 unit

Safety stock 180 unit berarti Anda selalu punya buffer untuk menghadapi lonjakan demand atau keterlambatan supplier.

**Tips menentukan safety stock untuk UMKM:**
- Untuk item kategori A: safety stock lebih tinggi (cover 7-10 hari)
- Untuk item kategori B: safety stock sedang (cover 4-7 hari)
- Untuk item kategori C: safety stock rendah (cover 2-3 hari) atau bahkan nol
- Review safety stock setiap bulan berdasarkan data aktual
- Musiman? Tambah safety stock 30-50% menjelang peak season

### 3.5 Demand Forecasting Sederhana

Anda tidak perlu algoritma machine learning untuk meramal demand. Metode sederhana pun sudah sangat membantu:

**Moving Average:**
Ambil rata-rata penjualan 3-6 bulan terakhir sebagai prediksi bulan depan. Simple tapi efektif untuk produk dengan demand stabil.

Contoh: Penjualan 3 bulan terakhir: 500, 550, 520 unit. Prediksi bulan depan = (500 + 550 + 520) / 3 = 523 unit.

**Trend Analysis:**
Jika penjualan konsisten naik atau turun, tambahkan faktor trend. Hitung persentase perubahan per bulan, lalu aplikasikan ke forecast.

Contoh: Penjualan naik rata-rata 5% per bulan. Bulan ini 520 unit. Prediksi bulan depan = 520 x 1.05 = 546 unit.

**Seasonal Adjustment:**
Untuk produk musiman, kalikan forecast dengan faktor musiman. Faktor musiman dihitung dari rasio penjualan bulan tersebut terhadap rata-rata tahunan.

Contoh: Faktor musiman Ramadhan untuk kue kering = 2.5x. Forecast normal 200 unit/bulan. Menjelang Ramadhan: 200 x 2.5 = 500 unit.

**Kombinasi Metode:**
Untuk hasil terbaik, gabungkan ketiga metode: mulai dari moving average, tambahkan trend, lalu sesuaikan dengan faktor musiman. Ini sudah cukup akurat untuk kebanyakan UMKM.

### 3.6 Strategi Inventory Musiman

Indonesia punya kalender musiman yang unik. Ramadan dan Lebaran memicu lonjakan permintaan untuk makanan, pakaian, dan perlengkapan ibadah. Tahun ajaran baru meningkatkan penjualan seragam dan alat tulis. Akhir tahun membawa gelombang belanja Natal dan tahun baru.

**Strategi menghadapi peak season:**
1. Mulai persiapan 2-3 bulan sebelum peak season
2. Negotiasi dengan supplier untuk kapasitas tambahan
3. Bangun safety stock bertahap (jangan sekaligus)
4. Siapkan rencana clearance sale untuk sisa stok setelah peak
5. Evaluasi hasil setelah season selesai

**Strategi menghadapi low season:**
1. Kurangi order ke supplier
2. Gunakan waktu untuk stock opname dan perapihan gudang
3. Jalankan promo untuk mengurangi overstock
4. Training tim untuk persiapan peak season berikutnya
5. Evaluasi dan perbaiki proses yang bermasalah

### 3.7 Checklist Strategi Inventory

- [ ] Saya sudah tentukan metode yang cocok (JIT, EOQ, atau kombinasi)
- [ ] Saya hitung safety stock untuk setiap item kategori A
- [ ] Saya punya forecast demand untuk 3 bulan ke depan
- [ ] Saya sudah identifikasi pola musiman di bisnis saya
- [ ] Saya punya rencana untuk peak season dan low season
- [ ] Saya review dan update strategi setiap bulan

---

## Bab 4: Memilih Software Inventory

![Memilih Software](../assets/im-ch4-software.png)

### 4.1 Kriteria Pemilihan Software

Memilih software inventory adalah keputusan penting yang akan mempengaruhi operasional bisnis Anda bertahun-tahun ke depan. Salah pilih bisa berarti migrasi yang mahal dan mengganggu. Berikut kriteria yang perlu Anda pertimbangkan:

**1. Kesesuaian dengan Skala Bisnis**
Software untuk toko single-outlet berbeda dengan distributor multi-gudang. Pilih yang sesuai dengan skala Anda sekarang, tapi juga bisa tumbuh bersama bisnis.

**2. Kemudahan Penggunaan**
Tim Anda harus bisa menggunakan software ini tanpa training berhari-hari. Interface yang intuitif mengadopsi lebih cepat dan mengurangi error.

**3. Fitur Integrasi**
Software inventory tidak berdiri sendiri. Ia harus bisa terhubung dengan POS, accounting, marketplace, dan tools lain yang Anda gunakan.

**4. Harga dan Value**
Jangan hanya lihat harga bulanan. Hitung total cost of ownership: biaya setup, training, support, dan biaya upgrade. Bandingkan dengan value yang Anda dapatkan.

**5. Support dan Komunitas**
Ketika ada masalah, apakah ada support yang responsif? Apakah ada komunitas user yang bisa membantu? Untuk UMKM Indonesia, support dalam Bahasa Indonesia adalah nilai tambah besar.

**6. Mobile Access**
Banyak pemilik UMKM yang perlu cek stok dari HP. Pastikan software punya mobile app atau minimal responsive web.

### 4.2 Perbandingan Software Populer di Indonesia

**Jurnal Inventory (by Mekari)**
- Harga: mulai Rp 299.000/bulan
- Kelebihan: integrasi accounting built-in, support Bahasa Indonesia, fitur lengkap
- Kekurangan: harga relatif tinggi untuk UMKM mikro
- Cocok untuk: bisnis yang butuh inventory plus accounting terintegrasi
- Website: jurnal.id

**Accurate Online**
- Harga: mulai Rp 215.000/bulan
- Kelebihan: fitur accounting kuat, inventory multi-gudang, populer di Indonesia
- Kekurangan: UI agak dated, learning curve lebih curam
- Cocok untuk: bisnis yang mengutamakan accounting dengan inventory sebagai pelengkap
- Website: accurate.id

**Zoho Inventory**
- Harga: mulai dari gratis (250 orders/bulan), paid mulai Rp 150.000/bulan
- Kelebihan: gratis untuk skala kecil, integrasi luas, mobile app bagus
- Kekurangan: server luar negeri (latency kadang terasa), support English-first
- Cocok untuk: bisnis online yang jual di marketplace
- Website: zoho.com/inventory

**Ginee**
- Harga: mulai dari gratis, paid mulai Rp 300.000/bulan
- Kelebihan: multi-channel selling specialist, integrasi marketplace kuat
- Kekurangan: fitur accounting terbatas, fokus di e-commerce
- Cocok untuk: penjual multi-channel di Tokopedia, Shopee, Lazada, TikTok Shop
- Website: ginee.com

**Sortly**
- Harga: mulai dari gratis (100 items), paid mulai Rp 100.000/bulan
- Kelebihan: sangat mudah digunakan, visual-first, QR code built-in
- Kekurangan: fitur terbatas untuk bisnis kompleks, tidak ada accounting
- Cocok untuk: bisnis kecil yang butuh tracking sederhana
- Website: sortly.com

**inFlow Inventory**
- Harga: mulai Rp 200.000/bulan
- Kelebihan: fitur lengkap, barcode scanning, multi-warehouse
- Kekurangan: kurang populer di Indonesia, support English
- Cocok untuk: bisnis manufaktur kecil yang butuh BOM (Bill of Materials)
- Website: inflowinventory.com

### 4.3 Cara Evaluasi dan Memilih

**Langkah 1: Buat Requirement List**
Tuliskan semua fitur yang Anda butuhkan. Prioritaskan menjadi must-have, nice-to-have, dan future-need.

**Langkah 2: Shortlist 3 Software**
Berdasarkan requirement dan budget, pilih 3 software untuk dievaluasi lebih dalam.

**Langkah 3: Free Trial**
Daftar free trial untuk ketiganya. Gunakan data bisnis Anda sendiri untuk testing. Jangan hanya lihat demo dari sales.

**Langkah 4: Test dengan Tim**
Libatkan 2-3 anggota tim yang akan menggunakan software sehari-hari. Minta feedback mereka tentang kemudahan penggunaan.

**Langkah 5: Hitung Total Cost**
Bandingkan total cost 12 bulan pertama, termasuk setup, training, dan biaya tersembunyi.

**Langkah 6: Putuskan**
Pilih yang memberikan value terbaik, bukan yang paling murah atau paling mahal.

### 4.4 Tips Negosiasi Harga

- Tanyakan diskon tahunan (biasanya 15-20% lebih murah dari bulanan)
- Gunakan kode referral (lihat daftar di akhir buku ini)
- Negosiasi paket custom jika Anda butuh fitur spesifik
- Tanyakan diskon untuk upgrade dari paket lebih rendah
- Bandingkan penawaran dari minimal 3 vendor

---

## Bab 5: Setup dan Konfigurasi

![Setup dan Konfigurasi](../assets/im-ch5-setup.png)

### 5.1 Persiapan Data

Sebelum memasukkan data ke software, Anda perlu menyiapkan dan membersihkan data terlebih dahulu. Ini langkah yang sering diremehkan tapi menentukan keberhasilan implementasi.

**Data yang perlu disiapkan:**
1. Daftar semua produk (nama, SKU, kategori, harga, supplier)
2. Stok awal setiap produk di setiap lokasi
3. Daftar supplier (nama, kontak, terms, lead time)
4. Daftar lokasi penyimpanan (gudang, toko, rak)
5. Data penjualan historis (minimal 6 bulan terakhir)

**Membersihkan data:**
- Hapus produk yang sudah tidak dijual
- Standarisasi nama produk (format konsisten)
- Pastikan tidak ada SKU duplikat
- Verifikasi harga dan cost dengan invoice terbaru
- Kelompokkan produk ke kategori yang jelas

### 5.2 Setup Struktur Gudang

Definisikan struktur gudang Anda di software:

**Level 1: Warehouse/Gudang**
Setiap lokasi fisik adalah satu warehouse. Toko di Jakarta = warehouse 1. Gudang di Bekasi = warehouse 2.

**Level 2: Zone/Zona**
Dalam satu gudang, bagi menjadi zona-zona. Zona A untuk fast-moving items, Zona B untuk medium, Zona C untuk slow-moving.

**Level 3: Rack/Rak**
Setiap zona punya rak-rak. Label setiap rak dengan kode unik: A-01, A-02, B-01, dst.

**Level 4: Bin/Laci**
Dalam satu rak, ada beberapa bin atau laci. Ini level paling detail. A-01-1, A-01-2, dst.

Struktur 4 level ini memberikan presisi tinggi untuk menemukan barang. Ketika tim picking mendapat order, mereka tahu persis di mana harus mengambil barang.

### 5.3 Import Data ke Software

Kebanyakan software inventory mendukung import via CSV atau Excel. Siapkan file import dengan kolom-kolom berikut:

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| SKU | Kode unik produk | KEMEJA-PUTIH-S |
| Nama | Nama produk | Kemeja Putih Ukuran S |
| Kategori | Kelompok produk | Pakaian Pria |
| Harga Jual | Harga per unit | 150000 |
| Harga Beli | Cost per unit | 80000 |
| Stok Awal | Jumlah stok saat ini | 25 |
| Lokasi | Kode lokasi | A-01-3 |
| Supplier | Nama supplier | PT Tekstil Jaya |
| Barcode | Kode barcode | 8991234567890 |

Tips import:
- Import dalam batch kecil dulu (10-20 item) untuk test
- Verifikasi data import sebelum commit
- Backup data lama sebelum import massal
- Document mapping kolom dari format lama ke baru

### 5.4 Konfigurasi Awal

Setelah data masuk, lakukan konfigurasi berikut:

**1. Setup User dan Role**
Siapa yang bisa edit produk? Siapa yang hanya bisa lihat stok? Siapa yang bisa approve purchase order? Definisikan role dan assign ke user.

**2. Setup Reorder Point**
Untuk setiap item kategori A, set reorder point berdasarkan perhitungan di Bab 3. Item B dan C bisa di-set nanti.

**3. Setup Notifikasi**
Aktifkan notifikasi untuk: low stock, overstock, barang mendekati expired, dan approval needed.

**4. Setup Laporan**
Konfigurasi laporan yang akan Anda gunakan harian/mingguan/bulanan. Custom report jika perlu.

**5. Test End-to-End**
Buat order test, lakukan stock movement, generate report. Pastikan semuanya berjalan sesuai harapan.

### 5.5 Training Tim

Investasi waktu untuk training tim di awal akan menghemat waktu berlipat ganda di kemudian hari.

**Agenda training dasar (4 jam):**
- Sesi 1: Navigasi dan fitur dasar (1 jam)
- Sesi 2: Input data dan stock movement (1 jam)
- Sesi 3: Membaca laporan dan notifikasi (1 jam)
- Sesi 4: Hands-on practice dengan kasus nyata (1 jam)

**Agenda training lanjutan (4 jam):**
- Sesi 1: Purchase order dan supplier management (1 jam)
- Sesi 2: Stock opname dan adjustment (1 jam)
- Sesi 3: Integrasi dengan POS/marketplace (1 jam)
- Sesi 4: Advanced reporting dan troubleshooting (1 jam)

### 5.6 Go Live Checklist

Sebelum resmi menggunakan sistem baru:

- [ ] Semua data produk sudah di-import dan diverifikasi
- [ ] Stok awal sudah sesuai dengan fisik
- [ ] User dan role sudah di-setup
- [ ] Reorder point sudah dikonfigurasi untuk item A
- [ ] Notifikasi sudah aktif
- [ ] Laporan sudah di-generate dan diverifikasi
- [ ] Tim sudah di-training
- [ ] Prosedur backup data sudah ditetapkan
- [ ] Support dari vendor sudah dikonfirmasi
- [ ] Rencana rollback disiapkan jika ada masalah
`;

// Expanded Bab 6-16 content
const bab6to16 = `

# BAGIAN 2: IMPLEMENTASI INVENTORY

---

## Bab 6: Manajemen Stok dan SKU

![Stok Management](../assets/im-ch6-stok.png)

### 6.1 Apa Itu SKU dan Mengapa Penting

SKU (Stock Keeping Unit) adalah kode unik yang mengidentifikasi setiap produk dalam inventory Anda. SKU bukan sekadar label, tapi fondasi dari seluruh sistem inventory. Tanpa SKU yang benar, Anda tidak bisa tracking stok, menganalisis penjualan, atau mengelola reorder dengan efektif.

Bayangkan sebuah toko sepatu. Mereka punya sepatu yang sama dalam warna hitam, coklat, dan putih, masing-masing dalam ukuran 38 sampai 44. Itu berarti 3 x 7 = 21 varian. Setiap varian butuh SKU sendiri karena masing-masing memiliki stok yang berbeda.

### 6.2 Merancang SKU Naming Convention

Format SKU yang baik mengikuti prinsip ini:

**Prinsip 1: Deskriptif tapi Singkat**
SKU harus memberi petunjuk tentang produk tanpa terlalu panjang. Format yang umum: KATEGORI-VARIAN-UKURAN.

Contoh baik:
- KEMEJA-PTH-S (Kemeja Putih Small)
- SEPATU-HITAM-42 (Sepatu Hitam ukuran 42)
- KOPI-ARAB-250G (Kopi Arabica 250 gram)

Contoh buruk:
- KMJ-PTH-S-2026-001 (terlalu panjang)
- PRODUCT-12345 (tidak deskriptif)
- SEPATU_HITAM@42! (karakter spesial bermasalah)

**Prinsip 2: Konsisten**
Semua SKU mengikuti pola yang sama. Jika Anda mulai dengan KATEGORI-VARIAN-UKURAN, semua produk harus ikut format ini.

**Prinsip 3: Scalable**
Pikirkan pertumbuhan bisnis. Jika sekarang punya 100 SKU, mungkin 2 tahun lagi jadi 1.000. Format harus mengakomodasi pertumbuhan.

**Prinsip 4: Hindari Karakter Bermasalah**
Hanya gunakan huruf besar, angka, dan dash (-). Hindari spasi, underscore, titik, atau karakter spesial lainnya karena bisa bermasalah di sistem barcode atau database.

### 6.3 Sistem Barcode

Barcode mempercepat proses inventory secara signifikan. Scan barcode jauh lebih cepat dan akurat dibanding mengetik manual.

**Jenis barcode yang umum:**
- UPC-A: 12 digit, standar retail internasional
- EAN-13: 13 digit, standar di Indonesia dan Eropa
- Code 128: bisa encode huruf dan angka, fleksibel
- QR Code: 2 dimensi, bisa menyimpan lebih banyak data

**Implementasi barcode untuk UMKM:**
1. Beli printer barcode thermal (mulai Rp 500.000)
2. Beli scanner barcode USB (mulai Rp 150.000)
3. Generate barcode dari SKU menggunakan software atau generator online
4. Print dan tempel di setiap produk atau rak
5. Hubungkan scanner dengan software inventory

Dengan barcode, proses stock opname yang biasanya memakan waktu 2 hari bisa selesai dalam 4 jam. Picking accuracy naik dari 95% ke 99%+.

### 6.4 Strategi Manajemen Stok

**FIFO (First In, First Out)**
Barang yang pertama masuk gudang, pertama yang keluar. Ini strategi default untuk sebagian besar bisnis, terutama yang punya produk perishable.

Implementasi fisik: simpan barang baru di belakang rak, ambil barang dari depan. Setiap kali stok baru datang, letakkan di belakang stok yang sudah ada.

Implementasi sistem: software akan menandai batch mana yang masuk lebih dulu dan mengarahkan picking ke batch tersebut.

**LIFO (Last In, First Out)**
Barang terakhir masuk, pertama keluar. Jarang digunakan untuk fisik, tapi kadang dipakai untuk valuation (lihat Bab 11). Tidak direkomendasikan untuk produk perishable.

**Average Cost**
Setiap unit dianggap memiliki cost yang sama, yaitu rata-rata dari semua unit yang tersedia. Simple dan cocok untuk produk yang homogen dimana perbedaan batch tidak signifikan.

### 6.5 Stock Opname

Stock opname adalah proses menghitung fisik stok dan membandingkannya dengan catatan sistem. Ini penting untuk memastikan akurasi data.

**Jenis stock opname:**

**Full Stock Opname:** Hitung semua produk sekaligus. Biasanya dilakukan setahun sekali, seringkali di akhir tahun fiskal. Membutuhkan waktu dan sumber daya besar, kadang perlu tutup toko/gudang.

**Cycle Counting:** Hitung sebagian produk setiap hari atau minggu. Jadwal dibuat bergilir sehingga semua produk terhitung dalam periode tertentu (misalnya 3 bulan). Keunggulan: tidak perlu tutup operasi, error terdeteksi lebih cepat.

**Spot Check:** Hitung random beberapa item untuk verifikasi cepat. Tidak terjadwal, dilakukan sebagai quality control.

**Proses stock opname:**

Langkah 1: Persiapan
- Cetak stock count sheet dari sistem
- Siapkan alat: pulpen, kalkulator, scanner barcode
- Assign tim dan bagi zona
- Bekukan pergerakan stok (jika memungkinkan)

Langkah 2: Penghitungan
- Hitung fisik per lokasi
- Catat di count sheet atau scan barcode
- Tandai item yang rusak atau tidak teridentifikasi
- Hitung ulang jika ada keraguan

Langkah 3: Rekonsiliasi
- Bandingkan hasil hitung dengan sistem
- Hitung variance (selisih)
- Investigasi variance yang signifikan
- Buat adjustment di sistem

Langkah 4: Reporting
- Buat laporan stock opname
- Analisis penyebab variance
- Rekomendasikan tindakan perbaikan
- Presentasikan ke manajemen

### 6.6 Inventory Accuracy

Akurasi inventory diukur dengan formula:
Akurasi = (Jumlah item yang cocok / Total item yang dihitung) x 100%

Target minimal: 98%. Di bawah itu, ada masalah serius yang perlu ditangani.

Penyebab umum inaccuracy:
- Human error saat input data
- Pencurian atau kehilangan
- Barang rusak tidak dicatat
- Salah kirim atau salah terima
- Sistem tidak di-update setelah pergerakan stok

Cara meningkatkan akurasi:
- Cycle counting rutin
- Barcode scanning (kurangi manual entry)
- Training tim tentang prosedur
- Audit random setiap minggu
- Investigasi setiap discrepancy

---

## Bab 7: Inventory Tracking dan Monitoring

![Inventory Tracking](../assets/im-ch7-tracking.png)

### 7.1 Real-Time Tracking

Real-time tracking berarti Anda tahu persis berapa stok yang tersedia setiap saat. Setiap penjualan, penerimaan, atau adjustment langsung ter-reflection di sistem.

Manfaat real-time tracking:
- Tidak ada lagi "maaf barang habis" ke pelanggan
- Keputusan reorder berbasis data aktual, bukan perkiraan
- Multi-channel selling tanpa risiko overselling
- Visibility penuh untuk seluruh tim

Cara mencapai real-time tracking:
1. Gunakan software inventory yang terintegrasi dengan POS
2. Pastikan setiap transaksi meng-update stok secara otomatis
3. Untuk multi-channel, gunakan tools sync seperti Ginee atau BigSeller
4. Review sync log secara berkala untuk memastikan tidak ada error

### 7.2 Batch dan Lot Tracking

Setiap batch produksi atau pembelian mendapat nomor identifikasi unik. Batch tracking memungkinkan Anda melacak:

- Kapan barang diproduksi atau dibeli
- Dari supplier mana barang berasal
- Kapan barang kedaluwarsa
- Ke pelanggan mana barang dikirim

Batch tracking sangat penting untuk:
- Produk makanan dan minuman (recall jika ada masalah)
- Produk farmasi dan kosmetik (regulasi pemerintah)
- Produk elektronik (warranty tracking)
- Bisnis manufaktur (quality control per batch)

Implementasi: Setiap kali menerima barang, assign nomor batch. Catat tanggal produksi, tanggal expired, dan supplier. Saat mengirim, catat batch mana yang dikirim ke pelanggan mana.

### 7.3 Serial Number Tracking

Untuk produk bernilai tinggi atau yang butuh warranty, track setiap unit individual dengan serial number unik.

Contoh: Toko elektronik menjual laptop. Setiap laptop punya serial number berbeda. Dengan serial number tracking, toko bisa tahu:
- Unit mana yang sudah terjual dan ke siapa
- Unit mana yang masih di stok
- Kapan warranty berakhir
- Apakah unit pernah diretur atau diperbaiki

Serial number tracking juga membantu mencegah penipuan dan memudahkan proses klaim garansi.

### 7.4 Expiry Date Management

Untuk bisnis yang menjual produk perishable (makanan, minuman, kosmetik, obat), expiry date management adalah masalah hidup-mati.

**Sistem FEFO (First Expired, First Out):**
Software mengarahkan picking ke batch yang paling dekat dengan tanggal expired. Ini memastikan barang yang mendekati expired terjual dulu, mengurangi waste.

**Alert otomatis:**
- H-90 hari: notifikasi ke tim sales untuk promo
- H-60 hari: notifikasi ke manajer untuk keputusan (discount, return ke supplier, atau write-off)
- H-30 hari: auto-remove dari katalog online, pindah ke area clearance
- H-7 hari: write-off atau disposal

**Dashboard expiry:**
Buat dashboard yang menunjukkan:
- Total nilai inventory yang akan expired dalam 30/60/90 hari
- Breakdown per kategori produk
- Trend: apakah waste meningkat atau menurun

### 7.5 Multi-Location Tracking

Ketika bisnis Anda berkembang ke beberapa lokasi, tracking inventory menjadi lebih kompleks. Tantangan utama:

**Stock Transfer:** Memindahkan barang dari gudang A ke toko B harus tercatat dengan benar. Buat prosedur: request transfer, approve, pick, ship, receive, confirm. Setiap langkah di-update di sistem.

**Visibility:** Anda perlu melihat total stok di semua lokasi sekaligus, tapi juga detail per lokasi. Dashboard harus memberikan kedua view ini.

**Allocation:** Ketika ada order besar, dari lokasi mana barang dikirim? Algoritma sederhana: kirim dari lokasi dengan stok terbanyak yang bisa fulfill order, atau yang paling dekat dengan pelanggan.

### 7.6 Inventory Alerts

Alert yang efektif mencegah masalah sebelum terjadi:

**Low Stock Alert:**
Trigger: stok di bawah reorder point
Action: notifikasi ke tim purchasing untuk segera order
Escalation: jika tidak di-respon dalam 24 jam, notifikasi ke manajer

**Overstock Alert:**
Trigger: stok di atas max level atau tidak ada penjualan dalam 60 hari
Action: stop ordering, jalankan promo, pertimbangkan return ke supplier

**Expiry Alert:**
Trigger: tersisa kurang dari 90 hari sebelum expired
Action: mulai promo clearance, hubungi supplier untuk return

**Dead Stock Alert:**
Trigger: tidak ada pergerakan dalam 90 hari
Action: review apakah masih layak dijual, discount besar, atau write-off

### 7.7 Monitoring KPIs

**Inventory Turnover Ratio:**
Formula: COGS / Average Inventory Value
Target retail: 6-12x per tahun
Artinya: inventory Anda "berputar" 6-12 kali setahun. Semakin tinggi, semakin efisien.

**Days Sales of Inventory (DSI):**
Formula: (Average Inventory / COGS) x 365
Target: kurang dari 60 hari
Artinya: rata-rata berapa hari barang berada di gudang sebelum terjual.

**Stockout Rate:**
Formula: (Jumlah stockout incidents / Total permintaan) x 100%
Target: kurang dari 2%
Artinya: seberapa sering pelanggan ingin membeli tapi barang tidak tersedia.

**Fill Rate:**
Formula: (Jumlah order yang ter-fulfill lengkap / Total order) x 100%
Target: lebih dari 95%
Artinya: seberapa sering Anda bisa memenuhi order pelanggan secara lengkap tanpa ada item yang kosong.

**Carrying Cost:**
Formula: Total biaya penyimpanan / Total nilai inventory x 100%
Target: kurang dari 25%
Termasuk: sewa gudang, listrik, asuransi, gaji staf gudang, depresiasi, opportunity cost.

---

## Bab 8: Reorder Point dan Safety Stock

![Reorder Point](../assets/im-ch8-reorder.png)

### 8.1 Reorder Point (ROP)

Reorder point adalah level stok yang memicu pembelian baru. Ketika stok turun ke titik ini, saatnya order lagi.

Formula dasar:
ROP = (Average Daily Usage x Lead Time) + Safety Stock

Contoh konkret:
- Toko menjual rata-rata 30 unit/hari
- Supplier butuh 7 hari untuk mengirim
- Safety stock: 100 unit
- ROP = (30 x 7) + 100 = 310 unit

Artinya: ketika stok turun ke 310 unit, segera order ke supplier. Stok 310 unit cukup untuk menutupi penjualan selama 7 hari tunggu (30 x 7 = 210 unit) ditambah buffer keamanan (100 unit).

### 8.2 Menghitung Safety Stock

Safety stock melindungi dari dua ketidakpastian: demand lebih tinggi dari perkiraan, dan supplier lebih lambat dari janji.

Formula:
Safety Stock = (Max Daily Usage x Max Lead Time) - (Average Daily Usage x Average Lead Time)

Contoh:
- Average daily usage: 30, Max: 45
- Average lead time: 7 hari, Max: 10 hari
- Safety Stock = (45 x 10) - (30 x 7) = 450 - 210 = 240 unit

Safety stock 240 unit memberikan buffer yang cukup bahkan dalam skenario terburuk.

**Penyesuaian berdasarkan service level:**
- 90% service level: safety stock x 1.0
- 95% service level: safety stock x 1.3
- 99% service level: safety stock x 1.8

Semakin tinggi service level yang diinginkan, semakin besar safety stock yang dibutuhkan, dan semakin besar modal yang tertahan.

### 8.3 Economic Order Quantity (EOQ)

EOQ menjawab: berapa banyak yang harus di-order setiap kali?

Formula: EOQ = akar((2 x D x S) / H)

Dimana:
- D = Annual demand (kebutuhan tahunan)
- S = Ordering cost (biaya per order)
- H = Holding cost per unit per tahun

Contoh:
- D = 12.000 unit/tahun (1.000/bulan)
- S = Rp 150.000 per order
- H = Rp 3.000 per unit per tahun
- EOQ = akar((2 x 12.000 x 150.000) / 3.000) = akar(1.200.000) = 1.095 unit

Artinya: setiap kali order, sebaiknya pesan sekitar 1.100 unit. Ini meminimalkan total biaya (ordering + holding).

### 8.4 Min-Max System

Sistem sederhana yang cocok untuk UMKM:

**Min Level = Reorder Point**
Ketika stok turun ke level ini, order baru diperlukan.

**Max Level = Min Level + EOQ**
Ini adalah level stok maksimum yang diinginkan setelah order datang.

Contoh:
- Min Level (ROP): 310 unit
- EOQ: 500 unit
- Max Level: 310 + 500 = 810 unit

Ketika stok turun ke 310, order 500 unit. Setelah order datang, stok naik ke 810. Stok akan turun perlahan sampai kembali ke 310, lalu order lagi. Siklus berulang.

### 8.5 ABC Analysis untuk Reorder

Tidak semua item perlu perhatian yang sama:

**Category A (High Value, 20% items, 80% value):**
- Review: setiap hari
- Safety stock: tinggi (cover 7-10 hari)
- Reorder: sering, quantity kecil
- Supplier: multiple sources

**Category B (Medium Value, 30% items, 15% value):**
- Review: setiap minggu
- Safety stock: sedang (cover 4-7 hari)
- Reorder: periodik, quantity moderate
- Supplier: 1-2 sources

**Category C (Low Value, 50% items, 5% value):**
- Review: setiap bulan
- Safety stock: rendah (cover 2-3 hari)
- Reorder: jarang, quantity besar (sekalian hemat ongkir)
- Supplier: 1 source cukup

### 8.6 Automated Reordering

Software inventory modern bisa otomatis membuat purchase order ketika stok mencapai reorder point.

Setup automated reordering:
1. Pastikan ROP sudah benar untuk setiap item
2. Set auto-order enabled di software
3. Configure supplier untuk setiap item
4. Set approval workflow (misalnya: order di bawah Rp 5 juta auto-approve, di atas perlu approval manajer)
5. Test dengan small orders dulu
6. Monitor dan adjust

Manfaat automated reordering:
- Tidak ada lagi human error atau lupa order
- Reorder timing konsisten dan optimal
- Tim purchasing bisa fokus ke negosiasi dan sourcing
- Stockout berkurang drastis

---

## Bab 9: Warehouse Management

![Warehouse Management](../assets/im-ch9-warehouse.png)

### 9.1 Warehouse Layout Design

Layout gudang yang baik menghemat waktu picking, mengurangi error, dan memaksimalkan ruang.

**Prinsip 1: Flow**
Alur barang harus satu arah: Receiving, Storage, Picking, Packing, Shipping. Hindari alur bolak-balik yang menyebabkan bottleneck.

**Prinsip 2: Accessibility**
Fast-moving items (kategori A) ditaruh di area yang paling mudah dijangkau, dekat dengan packing/shipping area. Slow-moving items (kategori C) bisa di area yang lebih jauh atau lebih tinggi.

**Prinsip 3: Space Utilization**
Manfaatkan ruang vertikal. Rak tinggi lebih efisien daripada rak rendah. Gunakan mezzanine jika perlu. Target space utilization minimal 85%.

**Prinsip 4: Safety**
Lorong cukup lebar untuk pergerakan orang dan alat. Penerangan memadai. Tanda darurat jelas. APAR tersedia dan terawat. Lantai tidak licin.

### 9.2 Storage Systems

**Shelving:**
Rak terbuka, cocok untuk small items yang di-pick manual. Investasi rendah, fleksibel. Cocok untuk UMKM dengan budget terbatas.

**Pallet Racking:**
Rak untuk pallet, cocok untuk barang besar atau berat. Membutuhkan forklift atau pallet jack. Investasi lebih tinggi tapi kapasitas besar.

**Bin System:**
Kotak-kotak kecil di rak, cocok untuk small parts dan komponen. Setiap bin diberi label jelas. Sering dipakai di bisnis elektronik atau aksesoris.

**Mezzanine:**
Lantai tambahan di atas area gudang. Menggandakan kapasitas tanpa perlu pindah gedung. Cocok untuk gudang dengan ceiling tinggi.

### 9.3 Picking Strategies

**Discrete Picking:**
Satu order dipick satu per satu. Picker jalan ke lokasi, ambil barang, kembali, ulangi. Simple tapi lambat untuk volume tinggi.

**Batch Picking:**
Beberapa order dipick sekaligus dalam satu trip. Picker bawa keranjang besar, ambil barang untuk beberapa order sekaligus, lalu sort di meja packing. Lebih cepat untuk volume sedang.

**Zone Picking:**
Gudang dibagi zona. Setiap picker bertanggung jawab atas satu zona. Order dilewatkan dari zona ke zona. Sangat efisien untuk gudang besar dengan banyak SKU.

**Wave Picking:**
Gabungan batch dan zone. Order dikelompokkan dalam "gelombang" yang dipick pada waktu tertentu. Cocok untuk operasi besar dengan jadwal pengiriman tetap.

Untuk UMKM, discrete picking biasanya cukup sampai 50 order/hari. Di atas itu, pertimbangkan batch picking. Zone picking baru diperlukan di atas 200 order/hari.

### 9.4 Warehouse KPIs

**Space Utilization:**
Formula: (Area terpakai / Total area tersedia) x 100%
Target: 85-90%. Di atas 90% berarti terlalu padat, sulit bergerak. Di bawah 80% berarti boros ruang.

**Picking Accuracy:**
Formula: (Order yang benar / Total order) x 100%
Target: lebih dari 99%. Error picking menyebabkan retur, customer complaint, dan biaya tambahan.

**Order Cycle Time:**
Waktu dari order diterima sampai barang siap kirim.
Target: kurang dari 24 jam untuk e-commerce, kurang dari 4 jam untuk same-day delivery.

**Labor Productivity:**
Formula: Total orders / Total jam kerja
Target: 50-100 orders per orang per hari (tergantung kompleksitas).

---

## Bab 10: Quality Control dan Inspection

![Quality Control](../assets/im-ch10-quality.png)

### 10.1 Incoming Inspection

Setiap barang yang datang dari supplier harus diperiksa sebelum diterima ke sistem. Prosedur incoming inspection:

**Check 1: Quantity**
Hitung jumlah fisik dan bandingkan dengan purchase order dan delivery order. Selisih lebih dari 2% harus diinvestigasi.

**Check 2: Quality**
Periksa kondisi fisik: ada kerusakan, cacat, atau discoloration? Ambil sample random untuk inspeksi detail (AQL sampling).

**Check 3: Specifications**
Pastikan barang yang diterima sesuai dengan yang di-order: ukuran, warna, material, dan spesifikasi lain.

**Check 4: Packaging**
Kemasan harus memadai untuk melindungi produk. Packaging yang rusak bisa menandakan isi juga terpengaruh.

**Check 5: Documentation**
Kelengkapan dokumen: invoice, delivery order, sertifikat kualitas (jika ada), dan dokumen bea cukai (untuk barang impor).

### 10.2 In-Process Quality Control

Untuk bisnis yang memproduksi sendiri, quality control tidak hanya di awal dan akhir, tapi di setiap tahap produksi.

**Checkpoint di setiap tahap:**
- Tahap 1: Bahan baku sudah benar dan berkualitas
- Tahap 2: Proses produksi sesuai SOP
- Tahap 3: Produk setengah jadi memenuhi standar
- Tahap 4: Produk jadi melewati final inspection

**Statistical Process Control (SPC):**
Ambil sample secara periodik dan ukur parameter kritis. Plot di control chart. Jika ada trend menuju batas toleransi, hentikan proses dan perbaiki sebelum produk cacat terproduksi.

### 10.3 Final Inspection

Sebelum barang dikirim ke pelanggan, lakukan final inspection:

- Produk dalam kondisi sempurna
- Packaging sesuai standar (aman untuk pengiriman)
- Label benar (SKU, quantity, alamat)
- Dokumen lengkap (invoice, packing list)
- Quantity sesuai order

**Sampling plan:**
Untuk volume tinggi, tidak perlu inspect 100%. Gunakan AQL (Acceptable Quality Level) sampling. Untuk UMKM, inspect 10-20% random biasanya cukup. Jika defect rate di sample melebihi threshold, inspect semua.

### 10.4 Quality Metrics

**Defect Rate:**
Formula: (Jumlah produk cacat / Total produk diproduksi) x 100%
Target: kurang dari 1%

**Return Rate:**
Formula: (Jumlah order diretur / Total order) x 100%
Target: kurang dari 2%

**Customer Complaint Rate:**
Formula: (Jumlah komplain kualitas / Total pelanggan) x 100%
Target: kurang dari 1%

**Cost of Quality:**
Total biaya akibat masalah kualitas: retur, replacement, discount, waktu tim, reputasi. Biasanya 3-5% dari revenue jika quality control baik, bisa 10-15% jika buruk.

### 10.5 Quality Improvement

**Root Cause Analysis:**
Ketika ada masalah kualitas, cari akar penyebabnya, bukan hanya gejalanya.

Metode 5 Whys:
- Masalah: Produk sampai ke pelanggan dalam kondisi rusak
- Why 1: Packaging tidak memadai
- Why 2: Tidak ada standar packaging
- Why 3: Belum pernah ada complaint sebelumnya
- Why 4: Tidak ada sistem tracking complaint
- Why 5: Tidak ada QC manager
- Root cause: Perlu hire atau assign QC manager

**Supplier Quality Management:**
- Buat spesifikasi kualitas yang jelas untuk supplier
- Audit supplier secara periodik
- Berikan feedback rutin tentang kualitas
- Build partnership, bukan sekadar transaksi
- Punya supplier cadangan jika kualitas tidak membaik

---

## Bab 11: Inventory Valuation Methods

![Inventory Valuation](../assets/im-ch11-valuation.png)

### 11.1 Mengapa Valuation Penting

Inventory valuation menentukan berapa nilai persediaan Anda di laporan keuangan. Ini mempengaruhi:

- **Cost of Goods Sold (COGS):** Berapa biaya langsung dari barang yang terjual
- **Gross Profit:** Revenue dikurangi COGS
- **Tax Liability:** Profit lebih tinggi berarti pajak lebih tinggi
- **Balance Sheet:** Nilai inventory sebagai aset perusahaan

Metode valuation yang Anda pilih bisa membuat perbedaan signifikan di angka-angka ini.

### 11.2 FIFO (First In, First Out)

Dalam FIFO, barang yang pertama dibeli dianggap pertama terjual. Ini metode yang paling umum di Indonesia dan sesuai dengan arus fisik kebanyakan bisnis.

Contoh:
- Januari: Beli 100 unit @ Rp 10.000
- Februari: Beli 100 unit @ Rp 12.000
- Maret: Jual 150 unit

COGS dengan FIFO:
- 100 unit dari Januari @ Rp 10.000 = Rp 1.000.000
- 50 unit dari Februari @ Rp 12.000 = Rp 600.000
- Total COGS = Rp 1.600.000

Sisa inventory: 50 unit @ Rp 12.000 = Rp 600.000

**Kelebihan FIFO:**
- Sesuai dengan arus fisik (barang lama keluar duluan)
- Nilai inventory di balance sheet mencerminkan harga terkini
- Profit lebih tinggi saat inflasi (bagus untuk citra perusahaan)

**Kekurangan FIFO:**
- Profit lebih tinggi berarti pajak lebih tinggi
- Perlu tracking batch yang lebih detail

### 11.3 Average (Weighted Average)

Setiap unit dianggap memiliki cost yang sama, yaitu rata-rata tertimbang dari semua unit yang tersedia.

Contoh yang sama:
- Januari: Beli 100 unit @ Rp 10.000 = Rp 1.000.000
- Februari: Beli 100 unit @ Rp 12.000 = Rp 1.200.000
- Total: 200 unit, total cost Rp 2.200.000
- Average cost per unit = Rp 2.200.000 / 200 = Rp 11.000

COGS dengan Average:
- 150 unit x Rp 11.000 = Rp 1.650.000

Sisa inventory: 50 unit x Rp 11.000 = Rp 550.000

**Kelebihan Average:**
- Simple, tidak perlu track batch individual
- Smooths out price fluctuations
- Diterima untuk perpajakan di Indonesia

**Kekurangan Average:**
- Tidak seakurat FIFO untuk produk dengan harga sangat fluktuatif
- Average cost bisa lag behind current prices

### 11.4 LIFO (Last In, First Out)

Dalam LIFO, barang terakhir dibeli dianggap pertama terjual. Metode ini TIDAK diperbolehkan untuk perpajakan di Indonesia (PSAK dan peraturan pajak mengharuskan FIFO atau Average).

Beberapa negara mengizinkan LIFO karena bisa mengurangi taxable income saat inflasi. Tapi di Indonesia, hindari LIFO.

### 11.5 Specific Identification

Setiap unit individual di-track cost-nya. Cocok untuk barang bernilai tinggi dan unik: mobil, perhiasan, karya seni, mesin industri.

Contoh: Dealer mobil bekas. Setiap mobil punya cost yang berbeda karena kondisi dan tahun berbeda. Saat terjual, cost yang dicatat adalah cost persis dari mobil yang terjual.

Tidak praktis untuk produk FMCG atau retail biasa karena volume terlalu besar.

### 11.6 Memilih Metode yang Tepat

**Rekomendasi untuk UMKM Indonesia:**

| Kondisi | Metode |
|---------|--------|
| Produk perishable (makanan, minuman) | FIFO |
| Produk fashion/retail umum | FIFO atau Average |
| Produk komoditas (harga fluktuatif) | Average |
| Barang unik/bernilai tinggi | Specific Identification |
| Manufaktur dengan BOM | Average atau FIFO |

Konsisten! Setelah memilih satu metode, gunakan secara konsisten. Perubahan metode hanya boleh dilakukan jika ada alasan kuat dan harus di-disclose di laporan keuangan.

---

## Bab 12: Analytics dan Reporting

![Analytics](../assets/im-ch12-analytics.png)

### 12.1 Laporan Harian

**Stock Status Report:**
Menunjukkan level stok setiap SKU saat ini. Gunakan untuk:
- Identifikasi item yang perlu di-reorder
- Cek apakah ada item yang overstock
- Monitor stok di berbagai lokasi

**Stock Movement Report:**
Menunjukkan semua pergerakan stok hari ini: barang masuk (penerimaan), barang keluar (penjualan), dan adjustment. Gunakan untuk:
- Verifikasi bahwa semua transaksi tercatat
- Identifikasi pergerakan yang tidak biasa
- Audit trail

### 12.2 Laporan Mingguan

**Fast-Moving / Slow-Moving Report:**
Ranking produk berdasarkan kecepatan penjualan. Gunakan untuk:
- Identifikasi produk yang perlu di-promo (slow-moving)
- Pastikan fast-moving selalu tersedia
- Keputusan discontinuation

**Stockout Report:**
Daftar semua kejadian stockout minggu ini. Untuk setiap stockout:
- Berapa lama stok kosong
- Berapa estimasi penjualan yang hilang
- Apa penyebab stockout
- Apa tindakan pencegahan

**Inventory Valuation Report:**
Nilai total inventory berdasarkan metode valuation yang dipilih. Gunakan untuk:
- Laporan keuangan
- Monitoring trend nilai inventory
- Budgeting

### 12.3 Laporan Bulanan

**ABC Analysis Report:**
Klasifikasi ulang item ke kategori A, B, C berdasarkan data penjualan bulan terakhir. Kategori bisa berubah seiring waktu, jadi review bulanan penting.

**Carrying Cost Report:**
Total biaya penyimpanan inventory: sewa gudang, listrik, asuransi, gaji staf, depresiasi, dan opportunity cost. Bandingkan dengan nilai inventory untuk mendapatkan persentase carrying cost.

**Supplier Performance Report:**
Evaluasi setiap supplier berdasarkan:
- On-time delivery rate (target: lebih dari 95%)
- Quality acceptance rate (target: lebih dari 98%)
- Lead time consistency
- Responsiveness terhadap masalah

### 12.4 Advanced Analytics

**Demand Forecasting:**
Gunakan data historis untuk memprediksi permintaan masa depan. Software inventory biasanya punya fitur forecasting built-in. Akurasi forecasting meningkat seiring bertambahnya data.

**Inventory Optimization:**
Software menghitung reorder point, safety stock, dan EOQ optimal berdasarkan data aktual. Ini lebih akurat dari perhitungan manual karena memperhitungkan variabilitas demand dan lead time.

**What-If Analysis:**
Simulasikan skenario: "Bagaimana jika demand naik 20%?" atau "Bagaimana jika lead time supplier bertambah 3 hari?" Software bisa menunjukkan dampaknya ke stock levels dan service levels.

### 12.5 Dashboard Metrics

Dashboard yang efektif menampilkan:

**Operational:**
- Total SKU aktif
- Total inventory value
- Inventory turnover (current month vs target)
- Stockout incidents (week to date)
- Pending purchase orders

**Financial:**
- Carrying cost as % of inventory value
- Gross margin return on inventory (GMROI)
- Working capital tied up in inventory
- Dead stock value

**Customer:**
- Fill rate
- Order cycle time average
- Customer satisfaction score (related to availability)

Review dashboard setiap pagi sebagai ritual. Ini memberikan pulse check kesehatan inventory bisnis Anda.

---

# BAGIAN 3: OPTIMASI DAN SCALE

---

## Bab 13: Integrasi dengan POS dan Accounting

![Integration](../assets/im-ch13-integrasi.png)

### 13.1 Mengapa Integrasi Penting

Tanpa integrasi, tim Anda harus input data penjualan dua kali: sekali di POS, sekali di sistem inventory. Ini membuang waktu dan menciptakan peluang error. Data di dua sistem bisa berbeda, menyebabkan keputusan yang salah.

Dengan integrasi:
- Setiap penjualan di POS otomatis mengurangi stok di inventory
- Setiap penerimaan barang otomatis ter-update di kedua sistem
- Laporan keuangan dan inventory selalu sinkron
- Tidak ada double entry yang membuang waktu

### 13.2 POS Integration

POS (Point of Sales) adalah titik penjualan dimana transaksi terjadi. Integrasi POS-inventory memastikan setiap penjualan langsung ter-reflection di stok.

**POS populer di Indonesia:**
- Moka POS: populer untuk F&B dan retail, mulai Rp 299.000/bulan
- Pawoon: fitur lengkap, cocok untuk berbagai jenis bisnis
- Majoo: ekosistem lengkap, dari POS hingga accounting
- Square: gratis, cocok untuk bisnis kecil

**Proses integrasi:**
1. Pilih POS yang compatible dengan software inventory Anda
2. Hubungkan melalui API atau integrasi built-in
3. Map produk: SKU di POS harus sama dengan SKU di inventory
4. Test: buat transaksi test, verifikasi stok ter-update
5. Go live dan monitor

### 13.3 Accounting Integration

Integrasi inventory-accounting memastikan setiap pergerakan stok menghasilkan journal entry yang benar:

- Penjualan: Debit COGS, Credit Inventory
- Penerimaan barang: Debit Inventory, Credit Accounts Payable
- Adjustment: Debit/Credit Inventory, Debit/Credit Adjustment Account

**Software accounting populer di Indonesia:**
- Jurnal (Mekari): paling populer, cloud-based, fitur lengkap
- Accurate: kuat di accounting, fitur inventory memadai
- Xero: international standard, bagus untuk bisnis dengan multi-currency
- QuickBooks: populer global, fitur lengkap

### 13.4 Marketplace Integration

Jika Anda jual di Tokopedia, Shopee, Lazada, atau TikTok Shop, integrasi marketplace sangat penting. Tanpa integrasi, Anda harus update stok manual di setiap marketplace, dan risiko overselling sangat tinggi.

**Tools integrasi marketplace:**
- Ginee: multi-channel management, sync stok real-time, harga management
- BigSeller: spesialis marketplace Indonesia, fitur lengkap
- SellerApp: analytics plus inventory management
- OneStock: fokus di inventory sync multi-channel

**Cara kerja:**
1. Hubungkan semua marketplace ke tools integrasi
2. Set inventory source (dari software inventory utama)
3. Configure sync interval (real-time atau setiap 5-15 menit)
4. Set stock allocation per channel (opsional)
5. Test sync dan verifikasi

### 13.5 Integration Best Practices

**Practice 1: Pilih Sistem yang Compatible**
Sebelum membeli software, pastikan bisa integrasi dengan tools yang sudah Anda gunakan. Cek apakah ada API atau integrasi built-in.

**Practice 2: Test Thoroughly**
Jangan langsung go live. Test integrasi dengan data sample selama minimal 1 minggu. Verifikasi setiap skenario: penjualan, retur, adjustment, transfer.

**Practice 3: Monitor Sync Status**
Cek sync log setiap hari. Jika ada error, segera investigasi. Sync yang gagal berarti data tidak sinkron.

**Practice 4: Punya Backup Plan**
Ketika integrasi down, apa rencana Anda? Siapkan prosedur manual sementara: catat transaksi di spreadsheet, input ke sistem setelah integrasi pulih.

**Practice 5: Document Everything**
Dokumentasikan setup integrasi, mapping data, troubleshooting guide, dan contact person untuk setiap vendor.

---

## Bab 14: Best Practices dan Tips

![Best Practices](../assets/im-ch14-bestpractice.png)

### 14.1 10 Best Practices Inventory Management

**1. Regular Stock Opname**
Jangan tunggu akhir tahun. Cycle counting setiap minggu untuk item A, setiap bulan untuk B, setiap kuartal untuk C. Akurasi inventory adalah fondasi dari semua keputusan.

**2. FIFO Disiplin**
Konsisten terapkan First In, First Out. Latih tim untuk selalu ambil barang lama duluan. Label tanggal masuk di setiap batch. Ini mencegah expired dan obsolescence.

**3. Safety Stock Maintenance**
Review safety stock setiap bulan. Adjust berdasarkan data aktual. Jangan set and forget. Demand berubah, lead time berubah, safety stock harus ikut berubah.

**4. Supplier Relationship**
Bangun hubungan yang kuat dengan supplier. Komunikasi rutin, kunjungan berkala, negosiasi win-win. Supplier yang baik akan prioritize order Anda saat supply chain disruption.

**5. Technology Adoption**
Gunakan teknologi untuk efisiensi: inventory software, barcode scanner, mobile app, automation. Investasi teknologi inventory biasanya ROI dalam 3-6 bulan.

**6. Data-Driven Decisions**
Jangan tebak-tebakan. Gunakan data untuk keputusan inventory: kapan order, berapa banyak, item mana yang perlu di-promo, item mana yang perlu di-discontinue.

**7. Team Training**
Investasi di training tim. Tim yang terlatih membuat lebih sedikit error, bekerja lebih cepat, dan bisa identifikasi masalah lebih awal.

**8. Continuous Improvement**
Review proses setiap bulan. Apa yang bisa diperbaiki? Apa yang bisa di-automate? Apa yang membuang waktu? Kaizen, perbaikan terus-menerus.

**9. Cross-Functional Communication**
Tim sales, purchasing, warehouse, dan finance harus komunikasi rutin. Sales forecast mempengaruhi purchasing. Warehouse capacity mempengaruhi sales promise. Semua terhubung.

**10. Customer-Centric Approach**
Inventory management bukan hanya soal efisiensi biaya, tapi juga soal melayani pelanggan. Stock yang tepat di waktu yang tepat = pelanggan puas = repeat business.

### 14.2 Tips Khusus UMKM

**Tip 1: Mulai Sederhana**
Jangan langsung implement semua fitur. Mulai dari dasar: setup SKU, tracking stok, reorder point. Setelah tim comfortable, baru tambah fitur advanced.

**Tip 2: Fokus pada Fast-Movers**
80/20 rule: 20% item menyumbang 80% revenue. Pastikan 20% ini selalu tersedia. Optimasi mereka dulu sebelum worry tentang yang lain.

**Tip 3: Regular Review**
Luangkan waktu 30 menit setiap pagi untuk review dashboard inventory. 1 jam setiap minggu untuk review laporan. 4 jam setiap bulan untuk review strategi.

**Tip 4: Jangan Takut Write-Off**
Dead stock yang tidak terjual 6 bulan lebih baik di-write-off daripada menyimpannya. Ruang gudang yang terpakai untuk dead stock bisa dipakai untuk produk yang menghasilkan.

**Tip 5: Negosiasi dengan Supplier**
Manfaatkan kode referral (lihat daftar di akhir buku ini). Negosiasi payment terms yang lebih panjang. Minta diskon untuk volume. Semua ini mengurangi carrying cost.

### 14.3 Common Mistakes to Avoid

**Mistake 1: Overstocking**
Penyebab: takut stockout, diskon quantity yang menggoda, forecast terlalu optimis.
Dampak: cash flow terganggu, carrying cost tinggi, risiko obsolescence.
Solusi: trust your data, order berdasarkan ROP dan EOQ, jangan order karena "feeling".

**Mistake 2: Understocking**
Penyebab: safety stock terlalu rendah, lead time tidak di-update, demand spike tidak diantisipasi.
Dampak: lost sales, customer kecewa, reputasi rusak.
Solusi: hitung safety stock dengan benar, update lead time secara berkala, prepare untuk seasonal demand.

**Mistake 3: No System**
Penyebab: "bisnis saya masih kecil", "belum punya budget", "masih bisa manual".
Dampak: error tinggi, tidak ada visibility, keputusan berdasarkan tebakan.
Solusi: mulai dari software gratis atau murah, ROI biasanya dalam 3 bulan.

**Mistake 4: Ignoring Data**
Penyebab: terlalu sibuk operasional, tidak tahu cara baca laporan, tidak punya waktu.
Dampak: masalah tidak terdeteksi sampai besar, opportunity hilang.
Solusi: jadwalkan waktu khusus untuk review data, mulai dari 1-2 laporan kunci.

**Mistake 5: No Process**
Penyebab: semua dikerjakan ad-hoc, tidak ada SOP, setiap orang cara sendiri.
Dampak: inkonsistensi, error, sulit scale.
Solusi: dokumentasikan proses, buat SOP, train tim, audit kepatuhan.

### 14.4 Scaling Your Inventory System

**Stage 1: Startup (0-100 SKU, 1 lokasi)**
Tools: Spreadsheet atau software basic
Tim: 1-2 orang handle inventory
Fokus: akurasi data, basic tracking

**Stage 2: Growth (100-1000 SKU, 2-3 lokasi)**
Tools: Dedicated inventory software, barcode system
Tim: 3-5 orang, spesialisasi mulai terbentuk
Fokus: integrasi POS dan accounting, cycle counting

**Stage 3: Scale (1000+ SKU, multi-warehouse)**
Tools: ERP system, WMS, advanced analytics
Tim: dedicated warehouse team, inventory manager
Fokus: automation, optimization, multi-channel

**Stage 4: Enterprise (10.000+ SKU, nasional)**
Tools: Enterprise ERP, AI-driven forecasting, robotics
Tim: department sendiri, head of supply chain
Fokus: end-to-end supply chain optimization

---

## Bab 15: Studi Kasus Nyata UMKM Indonesia

![Case Studies](../assets/im-ch15-case.png)

### 15.1 Studi Kasus 1: Toko Sembako Jaya, Surabaya

**Latar Belakang:**
Toko Sembako Jaya adalah toko kelontong dengan 3 cabang di Surabaya. Dimulai dari satu toko kecil pada 2015, bisnis ini berkembang berkat lokasi strategis dan harga kompetitif. Tapi pertumbuhan membawa masalah: inventory tidak terkelola dengan baik.

**Kondisi Sebelum:**
- Pencatatan manual di buku tulis dan Excel terpisah per cabang
- Stock accuracy kurang dari 70% (sering selisih antara catatan dan fisik)
- Stockout terjadi 10-15 kali per bulan (pelanggan datang, barang tidak ada)
- Overstock di beberapa item (uang mati di gudang)
- Tidak ada reporting yang bisa diandalkan
- Kerugian diperkirakan Rp 5-10 juta per bulan dari masalah inventory
- Owner tidak punya visibility real-time ke kondisi stok

**Tantangan:**
- 500+ SKU dengan berbagai kategori
- 3 lokasi dengan staf yang berbeda-beda kemampuannya
- Budget terbatas untuk investasi teknologi
- Resistensi dari staf senior yang sudah terbiasa cara lama
- Supplier yang tidak konsisten lead time-nya

**Solusi yang Diimplementasikan:**
Implementasi Jurnal Inventory terintegrasi dengan Moka POS.

**Fase 1: Setup (Bulan 1)**
- Setup akun Jurnal Inventory untuk 3 cabang
- Import 500+ SKU dengan data yang dibersihkan
- Setup 3 warehouses (satu per cabang)
- Train 6 staff (2 per cabang) selama 2 hari
- Connect Moka POS di setiap kasir
- Initial stock taking di semua cabang

**Fase 2: Migration (Bulan 2)**
- Full stock opname di semua cabang
- Adjust initial stock berdasarkan hasil opname
- Setup reorder points untuk 100 item teratas (kategori A)
- Configure auto-reorder alerts
- Test integrasi POS-inventory selama 2 minggu
- Fix bugs dan adjust konfigurasi

**Fase 3: Optimization (Bulan 3)**
- Analisis ABC classification
- Optimize stock levels berdasarkan data 2 bulan
- Setup reporting: daily stock status, weekly fast/slow movers
- Train advanced features: purchase order, supplier management
- Implement cycle counting program

**Hasil Setelah 6 Bulan:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Stock Accuracy | 70% | 98% | +40% |
| Stockout per bulan | 10-15 | 1-2 | -85% |
| Overstock items | 25% | 8% | -68% |
| Revenue bulanan | Rp 300jt | Rp 420jt | +40% |
| Profit bulanan | Rp 30jt | Rp 55jt | +83% |
| Waktu stock opname | 3 hari | 4 jam | -89% |

**ROI Calculation:**
- Investment: Software Rp 900.000/bulan x 6 = Rp 5.400.000
- Training: Rp 2.000.000
- Barcode equipment: Rp 3.000.000
- Total investment: Rp 10.400.000
- Profit increase: Rp 25.000.000/bulan x 6 = Rp 150.000.000
- ROI: (150.000.000 - 10.400.000) / 10.400.000 x 100% = 1.342%

**Pelajaran Kunci:**
- Owner commitment sangat penting. Pak Hadi (owner) sendiri yang drive implementasi
- Staff training tidak bisa terburu-buru. Luangkan waktu yang cukup
- Mulai dari item kategori A, jangan coba semua sekaligus
- Data accuracy adalah fondasi. Garbage in, garbage out

### 15.2 Studi Kasus 2: Brand Fashion Lokal, Jakarta

**Latar Belakang:**
Sebuah brand fashion lokal menjual melalui 4 channel: website sendiri, Tokopedia, Shopee, dan Instagram DM. Tim terdiri dari 5 orang: owner, 2 admin online, 1 gudang, 1 packing.

**Kondisi Sebelum:**
- Inventory tersebar di 4 channel, tidak ada central control
- Overselling 20-30 kali per bulan (barang terjual di 2 channel sekaligus)
- Manual sync stok memakan waktu 3 jam per hari
- Customer complaints tinggi karena order dibatalkan
- Revenue loss diperkirakan Rp 15-20 juta per bulan
- Tim admin lebih fokus mengurus complaint daripada growth

**Tantangan:**
- 4 channel dengan sistem berbeda-beda
- 300+ SKU dengan banyak varian (warna dan ukuran)
- Trend fashion berubah cepat, perlu restock cepat
- Budget terbatas
- Tim tidak tech-savvy

**Solusi yang Diimplementasikan:**
Implementasi Ginee untuk multi-channel inventory management.

**Fase 1: Integration (Bulan 1)**
- Connect semua 4 channel ke Ginee
- Import product catalog dengan varian lengkap
- Setup inventory sync real-time
- Train tim selama 3 hari
- Parallel run: sistem lama dan baru jalan bersamaan 1 minggu

**Fase 2: Optimization (Bulan 2)**
- Setup auto-sync real-time (setiap 5 menit)
- Configure stock allocation per channel (30% website, 25% Tokopedia, 25% Shopee, 20% Instagram)
- Setup reorder alerts untuk item fast-moving
- Create reporting: channel performance, stock status
- Implement batch tracking untuk produksi baru

**Fase 3: Scale (Bulan 3)**
- Tambah channel baru: Lazada dan TikTok Shop
- Optimize stock allocation berdasarkan data penjualan
- Setup automated purchase order ke supplier
- Advanced analytics: demand forecasting, seasonal planning

**Hasil Setelah 6 Bulan:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Overselling per bulan | 20-30 | 0-1 | -97% |
| Sync time per hari | 3 jam | 0 (auto) | -100% |
| Customer complaints | 50+ per bulan | 5 per bulan | -90% |
| Revenue bulanan | Rp 200jt | Rp 350jt | +75% |
| Tim productivity | 60% operational | 80% strategic | +33% |

**ROI Calculation:**
- Investment: Ginee Rp 300.000/bulan x 6 = Rp 1.800.000
- Training: Rp 1.500.000
- Total investment: Rp 3.300.000
- Revenue increase: Rp 150.000.000/bulan x 6 = Rp 900.000.000
- Complaint handling cost saved: Rp 5.000.000/bulan x 6 = Rp 30.000.000
- ROI: (930.000.000 - 3.300.000) / 3.300.000 x 100% = 28.082%

**Pelajaran Kunci:**
- Multi-channel selling tanpa integrasi = bencana yang pasti terjadi
- Stock allocation per channel mencegah satu channel "memakan" stok channel lain
- Tim yang terbebas dari tugas manual bisa fokus ke growth
- Scale up channel baru jadi mudah ketika inventory system sudah solid

### 15.3 Studi Kasus 3: Distributor Makanan Minuman, Semarang

**Latar Belakang:**
Distributor makanan dan minuman dengan 2 gudang dan 500+ SKU. Supply ke 200+ toko retail di area Semarang dan sekitarnya. Bisnis keluarga yang sudah berjalan 10 tahun.

**Kondisi Sebelum:**
- Warehouse tidak terorganisir, barang ditaruh di mana saja
- Picking time rata-rata 15 menit per order (seharusnya bisa 5 menit)
- Expired products menyebabkan kerugian Rp 10 juta per bulan
- Space utilization hanya 60% (gudang terasa penuh tapi tidak efisien)
- Order accuracy 92% (8% order ada error: salah item atau salah quantity)
- Tidak ada FIFO yang konsisten

**Tantangan:**
- 2 gudang dengan layout yang tidak optimal
- 500+ SKU dengan karakteristik berbeda (ada yang perishable, ada yang tidak)
- 10 staf gudang yang sudah terbiasa cara lama
- Budget terbatas untuk renovasi gudang
- Perlu tetap operasi selama transisi (tidak bisa tutup gudang)

**Solusi yang Diimplementasikan:**
Implementasi Zoho Inventory + barcode system + warehouse reorganization.

**Fase 1: Warehouse Reorganization (Bulan 1)**
- Redesign layout berdasarkan ABC analysis
- Fast-movers (A) dekat dengan packing area
- Medium-movers (B) di area tengah
- Slow-movers (C) di area belakang/atas
- Install racking system baru (investasi Rp 25 juta)
- Setup bin locations dan label semua rak
- Buat alur satu arah: receiving di belakang, shipping di depan

**Fase 2: System Setup (Bulan 2)**
- Setup Zoho Inventory untuk 2 gudang
- Import 500+ SKU dengan data yang dibersihkan
- Setup barcode system: print label untuk semua produk dan lokasi
- Configure batch tracking dan expiry date management
- Setup FEFO (First Expired, First Out) picking
- Train 10 staf dalam 3 sesi (masing-masing 4 jam)

**Fase 3: Process Optimization (Bulan 3)**
- Implement batch picking untuk order kecil
- Setup expiry tracking dengan alert otomatis
- Configure FIFO enforcement di sistem
- Optimize picking routes berdasarkan data
- Setup dashboard real-time untuk supervisor

**Hasil Setelah 6 Bulan:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Picking time | 15 menit/order | 5 menit/order | -67% |
| Expired products/bulan | Rp 10jt | Rp 1jt | -90% |
| Space utilization | 60% | 90% | +50% |
| Order accuracy | 92% | 99% | +7.6% |
| Orders per day | 40 | 65 | +63% |
| Staff overtime | 20 jam/minggu | 5 jam/minggu | -75% |

**ROI Calculation:**
- Investment: Zoho Rp 1.500.000/bulan x 6 = Rp 9.000.000
- Racking system: Rp 25.000.000
- Barcode equipment: Rp 5.000.000
- Training: Rp 3.000.000
- Total investment: Rp 42.000.000
- Savings: expired reduction Rp 54.000.000 (6 bulan) + overtime reduction Rp 18.000.000 + capacity increase Rp 30.000.000
- Total savings: Rp 102.000.000
- ROI: (102.000.000 - 42.000.000) / 42.000.000 x 100% = 143%

**Pelajaran Kunci:**
- Warehouse layout adalah 50% dari efisiensi. System secanggih apapun tidak bisa compensate layout buruk
- FIFO enforcement butuh disiplin dan sistem yang mendukung
- Barcode system adalah game changer untuk accuracy
- Warehouse reorganization bisa dilakukan bertahap tanpa tutup operasi

### 15.4 Pola Umum dari Ketiga Studi Kasus

**Pola 1: Technology is Key**
Ketiga kasus menunjukkan bahwa digital system meningkatkan accuracy dan efficiency secara dramatis. Manual process tidak bisa compete.

**Pola 2: Integration Matters**
Sistem yang terintegrasi (POS, accounting, marketplace) memberikan value berlipat dibanding sistem yang berdiri sendiri.

**Pola 3: Data-Driven Decisions**
Semua kasus yang track metrics dan gunakan data untuk keputusan perform jauh lebih baik dari yang masih pakai feeling.

**Pola 4: Training is Critical**
Technology only as good as the people using it. Investasi di training sama pentingnya dengan investasi di software.

**Pola 5: Continuous Improvement**
Inventory management bukan project sekali selesai. Ini ongoing process yang perlu review dan optimization berkelanjutan.

---

## Bab 16: Roadmap 30 Hari dan Next Steps

![Roadmap](../assets/im-ch16-roadmap.png)

### 16.1 Week 1: Assessment dan Planning (Hari 1-7)

**Hari 1: Current State Assessment**
- Audit proses inventory saat ini
- Identifikasi pain points utama
- Hitung physical stock (minimal item kategori A)
- Dokumentasi semua masalah yang ditemukan
- Output: daftar masalah dan prioritas

**Hari 2: Goal Setting**
- Define objectives SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
- Contoh: "Meningkatkan stock accuracy dari 70% ke 95% dalam 90 hari"
- Set KPIs yang akan di-track
- Get management buy-in dan budget approval
- Assign project lead
- Output: dokumen goals dan KPIs

**Hari 3: Research Solutions**
- Research minimal 5 software inventory
- Bandingkan fitur, harga, dan review
- Shortlist 3 opsi terbaik
- Schedule demo dengan masing-masing vendor
- Output: shortlist 3 software

**Hari 4: Demo dan Trial**
- Ikuti demo dari 3 vendor
- Sign up for free trial
- Test dengan data bisnis Anda sendiri
- Minta feedback dari 2-3 anggota tim
- Output: evaluasi dan ranking

**Hari 5: Decision**
- Pilih software terbaik
- Negosiasi harga (gunakan kode referral!)
- Purchase subscription
- Setup akun dan akses
- Output: software ready to use

**Hari 6: Data Preparation**
- Collect semua data produk
- Clean data: hapus duplikat, standarisasi format
- Prepare import file (CSV/Excel)
- Verify data completeness
- Output: clean data ready for import

**Hari 7: Data Migration**
- Import data ke software
- Map fields dengan benar
- Validate data setelah import
- Fix errors yang muncul
- Output: data migrated successfully

### 16.2 Week 2: Setup dan Configuration (Hari 8-14)

**Hari 8: Warehouse Setup**
- Define warehouse structure di software
- Setup locations (gudang, zona, rak, bin)
- Assign PIC untuk setiap lokasi
- Configure settings

**Hari 9: Product Catalog**
- Create categories dan subcategories
- Setup SKUs untuk semua produk
- Add barcodes
- Set pricing (jual dan beli)

**Hari 10: Initial Stock**
- Input opening stock dari hasil stock opname
- Verify quantities
- Adjust discrepancies
- Document initial state

**Hari 11: Supplier Setup**
- Create supplier list
- Add contact info dan terms
- Set lead time untuk setiap supplier
- Link suppliers ke products

**Hari 12: Integration Setup**
- Connect POS (jika ada)
- Connect accounting software
- Connect marketplace (jika ada)
- Test sync di semua arah

**Hari 13: Automation Setup**
- Set reorder points untuk item A
- Configure alerts (low stock, overstock, expiry)
- Setup auto-reorder (jika available)
- Test automation

**Hari 14: Reporting Setup**
- Create custom reports yang dibutuhkan
- Setup dashboards
- Configure report schedules
- Test semua laporan

### 16.3 Week 3: Training dan Testing (Hari 15-21)

**Hari 15: Team Training (Basic)**
- Train semua user pada fitur dasar
- Cover: data entry, stock movements, basic reports
- Hands-on practice
- Q&A session

**Hari 16: Team Training (Advanced)**
- Train pada fitur advanced
- Cover: purchase orders, reporting, integrations
- Advanced troubleshooting
- Best practices

**Hari 17: Pilot Program**
- Select pilot team (3-5 orang)
- Start menggunakan sistem untuk operasional nyata
- Monitor usage dan adoption
- Collect feedback

**Hari 18: Testing**
- Test semua fitur secara sistematis
- Test integrations dengan data real
- Test reporting accuracy
- Test edge cases dan error scenarios
- Fix semua issues yang ditemukan

**Hari 19: Process Documentation**
- Document semua workflows
- Create SOPs untuk setiap proses
- Create training materials untuk user baru
- Document troubleshooting guide

**Hari 20: Optimization**
- Review workflows dari pilot
- Optimize processes berdasarkan feedback
- Update configurations
- Refine settings

**Hari 21: Week 3 Review**
- Review pilot results
- Identify improvements yang perlu dilakukan
- Update training materials
- Prepare untuk full rollout

### 16.4 Week 4: Full Rollout dan Optimization (Hari 22-30)

**Hari 22: Full Team Training**
- Train semua remaining users
- Cover semua features
- Provide documentation
- Set expectations

**Hari 23: Go Live**
- Migrate semua operasi ke sistem baru
- Start menggunakan sistem penuh
- Monitor closely
- Provide on-the-spot support

**Hari 24: Data Enrichment**
- Add missing information
- Update data yang kurang lengkap
- Validate accuracy
- Clean up anomalies

**Hari 25: Integration Testing**
- Test semua integrations di production
- Verify sync accuracy
- Check data flow end-to-end
- Fix issues

**Hari 26: Process Optimization**
- Review processes setelah beberapa hari operasi
- Identify bottlenecks
- Optimize workflows
- Update SOPs

**Hari 27: Advanced Features**
- Setup advanced automation
- Configure advanced analytics
- Create custom reports tambahan
- Explore fitur yang belum digunakan

**Hari 28: User Adoption**
- Monitor usage patterns
- Identify non-users atau low adoption
- Provide additional training
- Celebrate early wins

**Hari 29: Data Quality**
- Run quality checks
- Clean duplicates
- Update missing fields
- Validate data integrity

**Hari 30: Review dan Next Steps**
- Review 30-day results terhadap goals
- Celebrate achievements
- Identify areas for improvement
- Plan next 90 days priorities

### 16.5 KPI Targets

**30-Day Targets:**
- Stock accuracy: lebih dari 95%
- User adoption: lebih dari 80%
- Data quality: lebih dari 90%
- Integration status: 100% connected

**90-Day Targets:**
- Stockout rate: kurang dari 2%
- Inventory turnover: 6-12x per year
- Order accuracy: lebih dari 98%
- Time saved: lebih dari 50%

**6-Month Targets:**
- ROI: lebih dari 300%
- Carrying cost: kurang dari 25% of inventory value
- Fill rate: lebih dari 95%
- Customer satisfaction: lebih dari 90%

### 16.6 Kalkulator ROI Inventory System

Gunakan kalkulator sederhana ini untuk estimasi ROI bisnis Anda:

**Input:**
- Revenue bulanan saat ini: Rp ___
- Kerugian bulanan karena masalah inventory: Rp ___
- Biaya software per bulan: Rp ___
- Biaya implementasi (training, equipment): Rp ___

**Kalkulasi:**
- Profit increase per bulan = Kerugian yang di-eliminate = Rp ___
- Total investment (12 bulan) = (Biaya software x 12) + Biaya implementasi = Rp ___
- Total return (12 bulan) = Profit increase x 12 = Rp ___
- ROI = (Total return - Total investment) / Total investment x 100% = ___%

**Contoh:**
- Revenue: Rp 300.000.000
- Kerugian inventory: Rp 10.000.000/bulan
- Software: Rp 900.000/bulan
- Implementasi: Rp 10.000.000
- Profit increase: Rp 10.000.000/bulan
- Total investment: (900.000 x 12) + 10.000.000 = Rp 20.800.000
- Total return: 10.000.000 x 12 = Rp 120.000.000
- ROI: (120.000.000 - 20.800.000) / 20.800.000 x 100% = 477%

### 16.7 Final Thoughts

Inventory management adalah fondasi dari bisnis yang profitable. Dengan sistem yang baik, Anda bisa mengurangi biaya, meningkatkan penjualan, memperbaiki kepuasan pelanggan, dan membuat keputusan yang lebih baik.

Tidak ada waktu yang lebih baik dari sekarang untuk memulai. Follow the roadmap, measure results, optimize relentlessly. Dalam 30 hari, Anda akan punya sistem inventory yang berfungsi. Dalam 90 hari, Anda akan melihat hasil nyata. Dalam 6 bulan, ROI akan berbicara sendiri.

Mulai hari ini. Follow the steps. Dan saksikan bisnis Anda bertransformasi.

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
- Ginee: SNISHOPGN (Free 3 bulan)
- Moka POS: SNISHOPMK (20% off)

---

**(c) 2026 SNISHOP.COM - Semua Hak Dilindungi**

Dilarang menggandakan, mendistribusikan, atau memodifikasi konten ini tanpa izin tertulis dari SNISHOP.COM.
`;

// Combine all parts
const fullManuscript = part1Base + bab3to5 + bab6to16;

// Write the complete manuscript
fs.writeFileSync(manuscriptPath, fullManuscript, 'utf8');

// Count words
const wordCount = fullManuscript.split(/\s+/).filter(w => w.length > 0).length;
const lineCount = fullManuscript.split('\n').length;

console.log(`Manuscript complete: ${wordCount} words, ${lineCount} lines`);
