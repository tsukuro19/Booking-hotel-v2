import { Module } from '@nestjs/common';
import { RoomClassController } from './room-class.controller';
import { RoomClassService } from './room-class.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [RoomClassController],
  providers: [RoomClassService,PrismaModuleService]
})
export class RoomClassModule {}
