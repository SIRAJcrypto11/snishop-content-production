/**
 * Unit tests for AnnotationEngine
 *
 * sharp and canvas are mocked so tests run in isolation without requiring
 * native image libraries.
 */

// ---- Mocks ------------------------------------------------------------------

const mockComposite = jest.fn().mockReturnValue({
  png: jest.fn().mockReturnValue({
    toBuffer: jest.fn().mockResolvedValue(Buffer.from('annotated-png')),
  }),
});

const mockMetadata = jest.fn().mockResolvedValue({ width: 800, height: 600 });

const mockSharpInstance = {
  metadata: mockMetadata,
  composite: mockComposite,
  png: jest.fn().mockReturnThis(),
  toBuffer: jest.fn().mockResolvedValue(Buffer.from('png-data')),
};

jest.mock('sharp', () => {
  return jest.fn().mockImplementation(() => mockSharpInstance);
});

const mockEllipse = jest.fn();
const mockStroke = jest.fn();
const mockBeginPath = jest.fn();
const mockClosePath = jest.fn();
const mockFillRect = jest.fn();
const mockStrokeRect = jest.fn();
const mockFillText = jest.fn();
const mockMoveTo = jest.fn();
const mockLineTo = jest.fn();
const mockFill = jest.fn();
const mockMeasureText = jest.fn().mockReturnValue({ width: 100 });

const mockCtx = {
  beginPath: mockBeginPath,
  closePath: mockClosePath,
  moveTo: mockMoveTo,
  lineTo: mockLineTo,
  ellipse: mockEllipse,
  fillRect: mockFillRect,
  strokeRect: mockStrokeRect,
  fillText: mockFillText,
  stroke: mockStroke,
  fill: mockFill,
  measureText: mockMeasureText,
  font: '',
  fillStyle: '',
  strokeStyle: '',
  lineWidth: 0,
  fillStyle: '',
};

const mockCanvas = {
  getContext: jest.fn().mockReturnValue(mockCtx),
  toBuffer: jest.fn().mockReturnValue(Buffer.from('overlay-png')),
};

jest.mock('canvas', () => ({
  createCanvas: jest.fn().mockReturnValue(mockCanvas),
}));

jest.mock('fs', () => {
  const actual = jest.requireActual('fs');
  return {
    ...actual,
    existsSync: jest.fn().mockReturnValue(true),
  };
});

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const AnnotationEngine = require('../../../src/screenshot/AnnotationEngine');
const sharp = require('sharp');
const { createCanvas } = require('canvas');
const fs = require('fs');

// ---- Tests ------------------------------------------------------------------

describe('AnnotationEngine', () => {
  let engine;

  beforeEach(() => {
    jest.clearAllMocks();
    engine = new AnnotationEngine();
  });

  // --------------------------------------------------------------------------
  // annotate
  // --------------------------------------------------------------------------
  describe('annotate', () => {
    test('should throw when image file does not exist', async () => {
      fs.existsSync.mockReturnValueOnce(false);

      await expect(engine.annotate('/missing/image.png', [])).rejects.toThrow(
        'Image not found'
      );
    });

    test('should load image with sharp and get metadata', async () => {
      await engine.annotate('/path/to/image.png', []);

      expect(sharp).toHaveBeenCalledWith('/path/to/image.png');
      expect(mockMetadata).toHaveBeenCalled();
    });

    test('should create a canvas overlay with matching dimensions', async () => {
      await engine.annotate('/path/to/image.png', []);

      expect(createCanvas).toHaveBeenCalledWith(800, 600);
    });

    test('should composite overlay onto original image', async () => {
      await engine.annotate('/path/to/image.png', []);

      expect(mockComposite).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ top: 0, left: 0 }),
        ])
      );
    });

    test('should return a Buffer', async () => {
      const result = await engine.annotate('/path/to/image.png', []);

      expect(Buffer.isBuffer(result)).toBe(true);
    });

    test('should process circle annotations', async () => {
      const annotations = [
        { type: 'circle', x: 100, y: 200, radiusX: 50, radiusY: 50 },
      ];

      await engine.annotate('/path/to/image.png', annotations);

      expect(mockEllipse).toHaveBeenCalled();
      expect(mockStroke).toHaveBeenCalled();
    });

    test('should process arrow annotations', async () => {
      const annotations = [
        { type: 'arrow', startX: 10, startY: 20, endX: 100, endY: 200 },
      ];

      await engine.annotate('/path/to/image.png', annotations);

      expect(mockMoveTo).toHaveBeenCalledWith(10, 20);
      expect(mockLineTo).toHaveBeenCalledWith(100, 200);
    });

    test('should process highlight annotations', async () => {
      const annotations = [
        { type: 'highlight', x: 50, y: 50, width: 200, height: 100 },
      ];

      await engine.annotate('/path/to/image.png', annotations);

      expect(mockFillRect).toHaveBeenCalledWith(50, 50, 200, 100);
    });

    test('should process textCallout annotations', async () => {
      const annotations = [
        { type: 'textCallout', x: 10, y: 10, text: 'Hello' },
      ];

      await engine.annotate('/path/to/image.png', annotations);

      expect(mockFillText).toHaveBeenCalledWith('Hello', expect.any(Number), expect.any(Number));
      expect(mockStrokeRect).toHaveBeenCalled();
    });

    test('should handle multiple annotations in order', async () => {
      const annotations = [
        { type: 'highlight', x: 0, y: 0, width: 100, height: 100 },
        { type: 'circle', x: 50, y: 50, radiusX: 30, radiusY: 30 },
        { type: 'arrow', startX: 0, startY: 0, endX: 50, endY: 50 },
      ];

      await engine.annotate('/path/to/image.png', annotations);

      expect(mockFillRect).toHaveBeenCalled();
      expect(mockEllipse).toHaveBeenCalled();
      expect(mockMoveTo).toHaveBeenCalled();
    });

    test('should warn on unknown annotation type', async () => {
      const logger = require('../../../src/utils/logger');
      const annotations = [{ type: 'unknown', x: 0, y: 0 }];

      await engine.annotate('/path/to/image.png', annotations);

      expect(logger.warn).toHaveBeenCalledWith(
        'Unknown annotation type',
        expect.objectContaining({ type: 'unknown' })
      );
    });
  });

  // --------------------------------------------------------------------------
  // drawCircle
  // --------------------------------------------------------------------------
  describe('drawCircle', () => {
    test('should draw a red ellipse with 3px width', () => {
      engine.drawCircle(mockCtx, { x: 100, y: 100, radiusX: 40, radiusY: 40 });

      expect(mockCtx.strokeStyle).toBe('#FF0000');
      expect(mockCtx.lineWidth).toBe(3);
      expect(mockEllipse).toHaveBeenCalledWith(100, 100, 40, 40, 0, 0, Math.PI * 2);
    });

    test('should use default radii when not specified', () => {
      engine.drawCircle(mockCtx, { x: 50, y: 50 });

      expect(mockEllipse).toHaveBeenCalledWith(50, 50, 50, 50, 0, 0, Math.PI * 2);
    });
  });

  // --------------------------------------------------------------------------
  // drawArrow
  // --------------------------------------------------------------------------
  describe('drawArrow', () => {
    test('should draw a blue arrow', () => {
      engine.drawArrow(mockCtx, {
        startX: 0, startY: 0, endX: 100, endY: 100,
      });

      expect(mockCtx.strokeStyle).toBe('#0066FF');
      expect(mockCtx.fillStyle).toBe('#0066FF');
      expect(mockCtx.lineWidth).toBe(3);
    });
  });

  // --------------------------------------------------------------------------
  // drawHighlight
  // --------------------------------------------------------------------------
  describe('drawHighlight', () => {
    test('should draw a yellow semi-transparent rectangle', () => {
      engine.drawHighlight(mockCtx, {
        x: 10, y: 20, width: 200, height: 100,
      });

      expect(mockCtx.fillStyle).toBe('rgba(255, 255, 0, 0.3)');
      expect(mockFillRect).toHaveBeenCalledWith(10, 20, 200, 100);
    });
  });

  // --------------------------------------------------------------------------
  // drawTextCallout
  // --------------------------------------------------------------------------
  describe('drawTextCallout', () => {
    test('should draw white background with black border and text', () => {
      engine.drawTextCallout(mockCtx, { x: 5, y: 10, text: 'Test Label' });

      expect(mockCtx.font).toBe('bold 16px Arial');
      expect(mockCtx.strokeStyle).toBe('#000000');
      // fillStyle is set to #FFFFFF for background, then #000000 for text
      expect(mockFillRect).toHaveBeenCalled();
      expect(mockStrokeRect).toHaveBeenCalled();
      expect(mockFillText).toHaveBeenCalledWith('Test Label', expect.any(Number), expect.any(Number));
    });
  });
});
