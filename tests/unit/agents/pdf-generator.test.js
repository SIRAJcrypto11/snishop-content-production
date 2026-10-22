/**
 * Unit tests for PDFGenerator
 *
 * Puppeteer and marked are mocked so tests run in isolation without
 * requiring a browser or network access.
 */

// ---- Mocks ------------------------------------------------------------------

const mockPdf = jest.fn().mockResolvedValue(Buffer.from('fake-pdf-buffer'));
const mockSetContent = jest.fn().mockResolvedValue(undefined);
const mockClose = jest.fn().mockResolvedValue(undefined);
const mockEvaluateHandle = jest.fn().mockResolvedValue({});
const mockNewPage = jest.fn().mockResolvedValue({
  setContent: mockSetContent,
  evaluateHandle: mockEvaluateHandle,
  pdf: mockPdf,
});
const mockLaunch = jest.fn().mockResolvedValue({
  newPage: mockNewPage,
  close: mockClose,
});

jest.mock('puppeteer', () => ({
  launch: mockLaunch,
}));

const mockParse = jest.fn().mockReturnValue('<h1>Title</h1><p>Body</p>');

jest.mock('marked', () => ({
  marked: {
    parse: mockParse,
  },
}));

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const PDFGenerator = require('../../../src/agents/design/PDFGenerator');

// ---- Tests ------------------------------------------------------------------

describe('PDFGenerator', () => {
  let generator;

  beforeEach(() => {
    jest.clearAllMocks();
    generator = new PDFGenerator();
  });

  // --------------------------------------------------------------------------
  // generate
  // --------------------------------------------------------------------------
  describe('generate', () => {
    test('should throw when content is null', async () => {
      await expect(generator.generate(null)).rejects.toThrow(
        'PDFGenerator.generate requires content with a markdown property'
      );
    });

    test('should throw when content.markdown is missing', async () => {
      await expect(generator.generate({ title: 'Test' })).rejects.toThrow(
        'PDFGenerator.generate requires content with a markdown property'
      );
    });

    test('should launch Puppeteer browser', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(mockLaunch).toHaveBeenCalledWith({ headless: 'new' });
    });

    test('should create a new page', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(mockNewPage).toHaveBeenCalled();
    });

    test('should set page content with rendered HTML', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(mockSetContent).toHaveBeenCalledWith(
        expect.stringContaining('<h1>Title</h1>'),
        expect.objectContaining({ waitUntil: 'domcontentloaded' })
      );
    });

    test('should wait for webfonts before printing', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(mockEvaluateHandle).toHaveBeenCalledWith('document.fonts.ready');
      expect(mockEvaluateHandle.mock.invocationCallOrder[0])
        .toBeLessThan(mockPdf.mock.invocationCallOrder[0]);
    });

    test('should still print when the font CDN never resolves', async () => {
      mockEvaluateHandle.mockImplementationOnce(() => new Promise(() => {}));

      const result = await generator.generate({ title: 'Test', markdown: '# Hello' }, 50);

      expect(Buffer.isBuffer(result)).toBe(true);
      expect(mockPdf).toHaveBeenCalled();
    });

    test('should generate PDF with A4 format', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(mockPdf).toHaveBeenCalledWith(
        expect.objectContaining({
          format: 'A4',
          printBackground: true,
        })
      );
    });

    test('should generate PDF with correct margins', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      const pdfArgs = mockPdf.mock.calls[0][0];
      expect(pdfArgs.margin).toEqual({
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm',
      });
    });

    test('should include header and footer templates', async () => {
      await generator.generate({ title: 'My Doc', markdown: '# Hello' });

      const pdfArgs = mockPdf.mock.calls[0][0];
      expect(pdfArgs.displayHeaderFooter).toBe(true);
      expect(pdfArgs.headerTemplate).toContain('My Doc');
      expect(pdfArgs.footerTemplate).toContain('pageNumber');
      expect(pdfArgs.footerTemplate).toContain('totalPages');
    });

    test('should close browser after generation', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(mockClose).toHaveBeenCalled();
    });

    test('should return a Buffer', async () => {
      const result = await generator.generate({ title: 'Test', markdown: '# Hello' });

      expect(Buffer.isBuffer(result)).toBe(true);
    });

    test('should call marked.parse with the markdown content', async () => {
      await generator.generate({ title: 'Test', markdown: '# Hello World' });

      expect(mockParse).toHaveBeenCalledWith('# Hello World');
    });
  });

  // --------------------------------------------------------------------------
  // renderHTML
  // --------------------------------------------------------------------------
  describe('renderHTML', () => {
    test('should return a complete HTML document', () => {
      const html = generator.renderHTML(
        { title: 'Test', markdown: '# Hello' },
        { parse: () => '<h1>Hello</h1>' }
      );

      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<h1>Hello</h1>');
    });

    test('should include Inter font', () => {
      const html = generator.renderHTML(
        { title: 'Test', markdown: '# Hello' },
        { parse: () => '<p>body</p>' }
      );

      expect(html).toContain('Inter');
    });

    test('should include SNISHOP brand color #1E40AF', () => {
      const html = generator.renderHTML(
        { title: 'Test', markdown: '# Hello' },
        { parse: () => '<p>body</p>' }
      );

      expect(html).toContain('#1E40AF');
    });

    test('should include SNISHOP brand color #7C3AED', () => {
      const html = generator.renderHTML(
        { title: 'Test', markdown: '# Hello' },
        { parse: () => '<p>body</p>' }
      );

      expect(html).toContain('#7C3AED');
    });

    test('should include One Dark Pro code block colors', () => {
      const html = generator.renderHTML(
        { title: 'Test', markdown: '# Hello' },
        { parse: () => '<p>body</p>' }
      );

      expect(html).toContain('#282c34');
      expect(html).toContain('#abb2bf');
    });

    test('should use title in HTML', () => {
      const html = generator.renderHTML(
        { title: 'My Document', markdown: '# Hello' },
        { parse: () => '<p>body</p>' }
      );

      expect(html).toContain('My Document');
    });

    test('should default title to SNISHOP Document', () => {
      const html = generator.renderHTML(
        { markdown: '# Hello' },
        { parse: () => '<p>body</p>' }
      );

      expect(html).toContain('SNISHOP Document');
    });
  });

  // --------------------------------------------------------------------------
  // getHeaderTemplate
  // --------------------------------------------------------------------------
  describe('getHeaderTemplate', () => {
    test('should include the document title', () => {
      const header = generator.getHeaderTemplate({ title: 'Laporan POS' });

      expect(header).toContain('Laporan POS');
    });

    test('should default to SNISHOP Document when no title', () => {
      const header = generator.getHeaderTemplate({});

      expect(header).toContain('SNISHOP Document');
    });
  });

  // --------------------------------------------------------------------------
  // getFooterTemplate
  // --------------------------------------------------------------------------
  describe('getFooterTemplate', () => {
    test('should include page number placeholders', () => {
      const footer = generator.getFooterTemplate();

      expect(footer).toContain('pageNumber');
      expect(footer).toContain('totalPages');
    });

    test('should include Hal label', () => {
      const footer = generator.getFooterTemplate();

      expect(footer).toContain('Halaman');
    });
  });
});
