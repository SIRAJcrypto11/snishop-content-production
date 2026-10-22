const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');

/**
 * ScreenshotCapture - Uses Playwright to capture screenshots of web pages
 * and SNISHOP ERP modules.
 *
 * Screenshots are saved to the `screenshots/` directory at the project root.
 */
class ScreenshotCapture {
  /**
   * Initialize internal state. Browser, context, and page start as null
   * until `initialize()` is called.
   */
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;

    this.screenshotsDir = path.resolve(__dirname, '..', '..', '..', 'screenshots');

    logger.info('ScreenshotCapture created', { screenshotsDir: this.screenshotsDir });
  }

  // ---------------------------------------------------------------------------
  // Browser Lifecycle
  // ---------------------------------------------------------------------------

  /**
   * Launch a headless Chromium browser and create a 1920x1080 browsing context.
   * Also ensures the screenshots output directory exists.
   */
  async initialize() {
    const { chromium } = require('playwright');

    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });
    this.page = await this.context.newPage();

    // Ensure the output directory exists
    fs.mkdirSync(this.screenshotsDir, { recursive: true });

    logger.info('ScreenshotCapture initialized', {
      viewport: '1920x1080',
      headless: false,
    });
  }

  // ---------------------------------------------------------------------------
  // Screenshot Capture
  // ---------------------------------------------------------------------------

  /**
   * Navigate to a URL and capture a screenshot.
   *
   * @param {string} url - The page URL to capture
   * @param {object} [options]
   * @param {string} [options.filename] - Output filename (auto-generated when omitted)
   * @param {{width: number, height: number}} [options.viewport] - Override viewport size
   * @param {boolean} [options.fullPage=false] - Capture the full scrollable page
   * @returns {Promise<{path: string, filename: string, width: number, height: number, url: string, capturedAt: string}>}
   */
  async capture(url, options = {}) {
    if (!this.page) {
      throw new Error('ScreenshotCapture has not been initialized. Call initialize() first.');
    }

    const {
      filename,
      viewport,
      fullPage = false,
    } = options;

    // Optionally resize the viewport for this capture
    if (viewport) {
      await this.page.setViewportSize({ width: viewport.width, height: viewport.height });
    }

    await this.page.goto(url, { waitUntil: 'networkidle' });

    const resolvedFilename = filename || `screenshot-${Date.now()}.png`;
    const outputPath = path.join(this.screenshotsDir, resolvedFilename);

    await this.page.screenshot({ path: outputPath, fullPage });

    const viewportSize = this.page.viewportSize();
    const width = viewportSize ? viewportSize.width : 1920;
    const height = viewportSize ? viewportSize.height : 1080;

    const result = {
      path: outputPath,
      filename: resolvedFilename,
      width,
      height,
      url,
      capturedAt: new Date().toISOString(),
    };

    logger.info('Screenshot captured', { url, filename: resolvedFilename, width, height });

    return result;
  }

  /**
   * Convenience method for capturing SNISHOP ERP module pages.
   *
   * @param {string} module - Module identifier (e.g. 'pos', 'hr', 'inventory')
   * @param {object} [options] - Additional capture options forwarded to `capture()`
   * @returns {Promise<object>} Capture result
   */
  async captureSNISHOPModule(module, options = {}) {
    const baseUrl = process.env.SNISHOP_ERP_URL || 'https://erp.snishop.com';
    const url = `${baseUrl}/${module}`;

    const filename = options.filename || `snishop-${module}-${Date.now()}.png`;

    return this.capture(url, { ...options, filename });
  }

  // ---------------------------------------------------------------------------
  // Cleanup
  // ---------------------------------------------------------------------------

  /**
   * Close the browser and release all resources.
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.context = null;
      this.page = null;
      logger.info('ScreenshotCapture browser closed');
    }
  }
}

module.exports = ScreenshotCapture;
