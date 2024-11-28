import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { FloorDTO } from './dto/floor.dto';

@Injectable()
export class FloorService {
    constructor(
        private prismaService:PrismaModuleService
    ){}

    async createFloor(dataFloor:FloorDTO){
        try{
            const floorExist=await this.prismaService.floor.findMany({
                where:{
                    floorNumber:dataFloor.floorNumber,
                    hotelId:Number(dataFloor.hotelId)
                }
            })
    
            if(floorExist.length>0){
                throw new Error("Floor already exist");
            }
    
            const floorCreate=await this.prismaService.floor.create({
                data:{
                    floorNumber:dataFloor.floorNumber,
                    hotelId:dataFloor.hotelId
                }
            })
            return {
                message:"Floor created successfully",
                data:floorCreate
            }
        }catch(error){
            throw new Error(error.message);
        }
    }

    async deleteFloor(floorId:number){
        try{
            const floorDelete=await this.prismaService.floor.findUnique({
                where:{
                    id:Number(floorId)
                }
            })
            return {
                message:"Floor deleted successfully",
                data:floorDelete
            }
        }catch(error){
            console.log(error);
            throw new Error(error.message);
        }
    }

    async getListFloor(hotelId:number){
        try{
            const floorList=await this.prismaService.floor.findMany({
                where:{
                    hotelId:Number(hotelId)
                },
                include:{
                    hotel:true,
                },
            });
            if(!floorList){
                throw new Error("Floor not found");
            }
            return {
                message:"Floor list",
                data:floorList
            }
        }catch(error){
            throw new Error(error.message);
        }
    }

    async getFloorById(floorId:number){
        try{
            const floor=await this.prismaService.floor.findUnique({
                where:{
                    id:Number(floorId)
                }
            })
            if(!floor){
                throw new Error("Floor not found");
            }
            return {
                message:"Floor",
                data:floor
            }
        }catch(error){
            throw new Error(error.message);
        }
    }

    async updateFloor(data:FloorDTO,floorId:number){
        try{
            const floorUpdate=await this.prismaService.floor.update({
                where:{
                    id:Number(floorId)
                },
                data:{
                    floorNumber:data.floorNumber,
                    hotelId:Number(data.hotelId)
                }
            })
            return {
                message:"Floor updated successfully",
                data:floorUpdate
            }
        }catch(error){
            throw new Error(error.message);
        }
    }
}
