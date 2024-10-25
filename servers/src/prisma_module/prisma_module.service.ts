import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
//This code defines a lifecycle hook onModuleInit in a NestJS module. When the module is initialized, it asynchronously connects to a Prisma database using the $connect method.
export class PrismaModuleService extends PrismaClient implements OnModuleInit {
   async onModuleInit() {
       await this.$connect();
   }
}
