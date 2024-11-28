import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class MessageService {
    constructor(
        private prismaService: PrismaModuleService,
    ) {}
    async createMessage(messageData:any){
        const message=await this.prismaService.message.create({
            data:{
                content:messageData.content,
                senderId:messageData.senderId,
                receiverId:messageData.receiverId,
                sentAt:new Date(),
                customerId:messageData.customerId,
                managerId:messageData.managerId,
            }
        })
        return message;
    }

    async getMessageByManagerId(managerId:number){
        const messages=await this.prismaService.message.findMany({
            where:{
                managerId:managerId
            }
        })
        return messages;
    }

    async getListCustomerMessageWithManagerId(managerId:number){
        const listCustomerUnique=await this.prismaService.message.findMany({
            where:{
                managerId:Number(managerId)
            },
            distinct:['customerId'],
            select:{
                managerId:true,
                customerId:true,
                customer:{
                    select:{
                        first_name:true,
                        last_name:true,
                        email:true,
                        phone_number:true,
                    }
                }
            }
        })
        return listCustomerUnique;
    }

    async getContentMessageByManagerIdAndCustomerId(managerId:number,customerId:number){
        const messages=await this.prismaService.message.findMany({
            where:{
                managerId:Number(managerId),
                customerId:Number(customerId)
            }
        })
        return messages;
    }

    async getMessageByCustomerId(customerId:number){
        const messages=await this.prismaService.message.findMany({
            where:{
                customerId:customerId
            }
        })
        return messages;
    }

    async getListCustomerMessageWithCustomerId(customerId:number){
        const listManagerUnique=await this.prismaService.message.findMany({
            where:{
                customerId:Number(customerId)
            },
            distinct:['managerId'],
            select:{
                managerId:true,
                customerId:true,
                manager:{
                    select:{
                        first_name:true,
                        last_name:true,
                        email:true,
                    }
                }
            }
        })
        return listManagerUnique;
    }
}
