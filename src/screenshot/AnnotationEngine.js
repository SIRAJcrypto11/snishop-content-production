const sharp = require('sharp');
const { createCanvas } = require('canvas');
const fs = require('fs');
const logger = require('../utils/logger');

/**
 * AnnotationEngine - Annotates screenshots with visual markers such as
 * circles, arrows, highlights, and text callouts.
 *
 * Uses `sharp` for image compositing and `canvas` for drawing overlays.
 */
class AnnotationEngine {
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  /**
   * Annotate an image with the given list of annotations.
   *
   * @param {string} imagePath - Absolute path to the source image
   * @param {Array<object>} annotations - Array of annotation descriptors
   * @returns {Promise<Buffer>} PNG buffer with annotations composited
   */
  async annotate(imagePath, annotations = []) {
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Image not found: ${imagePath}`);
    }

    const image = sharp(imagePath);
    const metadata = await image.metadata();
    const { width, height } = metadata;

    // Create a transparent canvas overlay at the same dimensions
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Process each annotation
    for (const annotation of annotations) {
      switch (annotation.type) {
        case 'circle':
          this.drawCircle(ctx, annotation);
          break;
        case 'arrow':
          this.drawArrow(ctx, annotation);
          break;
        case 'highlight':
          this.drawHighlight(ctx, annotation);
          break;
        case 'textCallout':
          this.drawTextCallout(ctx, annotation);
          break;
        default:
          logger.warn('Unknown annotation type', { type: annotation.type });
      }
    }

    // Composite the overlay onto the original image
    const overlayBuffer = canvas.toBuffer('image/png');
    const resultBuffer = await image
      .composite([{ input: overlayBuffer, top: 0, left: 0 }])
      .png()
      .toBuffer();

    logger.info('Annotations applied', {
      imagePath,
      annotationCount: annotations.length,
    });

    return resultBuffer;
  }

  // ---------------------------------------------------------------------------
  // Annotation Drawing Methods
  // ---------------------------------------------------------------------------

  /**
   * Draw a red ellipse (circle) at the specified position.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} annotation
   * @param {number} annotation.x - Center X
   * @param {number} annotation.y - Center Y
   * @param {number} annotation.radiusX - Horizontal radius
   * @param {number} annotation.radiusY - Vertical radius
   */
  drawCircle(ctx, annotation) {
    const { x, y, radiusX = 50, radiusY = 50 } = annotation;

    ctx.beginPath();
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 3;
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * Draw a blue arrow from (startX, startY) to (endX, endY) with an arrowhead.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} annotation
   * @param {number} annotation.startX
   * @param {number} annotation.startY
   * @param {number} annotation.endX
   * @param {number} annotation.endY
   */
  drawArrow(ctx, annotation) {
    const { startX, startY, endX, endY } = annotation;
    const headLength = 15;
    const angle = Math.atan2(endY - startY, endX - startX);

    // Main line
    ctx.beginPath();
    ctx.strokeStyle = '#0066FF';
    ctx.lineWidth = 3;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Arrowhead
    ctx.beginPath();
    ctx.fillStyle = '#0066FF';
    ctx.moveTo(endX, endY);
    ctx.lineTo(
      endX - headLength * Math.cos(angle - Math.PI / 6),
      endY - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      endX - headLength * Math.cos(angle + Math.PI / 6),
      endY - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
  }

  /**
   * Draw a yellow semi-transparent highlight rectangle.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} annotation
   * @param {number} annotation.x - Top-left X
   * @param {number} annotation.y - Top-left Y
   * @param {number} annotation.width - Rectangle width
   * @param {number} annotation.height - Rectangle height
   */
  drawHighlight(ctx, annotation) {
    const { x, y, width, height } = annotation;

    ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
    ctx.fillRect(x, y, width, height);
  }

  /**
   * Draw a text callout: a white background box with a black border and
   * bold text inside.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} annotation
   * @param {number} annotation.x - Top-left X
   * @param {number} annotation.y - Top-left Y
   * @param {string} annotation.text - The text to display
   */
  drawTextCallout(ctx, annotation) {
    const { x, y, text } = annotation;

    ctx.font = 'bold 16px Arial';
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const padding = 10;
    const boxWidth = textWidth + padding * 2;
    const boxHeight = 30;

    // White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x, y, boxWidth, boxHeight);

    // Black border
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, boxWidth, boxHeight);

    // Text
    ctx.fillStyle = '#000000';
    ctx.fillText(text, x + padding, y + 22);
  }
}

module.exports = AnnotationEngine;
