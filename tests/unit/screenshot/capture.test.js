/**
 * Unit tests for ScreenshotCapture
 *
 * Playwright and logger are mocked so tests run in isolation without
 * requiring a browser or network access.
 */

// ---- Mocks ------------------------------------------------------------------

const mockGoto = jest.fn().mockResolvedValue(undefined);
const mockScreenshot = jest.fn().mockResolvedValue(Buffer.from('fake-png'));
const mockSetViewportSize = jest.fn().mockResolvedValue(undefined);
const mockViewportSize = jest.fn().mockReturnValue({ width: 1920, height: 1080 });
const mockNewPage = jest.fn().mockResolvedValue({
  goto: mockGoto,
  screenshot: mockScreenshot,
  setViewportSize: mockSetViewportSize,
  viewportSize: mockViewportSize,
});
const mockNewContext = jest.fn().mockResolvedValue({
  newPage: mockNewPage,
});
const mockLaunch = jest.fn().mockResolvedValue({
  newContext: mockNewContext,
  close: jest.fn().mockResolvedValue(undefined),
});

jest.mock('playwright', () => ({
  chromium: {
    launch: mockLaunch,
  },
}));

jest.mock('fs', () => {
  const actual = jest.requireActual('fs');
  return {
    ...actual,
    mkdirSync: jest.fn(),
  };
});

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const ScreenshotCapture = require('../../../src/screenshot/ScreenshotCapture');
const fs = require('fs');

// ---- Tests ------------------------------------------------------------------

describe('ScreenshotCapture', () => {
  let capture;

  beforeEach(() => {
    jest.clearAllMocks();
    capture = new ScreenshotCapture();
  });

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  describe('constructor', () => {
    test('should initialize browser, context, page as null', () => {
      expect(capture.browser).toBeNull();
      expect(capture.context).toBeNull();
      expect(capture.page).toBeNull();
    });

    test('should set screenshotsDir', () => {
      expect(capture.screenshotsDir).toBeDefined();
      expect(typeof capture.screenshotsDir).toBe('string');
    });
  });

  // --------------------------------------------------------------------------
  // initialize
  // --------------------------------------------------------------------------
  describe('initialize', () => {
    test('should launch Chromium with headless:false', async () => {
      await capture.initialize();

      expect(mockLaunch).toHaveBeenCalledWith({ headless: false });
    });

    test('should create a 1920x1080 context', async () => {
      await capture.initialize();

      expect(mockNewContext).toHaveBeenCalledWith({
        viewport: { width: 1920, height: 1080 },
      });
    });

    test('should create a new page', async () => {
      await capture.initialize();

      expect(mockNewPage).toHaveBeenCalled();
      expect(capture.page).not.toBeNull();
    });

    test('should create the screenshots directory', async () => {
      await capture.initialize();

      expect(fs.mkdirSync).toHaveBeenCalledWith(capture.screenshotsDir, { recursive: true });
    });
  });

  // --------------------------------------------------------------------------
  // capture
  // --------------------------------------------------------------------------
  describe('capture', () => {
    beforeEach(async () => {
      await capture.initialize();
    });

    test('should throw if not initialized', async () => {
      const uninit = new ScreenshotCapture();
      await expect(uninit.capture('https://example.com')).rejects.toThrow(
        'ScreenshotCapture has not been initialized'
      );
    });

    test('should navigate to the given URL', async () => {
      await capture.capture('https://example.com');

      expect(mockGoto).toHaveBeenCalledWith('https://example.com', { waitUntil: 'networkidle' });
    });

    test('should take a screenshot and save to screenshots directory', async () => {
      const result = await capture.capture('https://example.com', { filename: 'test.png' });

      expect(mockScreenshot).toHaveBeenCalledWith(
        expect.objectContaining({ path: expect.stringContaining('test.png'), fullPage: false })
      );
      expect(result.filename).toBe('test.png');
    });

    test('should auto-generate filename when not provided', async () => {
      const result = await capture.capture('https://example.com');

      expect(result.filename).toMatch(/^screenshot-\d+\.png$/);
    });

    test('should return proper result structure', async () => {
      const result = await capture.capture('https://example.com', { filename: 'out.png' });

      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('filename', 'out.png');
      expect(result).toHaveProperty('width');
      expect(result).toHaveProperty('height');
      expect(result).toHaveProperty('url', 'https://example.com');
      expect(result).toHaveProperty('capturedAt');
    });

    test('should set viewport when option is provided', async () => {
      await capture.capture('https://example.com', {
        viewport: { width: 1366, height: 768 },
      });

      expect(mockSetViewportSize).toHaveBeenCalledWith({ width: 1366, height: 768 });
    });

    test('should pass fullPage option to screenshot', async () => {
      await capture.capture('https://example.com', { fullPage: true });

      expect(mockScreenshot).toHaveBeenCalledWith(
        expect.objectContaining({ fullPage: true })
      );
    });
  });

  // --------------------------------------------------------------------------
  // captureSNISHOPModule
  // --------------------------------------------------------------------------
  describe('captureSNISHOPModule', () => {
    beforeEach(async () => {
      await capture.initialize();
    });

    test('should construct URL from base and module name', async () => {
      await capture.captureSNISHOPModule('pos');

      expect(mockGoto).toHaveBeenCalledWith(
        expect.stringContaining('/pos'),
        expect.any(Object)
      );
    });

    test('should auto-generate filename with module name', async () => {
      const result = await capture.captureSNISHOPModule('hr');

      expect(result.filename).toMatch(/^snishop-hr-\d+\.png$/);
    });

    test('should use custom filename when provided', async () => {
      const result = await capture.captureSNISHOPModule('inventory', {
        filename: 'custom.png',
      });

      expect(result.filename).toBe('custom.png');
    });

    test('should use SNISHOP_ERP_URL env var when set', async () => {
      process.env.SNISHOP_ERP_URL = 'https://custom-erp.example.com';

      await capture.captureSNISHOPModule('pos');

      expect(mockGoto).toHaveBeenCalledWith(
        'https://custom-erp.example.com/pos',
        expect.any(Object)
      );

      delete process.env.SNISHOP_ERP_URL;
    });
  });

  // --------------------------------------------------------------------------
  // close
  // --------------------------------------------------------------------------
  describe('close', () => {
    test('should set browser, context, page to null after closing', async () => {
      await capture.initialize();
      await capture.close();

      expect(capture.browser).toBeNull();
      expect(capture.context).toBeNull();
      expect(capture.page).toBeNull();
    });

    test('should be safe to call close when not initialized', async () => {
      await expect(capture.close()).resolves.toBeUndefined();
    });
  });
});
