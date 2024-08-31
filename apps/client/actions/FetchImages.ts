"use server";
import {
  GetObjectCommand,
  S3Client,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3client = new S3Client({
  region: process.env.REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID || "",
    secretAccessKey: process.env.SECRET_ACCESS_KEY || "",
  },
});

export async function getImageURL(key: string) {
  const command = new GetObjectCommand({
    Bucket: "picsandpixelresource.dev",
    Key: key,
  });
  const url = await getSignedUrl(s3client, command, { expiresIn: 3600 });
  return url;
}

export async function getObjects() {
  const command = new ListObjectsV2Command({
    Bucket: "picsandpixelresource.dev",
    Prefix: "hero/",
  });
  const response = await s3client.send(command);
  return response;
}
