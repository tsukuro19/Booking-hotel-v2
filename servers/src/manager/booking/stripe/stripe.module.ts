import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { BookingService } from '../booking.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [StripeController],
  providers: [StripeService,BookingService,PrismaModuleService]
})
export class StripeModule {}
