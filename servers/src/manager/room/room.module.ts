import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [RoomController],
  providers: [RoomService,PrismaModuleService]
})
export class RoomModule {}
