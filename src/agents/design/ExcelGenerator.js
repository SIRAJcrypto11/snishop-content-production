const ExcelJS = require('exceljs');
const logger = require('../../utils/logger');

/**
 * ExcelGenerator - Generates Excel workbooks from structured data using
 * ExcelJS. Supports multiple sheets per workbook with styled headers.
 */
class ExcelGenerator {
  /**
   * Generate an Excel buffer from structured data.
   *
   * @param {object} data
   * @param {string} [data.title] - Workbook title / filename hint
   * @param {Array<object>} data.sheets - Array of sheet descriptors
   * @param {string} data.sheets[].name - Sheet name
   * @param {string[]} data.sheets[].headers - Column headers
   * @param {Array<Array>} data.sheets[].rows - Row data (arrays of cell values)
   * @returns {Promise<Buffer>} XLSX buffer
   */
  async generate(data) {
    if (!data || !Array.isArray(data.sheets)) {
      throw new Error('ExcelGenerator.generate requires data with a sheets array');
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'SNISHOP';
    workbook.created = new Date();

    for (const sheetData of data.sheets) {
      this._addSheet(workbook, sheetData);
    }

    const buffer = await workbook.xlsx.writeBuffer();

    logger.info('Excel workbook generated', {
      title: data.title || 'Untitled',
      sheetCount: data.sheets.length,
      sizeBytes: buffer.byteLength,
    });

    return Buffer.from(buffer);
  }

  // ---------------------------------------------------------------------------
  // Internal Helpers
  // ---------------------------------------------------------------------------

  /**
   * Add a single sheet to the workbook with styled header row and data rows.
   *
   * @param {ExcelJS.Workbook} workbook
   * @param {object} sheetData
   * @param {string} sheetData.name
   * @param {string[]} sheetData.headers
   * @param {Array<Array>} sheetData.rows
   * @private
   */
  _addSheet(workbook, sheetData) {
    const sheet = workbook.addWorksheet(sheetData.name);

    // Add header row
    if (sheetData.headers && sheetData.headers.length > 0) {
      const headerRow = sheet.addRow(sheetData.headers);

      // Style the header row: bold, blue background (#1E40AF), white text
      headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
      headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF1E40AF' },
      };
      headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    }

    // Add data rows
    if (Array.isArray(sheetData.rows)) {
      for (const row of sheetData.rows) {
        sheet.addRow(row);
      }
    }

    // Auto-fit columns to width 20
    if (sheetData.headers) {
      sheet.columns = sheetData.headers.map((header) => ({
        header,
        key: header.toLowerCase().replace(/\s+/g, '_'),
        width: 20,
      }));
    }
  }
}

module.exports = ExcelGenerator;
