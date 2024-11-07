import { Module } from '@nestjs/common';
import { ManagerService } from './service/manager.service';
import { ManagerController } from './controller/manager.controller';
import { CustomerModule } from '../customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthManagerController } from './authentication/auth_manager.controller';
import { AuthManagerModule } from './authentication/auth_manager.module';
import { AuthManagerService } from './authentication/auth_manager.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CustomerService } from '../customer/customer.service';
import { ValidateTokenController } from './controller/validate-token/validate-token.controller';
import { ValidateTokenModule } from './controller/validate-token/validate-token.module';
import { EmailService } from 'src/email/email.service';


@Module({
  imports:[CustomerModule,AuthManagerModule,ValidateTokenModule,
    ConfigModule.forRoot({
      isGlobal: true, // Để các biến môi trường có sẵn trên toàn bộ ứng dụng
    }),JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "2d"
      }
    })
  ],
  providers: [ManagerService,AuthManagerService,PrismaModuleService,CustomerService,EmailService],
  controllers: [ManagerController,AuthManagerController,ValidateTokenController]
})
export class ManagerModule {}
