const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

let client;
const getS3Client = () => {
  if (!client) {
    client = new S3Client({
      endpoint: process.env.S3_ENDPOINT,
      region: process.env.S3_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
      },
      forcePathStyle: true,
    });
  }
  return client;
};

const upload = async (key, body, contentType) => {
  await getS3Client().send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType,
  }));
  
  return {
    url: `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${key}`,
    key
  };
};

const download = async (key) => {
  const result = await getS3Client().send(new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
  }));
  
  return result.Body.transformToByteArray();
};

const deleteFile = async (key) => {
  await getS3Client().send(new DeleteObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
  }));
};

module.exports = { upload, download, delete: deleteFile };
