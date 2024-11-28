import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { ChatModule } from './chat/chat.module';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [MessageController],
  providers: [MessageService,PrismaModuleService],
  imports: [ChatModule]
})
export class MessageModule {}
