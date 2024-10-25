import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientController } from './controller/client.controller';
import { CustomerModule } from './controller/customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './authentication/auth.controller';
import { AuthModule } from './authentication/auth.module';
import { AuthService } from './authentication/auth.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CustomerService } from './controller/customer/customer.service';
import { EmailService } from './authentication/email.service';


@Module({
  imports:[CustomerModule,AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, // Để các biến môi trường có sẵn trên toàn bộ ứng dụng
    }),JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "5d"
      }
    })
  ],
  providers: [ClientService,AuthService,PrismaModuleService,CustomerService,EmailService],
  controllers: [ClientController,AuthController]
})
export class ClientModule {}
