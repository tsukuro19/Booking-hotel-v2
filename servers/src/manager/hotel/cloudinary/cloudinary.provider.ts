import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';  // Make sure CLOUDINARY is a string or token

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: process.env.CLOUDINARY_NAME, // Replace with your actual Cloudinary cloud name
      api_key: process.env.CLOUDINARY_API_KEY,       // Replace with your actual API key
      api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your actual API secret
    });
  },
};
