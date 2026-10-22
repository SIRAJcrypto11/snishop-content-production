const logger = require('../../utils/logger');

/**
 * PDFGenerator - Generates professional PDF documents from Markdown content
 * using Puppeteer for rendering.
 *
 * Output uses A4 format at 300 DPI quality with SNISHOP brand styling.
 */
class PDFGenerator {
  /**
   * Generate a PDF buffer from Markdown content.
   *
   * @param {object} content
   * @param {string} content.title - Document title (used in header)
   * @param {string} content.markdown - Markdown body to render
   * @param {number} [fontTimeoutMs] - How long to wait for webfonts before
   *   printing with the system fallback
   * @returns {Promise<Buffer>} PDF buffer
   */
  async generate(content, fontTimeoutMs = 5000) {
    if (!content || !content.markdown) {
      throw new Error('PDFGenerator.generate requires content with a markdown property');
    }

    const puppeteer = require('puppeteer');
    const { marked } = require('marked');

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const html = this.renderHTML(content, marked);

    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await this.waitForFonts(page, fontTimeoutMs);

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm',
      },
      displayHeaderFooter: true,
      headerTemplate: this.getHeaderTemplate(content),
      footerTemplate: this.getFooterTemplate(),
    });

    await browser.close();

    logger.info('PDF generated', {
      title: content.title || 'Untitled',
      sizeBytes: pdfBuffer.length,
    });

    return pdfBuffer;
  }

  // ---------------------------------------------------------------------------
  // Font Loading
  // ---------------------------------------------------------------------------

  /**
   * Gives the brand webfont a chance to load without letting a slow or blocked
   * font CDN stall production. Rendering falls back to the system stack.
   *
   * @param {import('puppeteer').Page} page
   * @param {number} [timeoutMs]
   */
  async waitForFonts(page, timeoutMs = 5000) {
    let timer;
    const timeout = new Promise((resolve) => {
      timer = setTimeout(resolve, timeoutMs);
    });

    try {
      await Promise.race([page.evaluateHandle('document.fonts.ready'), timeout]);
    } finally {
      clearTimeout(timer);
    }
  }

  // ---------------------------------------------------------------------------
  // HTML Rendering
  // ---------------------------------------------------------------------------

  /**
   * Convert Markdown content into a fully styled HTML document.
   *
   * Styling uses Inter font, SNISHOP brand colours (#1E40AF for primary,
   * #7C3AED for secondary), and One Dark Pro-inspired code block colours.
   *
   * @param {object} content
   * @param {string} [content.title] - Document title
   * @param {string} content.markdown - Markdown body
   * @param {Function} marked - The `marked` library parse function
   * @returns {string} Complete HTML document string
   */
  renderHTML(content, marked) {
    const title = content.title || 'SNISHOP Document';
    const body = marked.parse(content.markdown);

    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      background: #ffffff;
      font-size: 12pt;
      line-height: 1.7;
      color: #1f2937;
      padding: 0 10mm;
    }

    h1 {
      color: #1E40AF;
      font-size: 24pt;
      font-weight: 700;
      margin-bottom: 16pt;
      border-bottom: 2px solid #1E40AF;
      padding-bottom: 8pt;
    }

    h2 {
      color: #7C3AED;
      font-size: 18pt;
      font-weight: 600;
      margin-top: 20pt;
      margin-bottom: 10pt;
    }

    h3 {
      color: #7C3AED;
      font-size: 14pt;
      font-weight: 600;
      margin-top: 14pt;
      margin-bottom: 8pt;
    }

    p { margin-bottom: 10pt; }

    ul, ol { margin-bottom: 10pt; padding-left: 20pt; }
    li { margin-bottom: 4pt; }

    code {
      font-family: 'Courier New', monospace;
      background: #282c34;
      color: #abb2bf;
      padding: 2pt 4pt;
      border-radius: 3pt;
      font-size: 10pt;
    }

    pre {
      background: #282c34;
      color: #abb2bf;
      padding: 12pt;
      border-radius: 6pt;
      overflow-x: auto;
      margin-bottom: 12pt;
      font-size: 10pt;
      line-height: 1.5;
    }

    pre code {
      background: none;
      padding: 0;
      border-radius: 0;
    }

    img {
      max-width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 4pt;
      margin: 10pt 0;
    }

    blockquote {
      border-left: 4px solid #1E40AF;
      background: #f5f7fb;
      padding: 10pt 12pt;
      color: #111827;
      border-radius: 0 4pt 4pt 0;
      margin-bottom: 12pt;
      page-break-inside: avoid;
    }

    blockquote p { margin-bottom: 6pt; }
    blockquote p:last-child { margin-bottom: 0; }
    blockquote ul, blockquote ol { margin-bottom: 6pt; }

    tr:nth-child(even) td { background: #f8fafc; }

    hr {
      border: none;
      border-top: 1px solid #d1d5db;
      margin: 18pt 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12pt;
    }

    th, td {
      border: 1px solid #d1d5db;
      padding: 6pt 8pt;
      text-align: left;
    }

    th {
      background: #1E40AF;
      color: #ffffff;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <h1>${title}</h1>
  ${body}
</body>
</html>`;
  }

  // ---------------------------------------------------------------------------
  // Header / Footer Templates
  // ---------------------------------------------------------------------------

  /**
   * Header template for PDF pages.
   *
   * @param {object} content
   * @param {string} [content.title]
   * @returns {string} HTML template string
   */
  getHeaderTemplate(content) {
    const title = content.title || 'SNISHOP Document';
    return `<div style="font-family: 'Inter', sans-serif; font-size: 9pt; color: #6b7280; width: 100%; padding: 0 15mm; text-align: left;">
      <span>${title}</span>
    </div>`;
  }

  /**
   * Footer template for PDF pages. Includes page numbers via Puppeteer
   * placeholder classes.
   *
   * @returns {string} HTML template string
   */
  getFooterTemplate() {
    return `<div style="font-family: 'Inter', sans-serif; font-size: 9pt; color: #6b7280; width: 100%; padding: 0 15mm; text-align: center;">
      <span>Halaman <span class="pageNumber"></span> dari <span class="totalPages"></span></span>
    </div>`;
  }
}

module.exports = PDFGenerator;
