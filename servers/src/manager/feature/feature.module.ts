import { Module } from '@nestjs/common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [FeatureController],
  providers: [FeatureService,PrismaModuleService]
})
export class FeatureModule {}
