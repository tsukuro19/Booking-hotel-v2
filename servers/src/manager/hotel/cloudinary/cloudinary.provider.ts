import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';  // Make sure CLOUDINARY is a string or token

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: "docaqm5np", // Replace with your actual Cloudinary cloud name
      api_key: "991611721466389",       // Replace with your actual API key
      api_secret: "IsV8qlH_OEOGM1fxqWjxBmr_IRQ", // Replace with your actual API secret
    });
  },
};
