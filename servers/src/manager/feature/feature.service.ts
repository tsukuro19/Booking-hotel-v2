import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { FeatureDTO } from './dto/feature.dto';

@Injectable()
export class FeatureService {
    constructor(
        private prismaService:PrismaModuleService
    ){}

    async createFeature(dataFeature:FeatureDTO){
        try{
            const featureExist=await this.prismaService.feature.findMany({
                where:{
                    featureName:dataFeature.featureName,
                    hotelId:Number(dataFeature.hotelId)
                },
            });
            if(featureExist.length>0){
                throw new Error("Feature name already exists");
            }   
            const feature=await this.prismaService.feature.create({
                data:{
                    featureName:dataFeature.featureName,
                    featureDescription:dataFeature.featureDescription,
                    featurePrice:Number(dataFeature.featurePrice),
                    hotelId:Number(dataFeature.hotelId)
                },
            });
            return{
                message:"Feature created successfully",
                data:feature
            }
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }
    async getListFeature(hotelId:number){
        try{
            const featureList=await this.prismaService.feature.findMany({
                where:{
                    hotelId:hotelId,
                },
                include:{
                    hotel:true,
                },
            });
            if(!featureList){
                throw new Error("Feature not found");
            }
            return{
                message:"Feature list",
                data:featureList
            }
        }catch(error){
            throw new Error(error);
        }
    }

    async getFeatureById(id:number){
        try{
            const feature=await this.prismaService.feature.findUnique({
                where:{
                    id:id,
                },
            });
            if(!feature){
                throw new Error("Feature not found");
            }
            return{
                message:"Feature",
                data:feature
            }
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }

    async deleteFeature(id:number){
        try{
            const featureDelete=await this.prismaService.feature.delete({
                where:{
                    id:Number(id),
                },
            });
            return{
                message:"Feature deleted successfully",
                data:featureDelete
            }
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }

    async updateFeature(id:number,dataFeature:FeatureDTO){
        try{
            const featureUpdate=await this.prismaService.feature.update({
                where:{
                    id:Number(id),
                },
                data:{
                    featureName:dataFeature.featureName,
                    featureDescription:dataFeature.featureDescription,
                    featurePrice:Number(dataFeature.featurePrice),
                    hotelId:Number(dataFeature.hotelId)
                },
            });
            return{
                message:"Feature updated successfully",
                data:featureUpdate
            }
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }
}
