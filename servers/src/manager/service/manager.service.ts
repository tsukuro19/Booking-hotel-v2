import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Manager } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

import * as bcrypt from 'bcrypt';
import { ManagerDto } from '../dto/manager.dto';

@Injectable()
export class ManagerService {
    constructor(private prisma:PrismaModuleService){};

    async getAllManagers(){
        return this.prisma.manager.findMany();
    }

    async getManagerByEmail(emailFind:string):Promise<Manager>{
        return this.prisma.manager.findUnique({
            where:{
                email:emailFind
            }
        });
    }

    async getManagerByUsername(usernameFind:string):Promise<Manager[]>{
        return this.prisma.manager.findMany({
            where:{
                username:usernameFind
            }
        });
    }

    async createManager(data:Manager):Promise<Manager>{
        const existing=await this.prisma.manager.findUnique({
            where:{
                email:data.email,
            },
        });
        if(existing){
            throw new ConflictException('email already exists');
        }

        return this.prisma.manager.create({
            data
        });
    }

    async updateManager(data:ManagerDto):Promise<any>{
        const manager=this.prisma.manager.findUnique({
            where:{
                email:data.email
            }
        });
        if(!manager){
            throw new NotFoundException('Manager not found');
        }
        return this.prisma.manager.update({
            where:{
                email:data.email
            },
            data:{
                first_name:data.first_name,
                last_name:data.last_name,
                phone_number:data.phone_number,
                username:data.username
            }
        })
    }

    async deleteManager(email:string):Promise<any>{
        const managerExist=await this.prisma.manager.findUnique({
            where:{
                email
            }
        });
        if(!managerExist){
            throw new NotFoundException('Manager not found');
        }
        return this.prisma.manager.delete({
            where:{
                email
            }
        })
    }

    async updatePassword(email:string, oldPassword:string,password:string):Promise<any>{
        const manager= await this.getManagerByEmail(email);
        const validPassword = await bcrypt.compare(oldPassword, manager.password);
        if (!validPassword) {
            return new NotFoundException('Invalid password')
        }
        await this.prisma.manager.update({
            where:{
                email
            },
            data:{
                password
            }
        })
        return {message:'Password successfully updated'}
    }

    async updateIsVerified(managerId:number):Promise<Manager>{
        return this.prisma.manager.update({
            where:{
                id:managerId
            },
            data:{
                isVerified:true
            }
        })
    }
}
