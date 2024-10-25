import { Module } from '@nestjs/common';

import { ManagerService } from './service/manager.service';
import { ManagerController } from './controller/manager.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule.forRoot({
    isGlobal: true, // Để các biến môi trường có sẵn trên toàn bộ ứng dụng
  })],
  controllers: [ManagerController],
  providers: [ManagerService]
})
export class ManagerModule {}
