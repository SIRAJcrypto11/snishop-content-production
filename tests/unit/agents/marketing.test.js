/**
 * Unit tests for Marketing Agents
 *
 * Tests MarketingAgent, TikTokPublisher, InstagramPublisher,
 * EmailPublisher, and SEOOptimizer.
 */

// ---- Mocks ------------------------------------------------------------------

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const MarketingAgent = require('../../../src/agents/marketing/MarketingAgent');
const TikTokPublisher = require('../../../src/agents/marketing/TikTokPublisher');
const InstagramPublisher = require('../../../src/agents/marketing/InstagramPublisher');
const EmailPublisher = require('../../../src/agents/marketing/EmailPublisher');
const SEOOptimizer = require('../../../src/agents/marketing/SEOOptimizer');

// ---- Shared Test Data -------------------------------------------------------

const sampleProduct = {
  title: 'Panduan AI untuk Bisnis',
  description: 'Pelajari cara menggunakan AI untuk mengembangkan bisnis Anda',
  category: 'ai-tech',
  price: 150000,
  pages: 80,
  qualityScore: 92,
  images: ['cover.png', 'page1.png'],
  url: 'https://snishop.com/products/ai-tech/panduan-ai-bisnis',
};

// =============================================================================
// MarketingAgent
// =============================================================================

describe('MarketingAgent', () => {
  let agent;

  beforeEach(() => {
    jest.clearAllMocks();
    agent = new MarketingAgent();
  });

  describe('initialization', () => {
    test('should use gpt-4 model', () => {
      expect(agent.model).toBe('gpt-4');
    });
  });

  describe('generatePromotionalAssets', () => {
    test('should return all four asset types', async () => {
      const assets = await agent.generatePromotionalAssets(sampleProduct);

      expect(assets).toHaveProperty('caption');
      expect(assets).toHaveProperty('hashtags');
      expect(assets).toHaveProperty('tiktokScript');
      expect(assets).toHaveProperty('instagramCarousel');
    });

    test('caption should be a non-empty string', async () => {
      const assets = await agent.generatePromotionalAssets(sampleProduct);
      expect(typeof assets.caption).toBe('string');
      expect(assets.caption.length).toBeGreaterThan(0);
    });

    test('hashtags should be a non-empty array', async () => {
      const assets = await agent.generatePromotionalAssets(sampleProduct);
      expect(Array.isArray(assets.hashtags)).toBe(true);
      expect(assets.hashtags.length).toBeGreaterThan(0);
    });

    test('all hashtags should start with #', async () => {
      const assets = await agent.generatePromotionalAssets(sampleProduct);
      assets.hashtags.forEach((tag) => {
        expect(tag.startsWith('#')).toBe(true);
      });
    });
  });

  describe('generateCaption', () => {
    test('should include product title', async () => {
      const caption = await agent.generateCaption(sampleProduct);
      expect(caption).toContain(sampleProduct.title);
    });

    test('should include price', async () => {
      const caption = await agent.generateCaption(sampleProduct);
      expect(caption).toContain('150.000');
    });

    test('should include category', async () => {
      const caption = await agent.generateCaption(sampleProduct);
      expect(caption).toContain(sampleProduct.category);
    });
  });

  describe('generateHashtags', () => {
    test('should include SNISHOP base hashtag', async () => {
      const hashtags = await agent.generateHashtags(sampleProduct);
      expect(hashtags).toContain('#SNISHOP');
    });

    test('should include category-specific hashtags for ai-tech', async () => {
      const hashtags = await agent.generateHashtags(sampleProduct);
      expect(hashtags).toContain('#AITech');
    });

    test('should return business hashtags for business category', async () => {
      const hashtags = await agent.generateHashtags({ ...sampleProduct, category: 'business' });
      expect(hashtags).toContain('#Business');
    });

    test('should limit to 15 hashtags', async () => {
      const hashtags = await agent.generateHashtags(sampleProduct);
      expect(hashtags.length).toBeLessThanOrEqual(15);
    });
  });

  describe('generateTikTokScript', () => {
    test('should return object with hook, body, and cta', async () => {
      const script = await agent.generateTikTokScript(sampleProduct);
      expect(script).toHaveProperty('hook');
      expect(script).toHaveProperty('body');
      expect(script).toHaveProperty('cta');
    });

    test('hook should contain attention-grabbing text', async () => {
      const script = await agent.generateTikTokScript(sampleProduct);
      expect(script.hook.length).toBeGreaterThan(10);
    });

    test('cta should include price', async () => {
      const script = await agent.generateTikTokScript(sampleProduct);
      expect(script.cta).toContain('150.000');
    });

    test('should include duration', async () => {
      const script = await agent.generateTikTokScript(sampleProduct);
      expect(script).toHaveProperty('duration');
    });
  });

  describe('generateInstagramCarousel', () => {
    test('should return carousel with slides array', async () => {
      const carousel = await agent.generateInstagramCarousel(sampleProduct);
      expect(carousel).toHaveProperty('slides');
      expect(Array.isArray(carousel.slides)).toBe(true);
    });

    test('should have multiple slides', async () => {
      const carousel = await agent.generateInstagramCarousel(sampleProduct);
      expect(carousel.slides.length).toBeGreaterThanOrEqual(4);
    });

    test('first slide should be cover type', async () => {
      const carousel = await agent.generateInstagramCarousel(sampleProduct);
      expect(carousel.slides[0].type).toBe('cover');
    });

    test('last slide should be CTA type', async () => {
      const carousel = await agent.generateInstagramCarousel(sampleProduct);
      const lastSlide = carousel.slides[carousel.slides.length - 1];
      expect(lastSlide.type).toBe('cta');
    });

    test('each slide should have type, title, and visual', async () => {
      const carousel = await agent.generateInstagramCarousel(sampleProduct);
      carousel.slides.forEach((slide) => {
        expect(slide).toHaveProperty('type');
        expect(slide).toHaveProperty('title');
        expect(slide).toHaveProperty('visual');
      });
    });
  });
});

// =============================================================================
// TikTokPublisher
// =============================================================================

describe('TikTokPublisher', () => {
  let publisher;

  beforeEach(() => {
    jest.clearAllMocks();
    publisher = new TikTokPublisher();
  });

  describe('publishVideo', () => {
    test('should return success response with videoId', async () => {
      const video = { path: '/tmp/video.mp4', title: 'Test Video' };
      const result = await publisher.publishVideo(video, 'Test caption', ['#tag1']);

      expect(result.success).toBe(true);
      expect(result.videoId).toBeDefined();
      expect(result.url).toBeDefined();
    });

    test('should include caption and hashtags in response', async () => {
      const video = { path: '/tmp/video.mp4', title: 'Test Video' };
      const result = await publisher.publishVideo(video, 'My caption', ['#a', '#b']);

      expect(result.caption).toBe('My caption');
      expect(result.hashtags).toEqual(['#a', '#b']);
    });
  });

  describe('generateVideoFromProduct', () => {
    test('should return video concept with scenes', () => {
      const concept = publisher.generateVideoFromProduct(sampleProduct);

      expect(concept).toHaveProperty('scenes');
      expect(Array.isArray(concept.scenes)).toBe(true);
      expect(concept.scenes.length).toBeGreaterThanOrEqual(3);
    });

    test('should include hook as first scene', () => {
      const concept = publisher.generateVideoFromProduct(sampleProduct);
      expect(concept.scenes[0].type).toBe('hook');
    });

    test('should include CTA as last scene', () => {
      const concept = publisher.generateVideoFromProduct(sampleProduct);
      const lastScene = concept.scenes[concept.scenes.length - 1];
      expect(lastScene.type).toBe('cta');
    });

    test('should include product title in concept', () => {
      const concept = publisher.generateVideoFromProduct(sampleProduct);
      expect(concept.title).toBe(sampleProduct.title);
    });

    test('should set appropriate style based on category', () => {
      const techConcept = publisher.generateVideoFromProduct({ ...sampleProduct, category: 'ai-tech' });
      expect(techConcept.style).toBe('tech-demo');

      const templateConcept = publisher.generateVideoFromProduct({ ...sampleProduct, category: 'templates' });
      expect(templateConcept.style).toBe('product-showcase');
    });
  });
});

// =============================================================================
// InstagramPublisher
// =============================================================================

describe('InstagramPublisher', () => {
  let publisher;

  beforeEach(() => {
    jest.clearAllMocks();
    publisher = new InstagramPublisher();
  });

  describe('createCarousel', () => {
    test('should return success response with postId', async () => {
      const result = await publisher.createCarousel(sampleProduct);

      expect(result.success).toBe(true);
      expect(result.postId).toBeDefined();
      expect(result.type).toBe('carousel');
    });

    test('should include slide count', async () => {
      const result = await publisher.createCarousel(sampleProduct);
      expect(result.slideCount).toBe(sampleProduct.images.length);
    });

    test('should default to 6 slides when no images provided', async () => {
      const productWithoutImages = { ...sampleProduct, images: undefined };
      const result = await publisher.createCarousel(productWithoutImages);
      expect(result.slideCount).toBe(6);
    });
  });

  describe('publishReel', () => {
    test('should return success response with reelId', async () => {
      const video = { path: '/tmp/reel.mp4', title: 'Test Reel' };
      const result = await publisher.publishReel(video, 'Reel caption');

      expect(result.success).toBe(true);
      expect(result.reelId).toBeDefined();
      expect(result.type).toBe('reel');
      expect(result.caption).toBe('Reel caption');
    });
  });
});

// =============================================================================
// EmailPublisher
// =============================================================================

describe('EmailPublisher', () => {
  let publisher;

  beforeEach(() => {
    jest.clearAllMocks();
    publisher = new EmailPublisher();
  });

  describe('initialization', () => {
    test('should have default from email', () => {
      expect(publisher.fromEmail).toBe('noreply@snishop.com');
    });

    test('should have default from name', () => {
      expect(publisher.fromName).toBe('SNISHOP');
    });
  });

  describe('sendWeeklyNewsletter', () => {
    test('should return success response', async () => {
      const products = [sampleProduct];
      const result = await publisher.sendWeeklyNewsletter(products);

      expect(result.success).toBe(true);
      expect(result.type).toBe('weekly-newsletter');
      expect(result.productCount).toBe(1);
    });

    test('should handle multiple products', async () => {
      const products = [sampleProduct, { ...sampleProduct, title: 'Product 2' }];
      const result = await publisher.sendWeeklyNewsletter(products);

      expect(result.productCount).toBe(2);
    });

    test('should include messageId', async () => {
      const result = await publisher.sendWeeklyNewsletter([sampleProduct]);
      expect(result.messageId).toBeDefined();
    });
  });

  describe('sendNewProductAnnouncement', () => {
    test('should return success response', async () => {
      const result = await publisher.sendNewProductAnnouncement(sampleProduct);

      expect(result.success).toBe(true);
      expect(result.type).toBe('new-product-announcement');
      expect(result.product).toBe(sampleProduct.title);
    });

    test('should include messageId', async () => {
      const result = await publisher.sendNewProductAnnouncement(sampleProduct);
      expect(result.messageId).toBeDefined();
    });
  });
});

// =============================================================================
// SEOOptimizer
// =============================================================================

describe('SEOOptimizer', () => {
  let optimizer;

  beforeEach(() => {
    jest.clearAllMocks();
    optimizer = new SEOOptimizer();
  });

  describe('optimizeProductPage', () => {
    test('should return optimized content, meta tags, schema, and keywords', () => {
      const result = optimizer.optimizeProductPage(sampleProduct);

      expect(result).toHaveProperty('optimizedContent');
      expect(result).toHaveProperty('metaTags');
      expect(result).toHaveProperty('schema');
      expect(result).toHaveProperty('keywords');
    });
  });

  describe('extractKeywords', () => {
    test('should return category-specific keywords for ai-tech', () => {
      const keywords = optimizer.extractKeywords(sampleProduct);
      expect(keywords).toContain('AI');
      expect(keywords).toContain('tech guide');
    });

    test('should return business keywords for business category', () => {
      const keywords = optimizer.extractKeywords({ ...sampleProduct, category: 'business' });
      expect(keywords).toContain('bisnis');
    });

    test('should limit to 10 keywords', () => {
      const keywords = optimizer.extractKeywords(sampleProduct);
      expect(keywords.length).toBeLessThanOrEqual(10);
    });

    test('should include title words longer than 3 chars', () => {
      const keywords = optimizer.extractKeywords(sampleProduct);
      // "Panduan" is > 3 chars from title
      expect(keywords.some(k => k.toLowerCase().includes('panduan'))).toBe(true);
    });
  });

  describe('generateMetaTags', () => {
    test('should include title with SNISHOP branding', () => {
      const keywords = ['AI', 'bisnis'];
      const meta = optimizer.generateMetaTags(sampleProduct, keywords);

      expect(meta.title).toContain('SNISHOP');
      expect(meta.title).toContain(sampleProduct.title);
    });

    test('should include description', () => {
      const keywords = ['AI'];
      const meta = optimizer.generateMetaTags(sampleProduct, keywords);
      expect(meta.description).toBeDefined();
      expect(meta.description.length).toBeGreaterThan(0);
    });

    test('should truncate long descriptions to 155 chars', () => {
      const longProduct = { ...sampleProduct, description: 'A'.repeat(200) };
      const keywords = ['AI'];
      const meta = optimizer.generateMetaTags(longProduct, keywords);
      expect(meta.description.length).toBeLessThanOrEqual(155);
      expect(meta.description).toContain('...');
    });

    test('should include OG tags', () => {
      const keywords = ['AI'];
      const meta = optimizer.generateMetaTags(sampleProduct, keywords);

      expect(meta.og).toBeDefined();
      expect(meta.og.title).toBeDefined();
      expect(meta.og.type).toBe('product');
      expect(meta.og.price_currency).toBe('IDR');
    });

    test('should include Twitter card tags', () => {
      const keywords = ['AI'];
      const meta = optimizer.generateMetaTags(sampleProduct, keywords);

      expect(meta.twitter).toBeDefined();
      expect(meta.twitter.card).toBe('summary_large_image');
    });
  });

  describe('generateSchemaMarkup', () => {
    test('should return valid schema.org Product markup', () => {
      const schema = optimizer.generateSchemaMarkup(sampleProduct);

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Product');
      expect(schema.name).toBe(sampleProduct.title);
    });

    test('should include offer with price in IDR', () => {
      const schema = optimizer.generateSchemaMarkup(sampleProduct);

      expect(schema.offers).toBeDefined();
      expect(schema.offers.priceCurrency).toBe('IDR');
      expect(schema.offers.price).toBe(sampleProduct.price);
      expect(schema.offers.availability).toContain('InStock');
    });

    test('should include brand information', () => {
      const schema = optimizer.generateSchemaMarkup(sampleProduct);

      expect(schema.brand).toBeDefined();
      expect(schema.brand.name).toBe('SNISHOP');
    });

    test('should include aggregate rating', () => {
      const schema = optimizer.generateSchemaMarkup(sampleProduct);

      expect(schema.aggregateRating).toBeDefined();
      expect(schema.aggregateRating['@type']).toBe('AggregateRating');
    });
  });
});
