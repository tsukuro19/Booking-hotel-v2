import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { RoomClassDto } from './dto/room-class.dto';

@Injectable()
export class RoomClassService {
    constructor(
        private prismaService:PrismaModuleService
    ){}

    async createRoomClass(data:RoomClassDto){
        try{
            const roomClassExist=await this.prismaService.roomClass.findMany({
                where:{
                    className:data.className,
                    hotelId:Number(data.hotelId)
                }
            })
            if(roomClassExist.length>0){
                throw new Error("Room class already exist")
            }
            const roomClassCreate=await this.prismaService.roomClass.create({
                data:{
                    className:data.className,
                    basePrice:Number(data.basePrice),
                    hotelId:Number(data.hotelId)
                }
            })
            return {
                message:"Room class created successfully",
                data:roomClassCreate
            }
        }catch(error){
            console.log(error);
            throw new Error(error)
        }
    }

    async getListRoomClass(hotelId:number){
        try{
            const roomClassList=await this.prismaService.roomClass.findMany({
                where:{
                    hotelId:Number(hotelId)
                },
                include:{
                    hotel:true,
                },
            })
            return {
                message:"Room class list",
                data:roomClassList
            }
        }catch(error){
            console.log(error)
            throw new Error(error)
        }
    }

    async deleteRoomClass(id:number){
        try{
            const roomClassDelete=await this.prismaService.roomClass.delete({
                where:{
                    id:Number(id)
                }
            })
            return {
                message:"Room class deleted successfully",
                data:roomClassDelete
            }
        }catch(error){
            console.log(error);
            throw new Error(error)
        }
    }

    async updateRoomClass(id:number,data:RoomClassDto){
        try{
            const roomClassUpdate=await this.prismaService.roomClass.update({
                where:{
                    id:Number(id)
                },
                data:{
                    className:data.className,
                    basePrice:Number(data.basePrice),
                    hotelId:Number(data.hotelId)
                }
            })
            return {
                message:"Room class updated successfully",
                data:roomClassUpdate
            }
        }catch(error){
            console.log(error);
            throw new Error(error)
        }
    }

    async getRoomClassByName(name:string){
        try{
            const roomClass=await this.prismaService.roomClass.findMany({
                where:{
                    className:name
                },
                include:{
                    hotel:true,
                }
            })
            if(!roomClass){
                throw new Error("Room class not found")
            }
            return {
                message:"Room class",
                data:roomClass
            }
        }catch(error){
            throw new Error(error)
        }
    }

    async getRoomClassByBedType(bedType:string){
        try{
            const roomClassWithBedType=await this.prismaService.roomClass.findMany({
                where:{
                    roomClassBedType:{
                        some:{
                            bedType:{
                                bedTypeName:bedType,
                            },
                        },
                    },
                },
                include:{
                    roomClassBedType:{
                        include:{
                            bedType:true,
                        },
                    },
                },
            });
            return {
                message:"Room class",
                data:roomClassWithBedType
            }
        }catch(error){
            throw new Error(error)
        }
    }

    async getRoomClassByFeature(featureName:string){
        try{
            const roomClassWithFeature=await this.prismaService.roomClass.findMany({
                where:{
                    roomClassFeature:{
                        some:{
                            feature:{
                                featureName:featureName,
                            },
                        },
                    },
                },
                include:{
                    roomClassFeature:{
                        include:{
                            feature:true,
                        },
                    },
                },
            });
            return {
                message:"Room class",
                data:roomClassWithFeature
            }
        }catch(error){
            throw new Error(error)
        }
    }
}
