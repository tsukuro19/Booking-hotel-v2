import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { CustomerDto } from './dto/customer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
    constructor(private prisma:PrismaModuleService){};

    async getAllCustomers(){
        return this.prisma.customer.findMany();
    }

    async getCustomerByEmail(emailFind:string):Promise<Customer>{
        return this.prisma.customer.findUnique({
            where:{
                email:emailFind
            }
        });
    }

    async getCustomerByUsername(usernameFind:string):Promise<Customer[]>{
        return this.prisma.customer.findMany({
            where:{
                username:usernameFind
            }
        });
    }

    async createCustomer(data:Customer):Promise<Customer>{
        const existing=await this.prisma.customer.findUnique({
            where:{
                email:data.email,
            },
        });
        if(existing){
            throw new ConflictException('email already exists');
        }

        return this.prisma.customer.create({
            data
        });
    }

    async updateCustomer(data:CustomerDto):Promise<any>{
        const customer=this.prisma.customer.findUnique({
            where:{
                email:data.email
            }
        });
        if(!customer){
            throw new NotFoundException('Customer not found');
        }
        return this.prisma.customer.update({
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

    async deleteCustomer(email:string):Promise<any>{
        return this.prisma.customer.delete({
            where:{
                email
            }
        })
    }

    async updatePassword(email:string, oldPassword:string,password:string):Promise<any>{
        const customer= await this.getCustomerByEmail(email);
        const validPassword = await bcrypt.compare(oldPassword, customer.password);
        if (!validPassword) {
            return new NotFoundException('Invalid password')
        }
        await this.prisma.customer.update({
            where:{
                email
            },
            data:{
                password
            }
        })
        return {message:'Password successfully updated'}
    }

    async updateIsVerified(customerId:number):Promise<Customer>{
        return this.prisma.customer.update({
            where:{
                id:customerId
            },
            data:{
                isVerified:true
            }
        })
    }

    async getCustomerById(customerId:number):Promise<Customer>{
        return this.prisma.customer.findUnique({
            where:{
                id:customerId
            }
        })
    }

    async updateCustomerById(customerId:number,dataString:any):Promise<any>{
        const customer=await this.prisma.customer.findUnique({
            where:{
                id:customerId
            }
        });
        const data=JSON.parse(dataString);
        if(!customer){
            throw new NotFoundException('Customer not found');
        }
        const customerUpdate= await this.prisma.customer.update({
            where:{
                id:customerId
            },
            data:{
                first_name:data.first_name,
                last_name:data.last_name,
                phone_number:data.phone_number,
                username:data.username
            }
        })
        return customerUpdate;
    }
}
