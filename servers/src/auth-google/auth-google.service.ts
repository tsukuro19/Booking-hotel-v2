import { ConflictException, Injectable } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';
import { CustomerGoogleDto } from './dto/customerGoogle.dto';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/client/authentication/auth.service';

@Injectable()
export class AuthGoogleService {
    constructor(
        private readonly customerService: CustomerService,
        private readonly prismaService:PrismaModuleService,
        private readonly authService:AuthService
    ){}

    async RandomPassword(){
        const length=12;
        const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase="abcdefghijklmnopqrstuvwxyz";
        const number="0123456789";
        const symbol=`~!@#$%^&*()-_=+[{]}\|;:'",<.>/?`;
        const allChar=upperCase+lowerCase+number+symbol;
    
        let password="";
        while(length>password.length){
            password+=allChar[Math.floor(Math.random()*allChar.length)];
        }
        return password;
    }

    async validateUserCustomer(dataCustomer: CustomerGoogleDto){
        const passwordRandom=await this.RandomPassword();
        const existing=await this.prismaService.customer.findUnique({
            where:{
                email:dataCustomer.email
            }
        });
        if(existing){
            return existing.email;
        }
        const customer=await this.prismaService.customer.create({
            data:{
                first_name:dataCustomer.first_name,
                email:dataCustomer.email,
                last_name:dataCustomer.last_name,
                username:dataCustomer.username,
                phone_number:dataCustomer.phone_number,
                password:await bcrypt.hash(passwordRandom,10),
                isVerified:true
            }
        }); 
        return dataCustomer;
    }
}
