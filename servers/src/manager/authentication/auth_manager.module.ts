import { Module } from '@nestjs/common';
import { AuthManagerService } from './auth_manager.service';
import { AuthManagerController } from './auth_manager.controller';
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
import { AuthService } from 'src/client/authentication/auth.service';
import { ManagerService } from '../service/manager.service';



@Module({
  providers: [AuthManagerService, PrismaModuleService, JwtStrategy, ManagerService, CustomerService,ValidateTokenModule,EmailService,googleStrategy,AuthGoogleService,AuthService],
  controllers: [AuthManagerController],
  imports: [CustomerModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      //not change in this if check time valid jwt choose client module
      expiresIn: "2d"
    }
  })]
})
export class AuthManagerModule { }
