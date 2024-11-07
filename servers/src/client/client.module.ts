import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientController } from './controller/client.controller';
import { CustomerModule } from '../customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './authentication/auth.controller';
import { AuthModule } from './authentication/auth.module';
import { AuthService } from './authentication/auth.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CustomerService } from '../customer/customer.service';
import { ValidateTokenController } from './controller/validate-token/validate-token.controller';
import { ValidateTokenModule } from './controller/validate-token/validate-token.module';
import { EmailService } from 'src/email/email.service';
import { BlogModule } from './blog/blog.module';


@Module({
  imports:[CustomerModule,AuthModule,ValidateTokenModule,
    ConfigModule.forRoot({
      isGlobal: true, // Để các biến môi trường có sẵn trên toàn bộ ứng dụng
    }),JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "2d"
      }
    }), BlogModule
  ],
  providers: [ClientService,AuthService,PrismaModuleService,CustomerService,EmailService],
  controllers: [ClientController,AuthController,ValidateTokenController]
})
export class ClientModule {}
