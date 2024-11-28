import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { Prisma } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Module({
  providers: [HotelService,PrismaModuleService],
  controllers: [HotelController],
  imports: [CloudinaryModule],
})
export class HotelModule {}
