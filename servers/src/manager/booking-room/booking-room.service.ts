import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class BookingRoomService {
    constructor(
        private prismaService:PrismaModuleService
    ) {}

    async createBookingRoom(bookingId:number){
        const roomAvailable=await this.prismaService.room.findMany({
            where:{
                roomStatus:true
            }
        })
        return await this.prismaService.bookingRoom.create({
            data:{
                bookingId:bookingId,
                roomId:roomAvailable[0].id
            }
        })
    }

    async getBookingRoomByBookingId(bookingId:number){
        return await this.prismaService.bookingRoom.findMany({
            where:{
                bookingId:bookingId
            }
        })
    }

    async getBookingRoomByRoomId(roomId:number){
        return await this.prismaService.bookingRoom.findMany({
            where:{
                roomId:roomId
            }
        })
    }

    async getBookingRoomById(id:number){
        return await this.prismaService.bookingRoom.findUnique({
            where:{
                id:id
            }
        })
    }

    async deleteBookingRoomById(id:number){
        return await this.prismaService.bookingRoom.delete({
            where:{
                id:id
            }
        })
    }

    async updateBookingRoomById(id:number,data:any){
        return await this.prismaService.bookingRoom.update({
            where:{
                id:id
            },
            data:data
        })
    }
}
