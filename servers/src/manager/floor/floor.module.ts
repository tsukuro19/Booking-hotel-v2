import { Module } from '@nestjs/common';
import { FloorService } from './floor.service';
import { FloorController } from './floor.controller';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  providers: [FloorService,PrismaModuleService],
  controllers: [FloorController]
})
export class FloorModule {}
