import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { StripeModule } from './stripe/stripe.module';

@Module({
  controllers: [BookingController],
  providers: [BookingService,PrismaModuleService],
  imports: [StripeModule]
})
export class BookingModule {}
