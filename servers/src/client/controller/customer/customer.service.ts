import { ConflictException, Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class CustomerService {
    constructor(private prisma:PrismaModuleService){};

    async getAllCustomers(){
        return this.prisma.customer.findMany();
    }

    async createCustomer(data:Customer):Promise<Customer>{
        const existing=await this.prisma.customer.findUnique({
            where:{
                email:data.email,
            },
        });
        if(existing){
            throw new ConflictException('username already exists');
        }

        return this.prisma.customer.create({
            data
        });
    }
}
