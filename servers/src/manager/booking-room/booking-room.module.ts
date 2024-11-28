import { Module } from '@nestjs/common';
import { BookingRoomController } from './booking-room.controller';
import { BookingRoomService } from './booking-room.service';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  controllers: [BookingRoomController],
  providers: [BookingRoomService,PrismaModuleService]
})
export class BookingRoomModule {}
