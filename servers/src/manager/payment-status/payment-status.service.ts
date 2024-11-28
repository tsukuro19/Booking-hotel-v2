import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class PaymentStatusService {
    constructor(
        private prismaService:PrismaModuleService
    ) {}

    async createPaymentStatus(data: any){
        return await this.prismaService.paymentStatus.create({
            data: data
        })
    }

    async getPaymentStatus(){
        return await this.prismaService.paymentStatus.findMany()
    }

    async getPaymentStatusById(id: number){
        return await this.prismaService.paymentStatus.findUnique({
            where: {
                id: id
            }
        })
    }

    async getPaymentStatusByBookingId(id: number){
        return await this.prismaService.paymentStatus.findMany({
            where: {
                bookingId: id
            }
        })
    }

    async updatePaymentStatus(id: number, data: any){
        return await this.prismaService.paymentStatus.update({
            where: {
                id: id
            },
            data: data
        })
    }

    async deletePaymentStatus(id: number){
        return await this.prismaService.paymentStatus.delete({
            where: {
                id: id
            }
        })
    }
}
