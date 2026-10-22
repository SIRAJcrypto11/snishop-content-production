#!/usr/bin/env node

/**
 * seed-topics.js - Seeds the content queue with initial topics.
 *
 * Contains 50+ sample topics across categories: ai-tech, business, snishop.
 * Each topic has a priority and brief description.
 */

const db = require('../src/config/database');

const TOPICS = [
  // ---- AI & Tech (20 topics) ----
  { topic: 'Panduan Lengkap Prompt Engineering untuk Pemula', priority: 10, category: 'ai-tech', brief: 'Tutorial step-by-step prompt engineering dari dasar hingga mahir' },
  { topic: 'Vibecoding: Cara Baru Coding dengan AI', priority: 9, category: 'ai-tech', brief: 'Konsep vibecoding dan implementasinya dalam workflow developer' },
  { topic: 'ChatGPT vs Claude vs Gemini: Perbandingan Lengkap 2025', priority: 9, category: 'ai-tech', brief: 'Analisis mendalam perbandingan tiga AI model terbaik' },
  { topic: 'Membuat Chatbot dengan OpenAI API dan Node.js', priority: 8, category: 'ai-tech', brief: 'Tutorial membangun chatbot production-ready' },
  { topic: '10 AI Tools yang Wajib Dicoba Developer Indonesia', priority: 8, category: 'ai-tech', brief: 'Kurasi tools AI terbaik untuk meningkatkan produktivitas' },
  { topic: 'Fine-tuning Model AI untuk Kebutuhan Bisnis', priority: 7, category: 'ai-tech', brief: 'Panduan praktis fine-tuning model AI' },
  { topic: 'RAG (Retrieval Augmented Generation) Explained', priority: 7, category: 'ai-tech', brief: 'Memahami konsep RAG dan implementasinya' },
  { topic: 'Membangun Aplikasi AI dengan LangChain', priority: 7, category: 'ai-tech', brief: 'Tutorial LangChain dari instalasi hingga deployment' },
  { topic: 'AI Image Generation: DALL-E, Midjourney, Stable Diffusion', priority: 6, category: 'ai-tech', brief: 'Perbandingan dan panduan penggunaan AI image generators' },
  { topic: 'Prompt Engineering Advanced: Chain-of-Thought & Few-Shot', priority: 8, category: 'ai-tech', brief: 'Teknik lanjutan prompt engineering' },
  { topic: 'Membuat AI Voice Assistant dengan Whisper API', priority: 6, category: 'ai-tech', brief: 'Tutorial voice assistant menggunakan OpenAI Whisper' },
  { topic: 'Vector Database: Panduan untuk Developer', priority: 6, category: 'ai-tech', brief: 'Memahami vector database dan penggunaannya dalam AI apps' },
  { topic: 'AI Code Review: Automasi Review Kode dengan AI', priority: 5, category: 'ai-tech', brief: 'Implementasi AI untuk code review otomatis' },
  { topic: 'Membuat AI Content Generator untuk E-commerce', priority: 7, category: 'ai-tech', brief: 'Sistem generate deskripsi produk otomatis' },
  { topic: 'Deployment Model AI ke Production', priority: 6, category: 'ai-tech', brief: 'Best practices deploy model AI ke production environment' },
  { topic: 'AI Ethics dan Tanggung Jawab Developer', priority: 5, category: 'ai-tech', brief: 'Etika pengembangan AI dan dampaknya' },
  { topic: 'Membuat AI Resume Builder dengan GPT-4', priority: 5, category: 'ai-tech', brief: 'Tutorial membuat aplikasi resume builder' },
  { topic: 'Natural Language Processing untuk Bahasa Indonesia', priority: 7, category: 'ai-tech', brief: 'NLP khusus untuk teks Bahasa Indonesia' },
  { topic: 'AI-Powered Testing: Automasi Test dengan AI', priority: 5, category: 'ai-tech', brief: 'Menggunakan AI untuk generate dan menjalankan test' },
  { topic: 'Membangun Knowledge Base dengan AI dan Embeddings', priority: 6, category: 'ai-tech', brief: 'Sistem knowledge base menggunakan vector embeddings' },

  // ---- Business (15 topics) ----
  { topic: 'Strategi Monetisasi Konten Digital di Indonesia', priority: 9, category: 'business', brief: 'Panduan lengkap monetisasi konten digital' },
  { topic: 'Membangun Personal Branding sebagai Content Creator', priority: 8, category: 'business', brief: 'Tips membangun brand pribadi yang kuat' },
  { topic: 'Email Marketing: Dari Nol hingga Automation', priority: 7, category: 'business', brief: 'Panduan email marketing untuk bisnis digital' },
  { topic: 'SEO untuk Produk Digital: Panduan Praktis', priority: 8, category: 'business', brief: 'Optimasi SEO khusus produk digital' },
  { topic: 'Membuat Sales Funnel yang Efektif', priority: 7, category: 'business', brief: 'Step-by-step membuat sales funnel' },
  { topic: 'Pricing Strategy untuk Produk Digital', priority: 8, category: 'business', brief: 'Strategi harga optimal untuk produk digital' },
  { topic: 'Content Marketing untuk SaaS', priority: 6, category: 'business', brief: 'Strategi konten khusus bisnis SaaS' },
  { topic: 'Membangun Komunitas Online yang Engaged', priority: 6, category: 'business', brief: 'Tips membangun dan mengelola komunitas' },
  { topic: 'Copywriting Formula: AIDA, PAS, dan BAB', priority: 7, category: 'business', brief: 'Formula copywriting yang terbukti efektif' },
  { topic: 'Analytics dan Metrics untuk Content Business', priority: 6, category: 'business', brief: 'Memahami dan menggunakan data untuk keputusan bisnis' },
  { topic: 'Membuat Landing Page yang Mengkonversi', priority: 7, category: 'business', brief: 'Best practices landing page optimization' },
  { topic: 'Social Media Marketing untuk Produk Digital', priority: 7, category: 'business', brief: 'Strategi marketing di berbagai platform' },
  { topic: 'Automasi Bisnis Digital dengan No-Code Tools', priority: 5, category: 'business', brief: 'Menggunakan no-code tools untuk automasi' },
  { topic: 'Membangun Passive Income dari Produk Digital', priority: 8, category: 'business', brief: 'Strategi menciptakan pendapatan pasif' },
  { topic: 'Customer Retention: Menjaga Pelanggan Setia', priority: 6, category: 'business', brief: 'Strategi retensi pelanggan untuk bisnis digital' },

  // ---- SNISHOP (15 topics) ----
  { topic: 'Tutorial Lengkap Menggunakan SNISHOP ERP', priority: 10, category: 'snishop', brief: 'Panduan komprehensif menggunakan sistem ERP SNISHOP' },
  { topic: 'Cara Membuat Toko Online di SNISHOP dalam 10 Menit', priority: 9, category: 'snishop', brief: 'Quick start guide untuk pemula' },
  { topic: 'SNISHOP vs Shopify vs Tokopedia: Mana yang Terbaik?', priority: 8, category: 'snishop', brief: 'Perbandingan platform e-commerce' },
  { topic: 'Fitur Baru SNISHOP: AI Product Description Generator', priority: 7, category: 'snishop', brief: 'Memperkenalkan fitur AI di SNISHOP' },
  { topic: 'Mengoptimalkan Toko SNISHOP untuk Penjualan Maksimal', priority: 8, category: 'snishop', brief: 'Tips optimasi toko di platform SNISHOP' },
  { topic: 'Integrasi SNISHOP dengan Marketplace Indonesia', priority: 7, category: 'snishop', brief: 'Cara menghubungkan SNISHOP dengan marketplace lain' },
  { topic: 'Panduan Lengkap SNISHOP Analytics Dashboard', priority: 6, category: 'snishop', brief: 'Memahami dan menggunakan dashboard analytics' },
  { topic: 'Membuat Katalog Produk yang Menjual di SNISHOP', priority: 7, category: 'snishop', brief: 'Best practices membuat katalog produk' },
  { topic: 'SNISHOP Payment Gateway: Setup dan Konfigurasi', priority: 6, category: 'snishop', brief: 'Panduan setup payment gateway' },
  { topic: 'Multi-Store Management dengan SNISHOP', priority: 5, category: 'snishop', brief: 'Mengelola banyak toko dari satu dashboard' },
  { topic: 'SNISHOP Mobile App: Fitur dan Cara Penggunaan', priority: 6, category: 'snishop', brief: 'Panduan menggunakan aplikasi mobile SNISHOP' },
  { topic: 'Inventory Management Best Practices di SNISHOP', priority: 5, category: 'snishop', brief: 'Tips mengelola inventori secara efektif' },
  { topic: 'Laporan Keuangan Otomatis dengan SNISHOP ERP', priority: 6, category: 'snishop', brief: 'Memanfaatkan fitur laporan keuangan otomatis' },
  { topic: 'SNISHOP for Beginners: Zero to Hero', priority: 9, category: 'snishop', brief: 'Kurikulum lengkap belajar SNISHOP dari nol' },
  { topic: 'Case Study: Sukses Berjualan di SNISHOP', priority: 7, category: 'snishop', brief: 'Kisah sukses penjual di platform SNISHOP' },
];

/**
 * Seed the content_queue table with initial topics.
 * Skips if topics already exist to avoid duplicates.
 */
async function seed() {
  try {
    // Check if topics already seeded
    const existing = await db.query('SELECT COUNT(*) FROM content_queue');
    const count = parseInt(existing.rows[0].count, 10);

    if (count >= TOPICS.length) {
      console.log(`      Queue already has ${count} items, skipping seed.`);
      return;
    }

    let inserted = 0;
    for (const t of TOPICS) {
      try {
        await db.query(
          `INSERT INTO content_queue (topic, priority, brief)
           VALUES ($1, $2, $3)
           ON CONFLICT DO NOTHING`,
          [t.topic, t.priority, JSON.stringify({ category: t.category, description: t.brief })]
        );
        inserted++;
      } catch (err) {
        // Skip duplicates or constraint violations
        if (!err.message.includes('duplicate') && !err.message.includes('unique')) {
          console.warn(`      Warning: could not insert "${t.topic}": ${err.message}`);
        }
      }
    }

    console.log(`      Inserted ${inserted} topics into content queue.`);
  } catch (error) {
    console.error('Seed failed:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Done.');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { seed, TOPICS };
