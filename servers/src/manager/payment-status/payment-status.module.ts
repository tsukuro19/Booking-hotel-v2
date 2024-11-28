import { Module } from '@nestjs/common';
import { PaymentStatusController } from './payment-status.controller';
import { PaymentStatusService } from './payment-status.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [PaymentStatusController],
  providers: [PaymentStatusService,PrismaModuleService]
})
export class PaymentStatusModule {}
