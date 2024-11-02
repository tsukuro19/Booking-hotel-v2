import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService,PrismaModuleService]
})
export class CustomerModule {}
