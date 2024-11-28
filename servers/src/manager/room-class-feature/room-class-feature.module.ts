import { Module } from '@nestjs/common';
import { RoomClassFeatureController } from './room-class-feature.controller';
import { RoomClassFeatureService } from './room-class-feature.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [RoomClassFeatureController],
  providers: [RoomClassFeatureService,PrismaModuleService]
})
export class RoomClassFeatureModule {}
