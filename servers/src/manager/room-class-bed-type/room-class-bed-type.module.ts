import { Module } from '@nestjs/common';
import { RoomClassBedTypeController } from './room-class-bed-type.controller';
import { RoomClassBedTypeService } from './room-class-bed-type.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [RoomClassBedTypeController],
  providers: [RoomClassBedTypeService,PrismaModuleService]
})
export class RoomClassBedTypeModule {}
