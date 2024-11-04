import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { PrismaModuleService } from './prisma_module/prisma_module.service';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';


@Module({
  imports: [ClientModule, ManagerModule,
    ConfigModule.forRoot({
    isGlobal: true, // Để các biến môi trường có sẵn trên toàn bộ ứng dụng
  }),
    EmailModule],
  controllers: [AppController],
  providers: [AppService, PrismaModuleService],
})
export class AppModule {}
