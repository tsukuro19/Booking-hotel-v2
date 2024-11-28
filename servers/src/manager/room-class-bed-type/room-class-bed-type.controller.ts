import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { RoomClassBedTypeService } from './room-class-bed-type.service';
import { RoomClassBedTypeDTO } from './dto/room-class-bed-type.dto';

@ApiTags('RoomClassBedType')
@Controller('manager/room-class-bed-type')
export class RoomClassBedTypeController {
  constructor(private readonly roomClassBedTypeService: RoomClassBedTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a RoomClassBedType' })
  @ApiBody({ type: RoomClassBedTypeDTO })
  @ApiResponse({
    status: 201,
    description: 'RoomClassBedType successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
  })
  async create(@Body() data: RoomClassBedTypeDTO) {
    try {
      const result = await this.roomClassBedTypeService.createRoomClassBedType(data);
      return {
        statusCode: HttpStatus.CREATED,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get RoomClassBedType by ID' })
  @ApiResponse({
    status: 200,
    description: 'RoomClassBedType found.',
  })
  @ApiResponse({
    status: 404,
    description: 'RoomClassBedType not found.',
  })
  async getById(@Param('id') id: number) {
    try {
      const result = await this.roomClassBedTypeService.getRoomClassBedType(id);
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/hotel/:hotelId')
  @ApiOperation({ summary: 'Get list of RoomClassBedType by hotelId' })
  @ApiResponse({
    status: 200,
    description: 'List of RoomClassBedType.',
  })
  @ApiResponse({
    status: 404,
    description: 'No RoomClassBedType found for this hotel.',
  })
  async getListByHotel(@Param('hotelId') hotelId: number) {
    try {
      const result = await this.roomClassBedTypeService.getListRoomClassBedType(hotelId);
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update RoomClassBedType by ID' })
  @ApiBody({ type: RoomClassBedTypeDTO })
  @ApiResponse({
    status: 200,
    description: 'RoomClassBedType updated successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
  })
  async update(@Param('id') id: number, @Body() data: RoomClassBedTypeDTO) {
    try {
      const result = await this.roomClassBedTypeService.updateRoomClassBedType(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete RoomClassBedType by ID' })
  @ApiResponse({
    status: 200,
    description: 'RoomClassBedType deleted successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'RoomClassBedType not found.',
  })
  async delete(@Param('id') id: number) {
    try {
      const result = await this.roomClassBedTypeService.deleteRoomClassBedType(id);
      return {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
