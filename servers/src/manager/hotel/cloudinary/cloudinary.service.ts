import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { Express } from 'express';

@Injectable()
export class CloudinaryService {
  // Upload multiple images in base64 format and return their URLs
  async uploadImages(files: Express.Multer.File[]): Promise<string[]> {
    const uploadPromises = files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        v2.uploader.upload(file.toString(),{
          resource_type:'auto',
        },(error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (error) return reject(error);
          resolve(result?.url);  // Resolve with the image URL
        });
      });
    });

    // Wait for all upload promises to finish and return an array of URLs
    return await Promise.all(uploadPromises);
  }
}
