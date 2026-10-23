const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  ImageRun,
  ExternalHyperlink,
  PageBreak,
  UnderlineType,
  Header,
  Footer,
} = require('docx');

const logger = require('../../utils/logger');

/**
 * DOCXGenerator - Generates editable Word documents from Markdown content.
 *
 * Output uses A4 format with SNISHOP brand styling.
 */
class DOCXGenerator {
  /**
   * Generate a DOCX buffer from Markdown content.
   *
   * @param {object} content
   * @param {string} content.title - Document title
   * @param {string} content.markdown - Markdown body to render
   * @param {string} [content.assetsDir] - Path to assets directory for images
   * @returns {Promise<Buffer>} DOCX buffer
   */
  async generate(content) {
    if (!content || !content.markdown) {
      throw new Error('DOCXGenerator.generate requires content with a markdown property');
    }

    const children = this.parseMarkdown(content.markdown, content.assetsDir);

    const doc = new Document({
      sections: [{
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: content.title || 'SNISHOP Document',
                    size: 16,
                    color: '9CA3AF',
                    font: 'Inter',
                  }),
                ],
                alignment: AlignmentType.LEFT,
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: '© 2026 SNISHOP.COM - Semua Hak Dilindungi',
                    size: 16,
                    color: '9CA3AF',
                    font: 'Inter',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        },
        children,
      }],
    });

    const buffer = await Packer.toBuffer(doc);

    logger.info('DOCX generated', {
      title: content.title || 'Untitled',
      sizeBytes: buffer.length,
    });

    return buffer;
  }

  /**
   * Parse Markdown content into DOCX elements.
   *
   * @param {string} markdown
   * @param {string} [assetsDir]
   * @returns {Array} Array of DOCX elements
   */
  parseMarkdown(markdown, assetsDir) {
    const children = [];
    const lines = markdown.split('\n');
    let inCodeBlock = false;
    let codeLines = [];
    let inTable = false;
    let tableRows = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          children.push(this.createCodeBlock(codeLines.join('\n')));
          codeLines = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // Tables
      if (line.startsWith('|') && line.endsWith('|')) {
        const cells = line.split('|').filter(c => c.trim()).map(c => c.trim());
        if (line.includes('---')) {
          // Separator row, skip
          continue;
        }
        tableRows.push(cells);
        inTable = true;
        continue;
      } else if (inTable && tableRows.length > 0) {
        children.push(this.createTable(tableRows));
        tableRows = [];
        inTable = false;
      }

      // Empty lines
      if (line.trim() === '') {
        children.push(new Paragraph({ spacing: { after: 120 } }));
        continue;
      }

      // Headings
      if (line.startsWith('# ')) {
        children.push(new Paragraph({
          text: line.slice(2),
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }));
        continue;
      }
      if (line.startsWith('## ')) {
        children.push(new Paragraph({
          text: line.slice(3),
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 240, after: 120 },
        }));
        continue;
      }
      if (line.startsWith('### ')) {
        children.push(new Paragraph({
          text: line.slice(4),
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 100 },
        }));
        continue;
      }
      if (line.startsWith('#### ')) {
        children.push(new Paragraph({
          text: line.slice(5),
          heading: HeadingLevel.HEADING_4,
          spacing: { before: 160, after: 80 },
        }));
        continue;
      }

      // Images
      const imgMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        const altText = imgMatch[1];
        const imgPath = imgMatch[2];
        if (assetsDir && imgPath.startsWith('../assets/')) {
          const fullPath = path.join(assetsDir, imgPath.replace('../assets/', ''));
          if (fs.existsSync(fullPath)) {
            const imgBuffer = fs.readFileSync(fullPath);
            children.push(new Paragraph({
              children: [
                new ImageRun({
                  data: imgBuffer,
                  transformation: { width: 450, height: 300 },
                  type: 'png',
                }),
              ],
              spacing: { before: 120, after: 120 },
            }));
          }
        }
        continue;
      }

      // Bold text
      if (line.startsWith('**') && line.endsWith('**')) {
        children.push(new Paragraph({
          children: [
            new TextRun({
              text: line.slice(2, -2),
              bold: true,
              size: 21,
              font: 'Inter',
            }),
          ],
          spacing: { after: 120 },
        }));
        continue;
      }

      // Unordered lists
      if (line.startsWith('- ') || line.startsWith('* ')) {
        children.push(new Paragraph({
          children: [
            new TextRun({
              text: '• ',
              size: 21,
              font: 'Inter',
            }),
            new TextRun({
              text: line.slice(2),
              size: 21,
              font: 'Inter',
            }),
          ],
          spacing: { after: 60 },
        }));
        continue;
      }

      // Ordered lists
      const orderedMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (orderedMatch) {
        children.push(new Paragraph({
          children: [
            new TextRun({
              text: `${orderedMatch[1]}. `,
              bold: true,
              size: 21,
              font: 'Inter',
            }),
            new TextRun({
              text: orderedMatch[2],
              size: 21,
              font: 'Inter',
            }),
          ],
          spacing: { after: 60 },
        }));
        continue;
      }

      // Regular paragraphs
      children.push(new Paragraph({
        children: [
          new TextRun({
            text: line,
            size: 21,
            font: 'Inter',
          }),
        ],
        spacing: { after: 120 },
      }));
    }

    // Flush remaining table
    if (inTable && tableRows.length > 0) {
      children.push(this.createTable(tableRows));
    }

    return children;
  }

  /**
   * Create a code block element.
   */
  createCodeBlock(code) {
    return new Paragraph({
      children: [
        new TextRun({
          text: code,
          font: 'Courier New',
          size: 18,
          color: '1E293B',
        }),
      ],
      shading: {
        type: 'clear',
        fill: 'F1F5F9',
      },
      spacing: { before: 120, after: 120 },
    });
  }

  /**
   * Create a table element.
   */
  createTable(rows) {
    if (rows.length === 0) return new Paragraph({});

    const tableRows = rows.map((row, idx) => {
      const isHeader = idx === 0;
      return new TableRow({
        children: row.map(cell => {
          return new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: cell,
                    bold: isHeader,
                    size: 18,
                    font: 'Inter',
                    color: isHeader ? 'FFFFFF' : '1F2937',
                  }),
                ],
              }),
            ],
            shading: isHeader ? { fill: '1E40AF' } : undefined,
          });
        }),
      });
    });

    return new Table({
      rows: tableRows,
      width: { size: 100, type: WidthType.PERCENTAGE },
    });
  }
}

module.exports = DOCXGenerator;
