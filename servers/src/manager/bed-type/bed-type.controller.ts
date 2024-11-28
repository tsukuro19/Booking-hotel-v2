import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { BedTypeService } from './bed-type.service';
import { BedTypeDTO } from './dto/bed-type.dto';

@ApiTags('BedType')
@Controller('manager/bed-type')
export class BedTypeController {
  constructor(private readonly bedTypeService: BedTypeService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Bed type created successfully.' })
  @ApiResponse({ status: 400, description: 'Bed type already exists.' })
  async createBedType(@Body() data: BedTypeDTO) {
    try {
      const result = await this.bedTypeService.createBedType(data);
      return { statusCode: HttpStatus.CREATED, ...result };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of bed types.' })
  @ApiQuery({ name: 'hotelId', required: true, description: 'Hotel ID to filter bed types' })
  async getListBedType(@Query('hotelId') hotelId: number) {
    try {
      const result = await this.bedTypeService.getListBedType(hotelId);
      return { statusCode: HttpStatus.OK, ...result };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':name')
  @ApiResponse({ status: 200, description: 'Bed type details.' })
  @ApiResponse({ status: 404, description: 'Bed type not found.' })
  async getBedTypeByName(@Param('name') name: string) {
    try {
      const result = await this.bedTypeService.getBedTypeByName(name);
      return { statusCode: HttpStatus.OK, ...result };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Bed type deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Bed type not found.' })
  async deleteBedType(@Param('id') id: number) {
    try {
      const result = await this.bedTypeService.deleteBedType(id);
      return { statusCode: HttpStatus.OK, ...result };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Bed type updated successfully.' })
  @ApiResponse({ status: 404, description: 'Bed type not found.' })
  async updateBedType(@Param('id') id: number, @Body() data: BedTypeDTO) {
    try {
      const result = await this.bedTypeService.updateBedType(id, data);
      return { statusCode: HttpStatus.OK, ...result };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
