import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService,PrismaModuleService]
})
export class ReviewModule {}
