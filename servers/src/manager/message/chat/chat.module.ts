import { Module } from '@nestjs/common';
import { ChatGateWay } from './chat-gateway';
import { Prisma } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
    providers:[ChatGateWay,PrismaModuleService]
})
export class ChatModule {}
