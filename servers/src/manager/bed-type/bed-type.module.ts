import { Module } from '@nestjs/common';
import { BedTypeController } from './bed-type.controller';
import { BedTypeService } from './bed-type.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [BedTypeController],
  providers: [BedTypeService,PrismaModuleService]
})
export class BedTypeModule {}
