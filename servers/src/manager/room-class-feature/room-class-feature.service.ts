import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { RoomClassFeatureDTO } from './dto/room-class-feature.dto';
import { features } from 'process';

@Injectable()
export class RoomClassFeatureService {
    constructor(
        private prismaService: PrismaModuleService
    ) { }

    async createRoomClassFeature(data: RoomClassFeatureDTO) {
        try {
            const nameRoomClass = await this.prismaService.roomClass.findUnique({
                where: {
                    id: data.roomClassId
                }
            });
            const dataResponse = {
                roomClass: nameRoomClass.className,
                features: []
            };
            data.featureId.map(async (featureId) => {
                await this.prismaService.roomClassFeature.create({
                    data: {
                        roomClassId: data.roomClassId,
                        featureId: featureId,
                    }
                });
                const featureName = await this.prismaService.feature.findUnique({
                    where: {
                        id: featureId
                    }
                });
                dataResponse.features.push({
                    featureName: featureName.featureName,
                    featurePrice: featureName.featurePrice
                });
            });
            return {
                message: 'Room class feature created successfully',
                data: dataResponse
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async getListRoomClassFeature(hotelId: number) {
        try {
            const roomClassFeature = await this.prismaService.roomClassFeature.findMany({
                where: {
                    roomClass: {
                        hotelId: Number(hotelId),
                    },
                    feature: {
                        hotelId: Number(hotelId),
                    }
                },
                select: {
                    roomClass: {
                        select: {
                            className: true,
                            basePrice: true
                        },
                    },
                    feature: {
                        select: {
                            featureName: true,
                            featurePrice: true
                        },
                    },
                    roomClassId: true,
                    featureId: true,
                },
            });

            const roomClassWithTotalPrice = roomClassFeature.reduce((acc, curr) => {
                const roomClassId = curr.roomClassId;
                const featurePrice = curr.feature.featurePrice;

                const existingRoomClass = acc.find(item => item.roomClassId === roomClassId);

                if (!existingRoomClass) {
                    acc.push({
                        roomClassId,
                        className: curr.roomClass.className,
                        basePrice: curr.roomClass.basePrice,
                        totalFeaturePrice: featurePrice,
                        features: [curr.feature.featureName],
                    });
                } else {
                    const existingFeature = existingRoomClass.features.find(feature => feature === curr.feature.featureName);
                    if (!existingFeature) {
                        existingRoomClass.features.push(curr.feature.featureName);
                    }
                    existingRoomClass.totalFeaturePrice += featurePrice;
                }

                return acc;
            }, []);

            roomClassWithTotalPrice.forEach(roomClass => {
                const totalPriceWithFeature = roomClass.basePrice + roomClass.totalFeaturePrice;
                roomClass.totalPriceRoomClassWithFeature = totalPriceWithFeature;
            });

            return {
                message: 'Room class feature retrieved successfully',
                data: roomClassWithTotalPrice
            };
        } catch (error) {
            throw new Error(error);
        }
    }



    async deleteRoomClassFeature(roomClassId: number) {
        try {
            const roomClassFeature = await this.prismaService.roomClassFeature.deleteMany({
                where: {
                    roomClassId: Number(roomClassId),
                }
            });
            return {
                message: 'Room class feature deleted successfully',
                data: roomClassFeature
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateRoomClassFeature(id: number, data: RoomClassFeatureDTO) {
        try {
            const roomClassFeature = {

            }
            data.featureId.map(async (featureId) => {
                await this.prismaService.roomClassFeature.updateMany({
                    where: {
                        roomClassId: data.roomClassId,

                    },
                    data: {
                        featureId: featureId,
                    }
                });
            });
            return {
                message: 'Room class feature updated successfully',
                data: roomClassFeature
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async getRoomClassFeatureById(roomClassId: number,hotelId:number) {
        try {
            // Fetching roomClass and related features
            const roomClassWithFeatures = await this.prismaService.roomClass.findUnique({
                where: {
                    hotelId: Number(hotelId),
                    id: Number(roomClassId)
                },
                select: {
                    className: true,
                    roomClassFeature: {
                        select: {
                            feature: {
                                select: {
                                    featureName: true,
                                    featurePrice: true
                                }
                            }
                        }
                    }
                }
            });

            // Transforming data to match the desired JSON structure
            if (!roomClassWithFeatures) {
                throw new Error('Room class not found');
            }

            const result = {
                roomClass: roomClassWithFeatures.className,
                feature: roomClassWithFeatures.roomClassFeature.map(rcf => ({
                    featureName: rcf.feature.featureName,
                    featurePrice: rcf.feature.featurePrice
                }))
            };

            return {
                message: 'Room class and features retrieved successfully',
                data: result
            };
        } catch (error) {
            throw new Error(error.message || 'Error retrieving room class with features');
        }
    }

}
