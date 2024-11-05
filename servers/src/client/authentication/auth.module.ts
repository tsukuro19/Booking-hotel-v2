import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { CustomerService } from '../../customer/customer.service';
import { CustomerModule } from '../../customer/customer.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ValidateTokenModule } from '../controller/validate-token/validate-token.module';
import { EmailService } from 'src/email/email.service';
import { googleStrategy } from 'src/auth-google/utils/google.strategy';
import { AuthGoogleService } from 'src/auth-google/auth-google.service';

@Module({
  providers: [AuthService, PrismaModuleService, JwtStrategy, CustomerService,ValidateTokenModule,EmailService,googleStrategy,AuthGoogleService],
  controllers: [AuthController],
  imports: [CustomerModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: "2d"
    }
  })]
})
export class AuthModule { }
