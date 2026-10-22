const { upload, download, delete: deleteFile } = require('../../src/config/storage');
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');

jest.mock('@aws-sdk/client-s3');

describe('Storage Module', () => {
  const mockSend = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    S3Client.mockImplementation(() => ({
      send: mockSend,
    }));
    process.env.S3_ENDPOINT = 'http://localhost:9000';
    process.env.S3_BUCKET = 'test-bucket';
    process.env.S3_REGION = 'us-east-1';
    process.env.S3_ACCESS_KEY = 'test-key';
    process.env.S3_SECRET_KEY = 'test-secret';
  });

  describe('upload', () => {
    it('should call PutObjectCommand with correct parameters', async () => {
      mockSend.mockResolvedValueOnce({});
      const body = Buffer.from('test content');
      const result = await upload('test/file.txt', body, 'text/plain');

      expect(mockSend).toHaveBeenCalledWith(expect.any(PutObjectCommand));
      expect(result).toEqual({
        url: 'http://localhost:9000/test-bucket/test/file.txt',
        key: 'test/file.txt',
      });
    });
  });

  describe('download', () => {
    it('should call GetObjectCommand and return byte array', async () => {
      const mockBody = { transformToByteArray: jest.fn().mockResolvedValueOnce(new Uint8Array([1, 2, 3])) };
      mockSend.mockResolvedValueOnce({ Body: mockBody });

      const result = await download('test/file.txt');

      expect(mockSend).toHaveBeenCalledWith(expect.any(GetObjectCommand));
      expect(result).toEqual(new Uint8Array([1, 2, 3]));
    });
  });

  describe('delete', () => {
    it('should call DeleteObjectCommand with correct parameters', async () => {
      mockSend.mockResolvedValueOnce({});

      await deleteFile('test/file.txt');

      expect(mockSend).toHaveBeenCalledWith(expect.any(DeleteObjectCommand));
    });
  });
});
