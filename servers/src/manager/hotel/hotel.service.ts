import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { HotelDTO } from './dto/hotel.dto';
import { features } from 'process';

@Injectable()
export class HotelService {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        private prismaService: PrismaModuleService
    ) { }

    async postHotel(dataHotel: HotelDTO, managerId: number) {
        const hotelExists = await this.prismaService.hotel.findUnique({
            where: {
                name_hotel: dataHotel.name_hotel,
            },
        });

        if (hotelExists) {
            throw new Error('Hotel already exists');
        } else {
            const hotel = await this.prismaService.hotel.create({
                data: {
                    name_hotel: dataHotel.name_hotel,
                    address: dataHotel.address,
                    country: dataHotel.country,
                    city: dataHotel.city,
                    phone_number: dataHotel.phone_number,
                    room_quantity: dataHotel.room_quantity,
                    description: dataHotel.description,
                    manager: {
                        connect: {
                            id: managerId,  // Use connect with managerId to associate the manager
                        },
                    },
                },
            });
            const imagesUpload = await this.uploadImage(dataHotel.imageUrls);
            imagesUpload.map(async (image) => {
                await this.prismaService.images.create({
                    data: {
                        imageUrl: image,
                        hotelId: hotel.id,
                    },
                });
            })
            return {
                message: "Hotel created successfully",
                data: {
                    hotelDataRes: hotel,
                    imageHotel: imagesUpload
                }
            }
        }
    }

    async uploadImage(file: Express.Multer.File[]) {
        return await this.cloudinaryService.uploadImages(file);
    }

    async deleteHotel(hotelName: string) {
        const hotelFind = await this.prismaService.hotel.findUnique({
            where: {
                name_hotel: hotelName
            }
        })

        const imagesHotel = await this.prismaService.images.findMany({
            where: {
                hotelId: hotelFind.id
            }
        })
        if(imagesHotel.length > 0) {
            const transaction = await this.prismaService.$transaction([
                // Delete all images related to the hotel
                this.prismaService.images.deleteMany({
                    where: { hotelId: hotelFind.id },
                }),
    
                // Delete the hotel itself
                this.prismaService.hotel.delete({
                    where: { id: hotelFind.id },
                }),
            ])
        }
        const transaction = await this.prismaService.$transaction([
            // Delete all images related to the hotel
            this.prismaService.images.deleteMany({
                where: { hotelId: hotelFind.id },
            }),

            // Delete the hotel itself
            this.prismaService.hotel.delete({
                where: { id: hotelFind.id },
            }),
        ])
        return {
            message: "Hotel deleted successfully",
            data: transaction
        }
    }

    async updateHotel(hotelName: string, data: HotelDTO) {
        const hotelUpdate = await this.prismaService.hotel.update({
            where: {
                name_hotel: hotelName
            },
            data: {
                name_hotel: data.name_hotel,
                address: data.address,
                country: data.country,
                city: data.city,
                phone_number: data.phone_number,
                room_quantity: data.room_quantity,
                description: data.description
            }
        })
        const imagesHotel = await this.prismaService.images.findMany({
            where: {
                hotelId: hotelUpdate.id
            }
        })
        for (let i = 0; i < imagesHotel.length; i++) {
            const imagesUpload = await this.uploadImage(data.imageUrls);
            imagesUpload.map(async (image) => {
                await this.prismaService.images.update({
                    where: {
                        id: imagesHotel[i].id
                    },
                    data: {
                        imageUrl: image,
                    },
                });
            })
        }
        return {
            status: 200,
            message: "Hotel updated successfully",
            data: hotelUpdate
        }
    }

    async getListHotel() {
        // Fetch hotels with their associated images using `include`
        const hotelsWithImages = await this.prismaService.hotel.findMany({
            include: {
                image: true, // Include the related images for each hotel
            },
        });

        // Map over the hotels and extract the image URLs into an array
        return hotelsWithImages.map(hotel => ({
            ...hotel,
            imageUrls: hotel.image.map(image => image.imageUrl), // Map to an array of image URLs
        }));
    }

    async getListHotelWithFeature() {
        try {
            // Fetch hotels with their associated images using `include`
            const hotelsWithImagesFeature = await this.prismaService.hotel.findMany({
                include: {
                    image: true, // Include the related images for each hotel
                    features: true
                },
            });
            return hotelsWithImagesFeature.map(hotel => ({
                ...hotel,
                imageUrls: hotel.image.map(image => image.imageUrl), // Map to an array of image URLs
                features: hotel.features.map(features =>features.featureName)
            }));
        } catch (error) {
            throw new Error("Error")
        }
    }

    async getDetailHotelByName(hotelName: string) {
        const hotel = await this.prismaService.hotel.findUnique({
            where: {
                name_hotel: hotelName
            },
            include: {
                image: true, // Include the related images for the hotel
            },
        });
        return {
            ...hotel,
            imageUrls: hotel.image.map(image => image.imageUrl), // Return an array of image URLs
        };
    }

    async getDetailHotelById(hotelId: number) {
        const hotel = await this.prismaService.hotel.findUnique({
            where: {
                id: Number(hotelId)
            },
            include: {
                image: true, // Include the related images for the hotel
            },
        });
        return {
            ...hotel,
            imageUrls: hotel.image.map(image => image.imageUrl), // Return an array of image URLs
        };
    }

    async getDetailHotelWithFullById(hotelId: number) {
        const hotel = await this.prismaService.hotel.findUnique({
            where: {
                id: Number(hotelId)
            },
            include: {
                image: true, // Include the related images for the hotel
                features: true,
                bedTypes: true,
                roomClasses: true,
                manager: true
            },
        });
        return {
            ...hotel,
            imageUrls: hotel.image.map(image => image.imageUrl), // Return an array of image URLs
            features: hotel.features.map(features => features.featureName),
            roomClasses: hotel.roomClasses.map(roomClass => roomClass.className),
            roomClassesPrice: hotel.roomClasses.map(roomClass => roomClass.basePrice),
            bedTypes: hotel.bedTypes.map(bedType => bedType.bedTypeName),
            managerId: hotel.manager.id
        };
    }
}
