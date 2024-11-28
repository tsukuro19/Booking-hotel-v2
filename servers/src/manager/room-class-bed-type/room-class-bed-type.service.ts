import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { RoomClassBedTypeDTO } from './dto/room-class-bed-type.dto';

@Injectable()
export class RoomClassBedTypeService {
    constructor(
        private prismaService: PrismaModuleService
    ) { }

    async createRoomClassBedType(data: RoomClassBedTypeDTO) {
        try {
            const roomClassBedTypeExist = await this.prismaService.roomClassBedType.findMany({
                where: {
                    roomClassId: Number(data.roomClassId),
                    bedTypeId: Number(data.bedTypeId),
                    numBeds: Number(data.numBeds),
                },
            });
            if (roomClassBedTypeExist.length > 0) {
                throw new Error("Room class bed type already exists");
            }
            const roomClassBedType = await this.prismaService.roomClassBedType.create({
                data: {
                    roomClassId: Number(data.roomClassId),
                    bedTypeId: Number(data.bedTypeId),
                    numBeds: Number(data.numBeds),
                    totalPriceRoomBeds: Number(data.totalPriceRoomBeds)
                },
            });
            return {
                message: "Room class bed type created successfully",
                data: roomClassBedType,
            };
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async getRoomClassBedType(id: number) {
        try {
            const roomClassBedType = await this.prismaService.roomClassBedType.findUnique({
                where: {
                    id: id,
                },
            });
            return {
                message: "Room class bed type found",
                data: roomClassBedType,
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    async getListRoomClassBedType(hotelId: number) {
        try {
            const roomClassBedType = await this.prismaService.roomClassBedType.findMany({
                where: {
                    roomClass: {
                        hotelId: Number(hotelId),
                    },
                    bedType: {
                        hotelId: Number(hotelId),
                    },
                },
                select: {
                    roomClass: {
                        select: {
                            className: true,
                        },
                    },
                    bedType: {
                        select: {
                            bedTypeName: true,
                        },
                    },
                    numBeds: true,
                    totalPriceRoomBeds: true,
                    id: true,
                },
            });
            return {
                message: "Room class bed type found",
                data: roomClassBedType,
            };
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async updateRoomClassBedType(id: number, data: RoomClassBedTypeDTO) {
        try {
            const roomClassBedType = await this.prismaService.roomClassBedType.update({
                where: {
                    id: id,
                },
                data: {
                    roomClassId: data.roomClassId,
                    bedTypeId: data.bedTypeId,
                    numBeds: data.numBeds,
                    totalPriceRoomBeds: data.totalPriceRoomBeds,
                },
            });
            return {
                message: "Room class bed type updated successfully",
                data: roomClassBedType,
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteRoomClassBedType(id: number) {
        try {
            const roomClassBedType = await this.prismaService.roomClassBedType.delete({
                where: {
                    id: Number(id),
                },
            });
            return {
                message: "Room class bed type deleted successfully",
                data: roomClassBedType,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}
