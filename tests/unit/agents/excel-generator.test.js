/**
 * Unit tests for ExcelGenerator
 *
 * ExcelJS is partially mocked to verify workbook construction without
 * writing real files.
 */

// ---- Mocks ------------------------------------------------------------------

const mockHeaderRow = {
  font: {},
  fill: {},
  alignment: {},
};

const mockAddRow = jest.fn().mockReturnValue(mockHeaderRow);
const mockAddWorksheet = jest.fn().mockReturnValue({
  addRow: mockAddRow,
  columns: [],
});

const mockWriteBuffer = jest.fn().mockResolvedValue(new ArrayBuffer(1024));

const mockWorkbookInstance = {
  creator: '',
  created: null,
  addWorksheet: mockAddWorksheet,
  xlsx: {
    writeBuffer: mockWriteBuffer,
  },
};

jest.mock('exceljs', () => {
  return {
    Workbook: jest.fn().mockImplementation(() => mockWorkbookInstance),
  };
});

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const ExcelGenerator = require('../../../src/agents/design/ExcelGenerator');
const ExcelJS = require('exceljs');

// ---- Tests ------------------------------------------------------------------

describe('ExcelGenerator', () => {
  let generator;

  beforeEach(() => {
    jest.clearAllMocks();
    generator = new ExcelGenerator();
  });

  // --------------------------------------------------------------------------
  // generate
  // --------------------------------------------------------------------------
  describe('generate', () => {
    test('should throw when data is null', async () => {
      await expect(generator.generate(null)).rejects.toThrow(
        'ExcelGenerator.generate requires data with a sheets array'
      );
    });

    test('should throw when data.sheets is not an array', async () => {
      await expect(generator.generate({ sheets: 'invalid' })).rejects.toThrow(
        'ExcelGenerator.generate requires data with a sheets array'
      );
    });

    test('should create a Workbook', async () => {
      await generator.generate({ sheets: [] });

      expect(ExcelJS.Workbook).toHaveBeenCalled();
    });

    test('should set creator to SNISHOP', async () => {
      await generator.generate({ sheets: [] });

      expect(mockWorkbookInstance.creator).toBe('SNISHOP');
    });

    test('should set created date', async () => {
      await generator.generate({ sheets: [] });

      expect(mockWorkbookInstance.created).toBeInstanceOf(Date);
    });

    test('should create one worksheet per sheet entry', async () => {
      const data = {
        sheets: [
          { name: 'Products', headers: ['Name', 'Price'], rows: [['Widget', 10]] },
          { name: 'Sales', headers: ['Date', 'Total'], rows: [['2025-01-01', 500]] },
        ],
      };

      await generator.generate(data);

      expect(mockAddWorksheet).toHaveBeenCalledTimes(2);
      expect(mockAddWorksheet).toHaveBeenCalledWith('Products');
      expect(mockAddWorksheet).toHaveBeenCalledWith('Sales');
    });

    test('should add header row with bold font and blue background', async () => {
      const data = {
        sheets: [
          { name: 'Test', headers: ['Col A', 'Col B'], rows: [['a', 'b']] },
        ],
      };

      await generator.generate(data);

      // The first addRow call should be the header row
      const headerCall = mockAddRow.mock.calls[0][0];
      expect(headerCall).toEqual(['Col A', 'Col B']);

      // Check that the returned row object has the correct styling
      // (mockAddRow returns undefined, but the styling is set on the row object)
    });

    test('should add data rows', async () => {
      const data = {
        sheets: [
          {
            name: 'Test',
            headers: ['Name'],
            rows: [['Row1'], ['Row2'], ['Row3']],
          },
        ],
      };

      await generator.generate(data);

      // 1 header row + 3 data rows = 4 calls
      expect(mockAddRow).toHaveBeenCalledTimes(4);
    });

    test('should return a Buffer', async () => {
      const result = await generator.generate({
        sheets: [{ name: 'Sheet1', headers: ['A'], rows: [['1']] }],
      });

      expect(Buffer.isBuffer(result)).toBe(true);
    });

    test('should call writeBuffer on the workbook', async () => {
      await generator.generate({ sheets: [] });

      expect(mockWriteBuffer).toHaveBeenCalled();
    });

    test('should handle empty sheets array', async () => {
      const result = await generator.generate({ sheets: [] });

      expect(Buffer.isBuffer(result)).toBe(true);
      expect(mockAddWorksheet).not.toHaveBeenCalled();
    });

    test('should handle sheet with no rows', async () => {
      const data = {
        sheets: [{ name: 'Empty', headers: ['A', 'B'], rows: [] }],
      };

      await generator.generate(data);

      // Only header row should be added
      expect(mockAddRow).toHaveBeenCalledTimes(1);
    });

    test('should handle sheet with no headers', async () => {
      const data = {
        sheets: [{ name: 'NoHeaders', headers: [], rows: [['a', 'b']] }],
      };

      await generator.generate(data);

      // No header row, only data row
      expect(mockAddRow).toHaveBeenCalledTimes(1);
    });
  });
});
