import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { RoomDto } from './dto/room.dto';

@Injectable()
export class RoomService {
    constructor(
        private prismaService:PrismaModuleService
    ) {}

    async createRoom(data:RoomDto){
        try{
            const roomExist=await this.prismaService.room.findMany({
                where:{
                    roomNumber:data.roomNumber,
                    hotelId:Number(data.hotelId)
                }
            })
            if(roomExist.length>0){
                throw new Error("Room already exist");
            }
            const room=await this.prismaService.room.create({
                data:{
                    roomNumber:data.roomNumber,
                    floorId:data.floorId,
                    roomClassId:data.roomClassId,
                    hotelId:data.hotelId,
                    roomStatus:true,
                    dayAvailableFrom:new Date(),
                },
            });
            return{
                message:"Room created successfully",
                data:room,
            }
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }

    async getListRoom(hotelId:number){
        try{
            const room=await this.prismaService.room.findMany({
                where:{
                    hotelId:Number(hotelId)
                },
                select:{
                    roomClass:{
                        select:{
                            className:true,
                        }
                    },
                    floor:{
                        select:{
                            floorNumber:true,
                        }
                    },
                    roomNumber:true,
                    roomStatus:true,
                    dayAvailableFrom:true,
                    id:true,
                }
            });
            if(!room){
                throw new Error("Room not found");
            }
            return{
                message:"Room list successfully",
                data:room,
            }
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }

    async getRoomByNumber(roomNumber:string){
        try{
            const room=await this.prismaService.room.findMany({
                where:{
                    roomNumber:roomNumber
                }
            });
            return{
                message:"Room list successfully",
                data:room,
            }
        }catch(error){
            throw new Error(error);
        }
    }

    async updateRoom(roomNumber:number,data:any){
        try{
            const room=await this.prismaService.room.update({
                where:{
                    id:Number(roomNumber),
                    hotelId:data.hotelId
                },
                data:{
                    roomStatus:data.roomStatus,
                    dayAvailableFrom:data.dayAvailableFrom,
                },
            });
            return{
                message:"Room updated successfully",
                data:room,
            }
        }catch(error){
            throw new Error(error);
        }
    }

    async deleteRoom(roomNumber:number){
        try{
            const room=await this.prismaService.room.delete({
                where:{
                    id:roomNumber
                }
            });
            return{
                message:"Room deleted successfully",
                data:room,
            }
        }catch(error){
            throw new Error(error);
        }
    }

    async getListRoomWithRoomClass(){
        try{
            const room=await this.prismaService.room.findMany({
                include:{
                    roomClass:true,
                    hotel:true,
                }
            });
            return{
                message:"Room list successfully",
                data:room,
            }
        }catch(error){
            throw new Error(error);
        }
    }

    async getListRoomWithFloor(){
        try{
            const room=await this.prismaService.room.findMany({
                include:{
                    floor:true,
                    hotel:true,
                }
            });
            return{
                message:"Room list successfully",
                data:room,
            }
        }catch(error){
            throw new Error(error);
        }
    }
}
