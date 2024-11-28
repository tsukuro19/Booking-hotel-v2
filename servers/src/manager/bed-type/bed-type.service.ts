import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { BedTypeDTO } from './dto/bed-type.dto';

@Injectable()
export class BedTypeService {
    constructor(
        private prismaService:PrismaModuleService
    ){}

    async createBedType(dataBedType:BedTypeDTO){
        try{
            const bedTypeExist=await this.prismaService.bedType.findMany({
                where:{
                    bedTypeName:dataBedType.bedTypeName,
                    hotelId:Number(dataBedType.hotelId),
                },
            });
            if(bedTypeExist.length>0){
                throw new Error('Bed type already exists');
            }
            const bedType=await this.prismaService.bedType.create({
                data:{
                    bedTypeName:dataBedType.bedTypeName,
                    hotelId:Number(dataBedType.hotelId),
                },
            });
            return {
                message:'Bed type created successfully',
                data:bedType,
            };
        }catch(error){
            console.log(error);
            throw new Error(error)
        }
    }

    async getListBedType(hotelId:number){
        try{
            const bedType=await this.prismaService.bedType.findMany({
                where:{
                    hotelId:Number(hotelId),
                },
                include:{
                    hotel:true,
                },
            });
            if(!bedType){
                throw new Error('Bed type not found');
            }
            return {
                message:'Bed type list',
                data:bedType,
            };
        }catch(error){
            throw new Error(error)
        }
    }

    async getBedTypeByName(name:string){
        try{
            const bedType=await this.prismaService.bedType.findMany({
                where:{
                    bedTypeName:name,
                },
                include:{
                    hotel:true,
                },
            });
            return {
                message:'Bed type',
                data:bedType,
            };
        }catch(error){
            throw new Error(error)
        }
    }

    async deleteBedType(id:number){
        try{
            const bedType=await this.prismaService.bedType.delete({
                where:{
                    id:Number(id),
                },
            });
            return {
                message:'Bed type deleted successfully',
                data:bedType,
            };
        }catch(error){
            throw new Error(error)
        }
    }   

    async updateBedType(id:number,dataBedType:BedTypeDTO){
        try{
            const bedType=await this.prismaService.bedType.update({
                where:{
                    id:Number(id),
                },
                data:{
                    bedTypeName:dataBedType.bedTypeName,
                    hotelId:Number(dataBedType.hotelId),
                },
            });
            return {
                message:'Bed type updated successfully',
                data:bedType,
            };
        }catch(error){
            throw new Error(error)
        }
    }   
}
