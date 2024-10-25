import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { CustomerService } from '../controller/customer/customer.service';
import { CustomerModule } from '../controller/customer/customer.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { EmailService } from './email.service';

@Module({
  providers: [AuthService, PrismaModuleService, JwtStrategy, CustomerService, EmailService],
  controllers: [AuthController],
  imports: [CustomerModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: "5d"
    }
  })]
})
export class AuthModule { }
