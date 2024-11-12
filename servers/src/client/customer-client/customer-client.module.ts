import { Module } from '@nestjs/common';
import { CustomerClientController } from './customer-client.controller';
import { CustomerClientService } from './customer-client.service';
import { CustomerService } from 'src/customer/customer.service';
import { Prisma } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [CustomerClientController],
  providers: [CustomerClientService,CustomerService,PrismaModuleService]
})
export class CustomerClientModule {}
