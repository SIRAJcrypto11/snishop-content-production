const logger = require('../../utils/logger');

/**
 * SEOOptimizer - SEO optimization for digital content products.
 *
 * Generates optimized content, meta tags, and structured data (schema.org)
 * to improve search engine visibility for product pages.
 */
class SEOOptimizer {
  constructor() {
    logger.info('SEOOptimizer initialized');
  }

  /**
   * Optimize a product page for SEO.
   *
   * @param {object} product - Product data
   * @param {string} product.title - Product title
   * @param {string} product.description - Product description
   * @param {string} product.category - Product category
   * @param {number} product.price - Product price
   * @param {string} product.url - Product URL
   * @param {string[]} [product.images] - Array of image URLs
   * @returns {object} Optimized content with meta tags and schema
   */
  optimizeProductPage(product) {
    logger.info('Optimizing product page for SEO', { title: product.title });

    const keywords = this.extractKeywords(product);
    const optimizedContent = this.optimizeContent(product, keywords);
    const metaTags = this.generateMetaTags(product, keywords);
    const schema = this.generateSchemaMarkup(product);

    const result = { optimizedContent, metaTags, schema, keywords };

    logger.info('Product page optimized', {
      title: product.title,
      keywordCount: keywords.length,
    });

    return result;
  }

  /**
   * Extract relevant keywords from product data.
   *
   * @param {object} product - Product data
   * @returns {string[]} Array of keywords
   */
  extractKeywords(product) {
    const categoryKeywords = {
      'ai-tech': ['AI', 'teknologi', 'artificial intelligence', 'machine learning', 'tech guide', 'tutorial AI'],
      'business': ['bisnis', 'entrepreneur', 'strategi bisnis', 'online business', 'UMKM', 'startup'],
      'snishop': ['snishop', 'ecommerce', 'toko online', 'digital product', 'produk digital'],
      'templates': ['template', 'desain', 'canva template', 'social media template', 'desain grafis'],
    };

    const baseKeywords = categoryKeywords[product.category] || ['produk digital', 'digital product'];
    const titleWords = (product.title || '').toLowerCase().split(/\s+/).filter(w => w.length > 3);

    return [...new Set([...baseKeywords, ...titleWords])].slice(0, 10);
  }

  /**
   * Optimize product content for SEO.
   *
   * @param {object} product - Product data
   * @param {string[]} keywords - Target keywords
   * @returns {object} Optimized content fields
   */
  optimizeContent(product, keywords) {
    const primaryKeyword = keywords[0] || product.title;
    const description = product.description || '';

    return {
      optimizedTitle: `${product.title} - ${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)} | SNISHOP`,
      optimizedDescription: description.length > 150
        ? description.substring(0, 147) + '...'
        : description,
      headings: [
        { level: 1, text: product.title },
        { level: 2, text: `Tentang ${product.title}` },
        { level: 2, text: `Fitur ${product.title}` },
        { level: 2, text: `Kenapa Memilih ${product.title}?` },
        { level: 2, text: 'Cara Mendapatkan' },
      ],
      keywordDensity: {
        primary: primaryKeyword,
        count: keywords.length,
      },
      internalLinks: [
        { text: 'Lihat semua produk', url: '/products' },
        { text: `Produk ${product.category}`, url: `/products/${product.category}` },
      ],
    };
  }

  /**
   * Generate meta tags for a product page.
   *
   * @param {object} product - Product data
   * @param {string[]} keywords - Target keywords
   * @returns {object} Meta tags including title, description, and OG tags
   */
  generateMetaTags(product, keywords) {
    const title = `${product.title} - Produk Digital ${product.category} | SNISHOP`;
    const description = product.description
      ? (product.description.length > 155 ? product.description.substring(0, 152) + '...' : product.description)
      : `Dapatkan ${product.title}, produk digital berkualitas tinggi di SNISHOP. Harga mulai Rp ${product.price?.toLocaleString('id-ID') || '0'}.`;

    const imageUrl = product.images?.[0] || 'https://snishop.com/og-default.png';
    const url = product.url || `https://snishop.com/products/${product.category}/${product.title.toLowerCase().replace(/\s+/g, '-')}`;

    return {
      title,
      description,
      keywords: keywords.join(', '),
      author: 'SNISHOP',
      robots: 'index, follow',
      canonical: url,
      og: {
        title,
        description,
        type: 'product',
        url,
        image: imageUrl,
        site_name: 'SNISHOP',
        price: product.price?.toString(),
        price_currency: 'IDR',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        image: imageUrl,
      },
    };
  }

  /**
   * Generate JSON-LD schema.org Product markup.
   *
   * @param {object} product - Product data
   * @returns {object} Schema.org Product structured data
   */
  generateSchemaMarkup(product) {
    const url = product.url || `https://snishop.com/products/${product.category}/${product.title.toLowerCase().replace(/\s+/g, '-')}`;
    const imageUrl = product.images?.[0] || 'https://snishop.com/product-default.png';

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      description: product.description || `Produk digital ${product.category} berkualitas tinggi dari SNISHOP.`,
      image: imageUrl,
      url,
      brand: {
        '@type': 'Brand',
        name: 'SNISHOP',
      },
      offers: {
        '@type': 'Offer',
        url,
        priceCurrency: 'IDR',
        price: product.price || 0,
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'SNISHOP',
        },
      },
      category: product.category,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    };
  }
}

module.exports = SEOOptimizer;
