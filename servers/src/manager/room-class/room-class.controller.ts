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
  import { ApiTags, ApiResponse } from '@nestjs/swagger';
  import { RoomClassService } from './room-class.service';
  import { RoomClassDto } from './dto/room-class.dto';
  
  @ApiTags('RoomClass')
  @Controller('manager/room-class')
  export class RoomClassController {
    constructor(private readonly roomClassService: RoomClassService) {}
  
    @Post()
    @ApiResponse({ status: 201, description: 'Room class created successfully.' })
    @ApiResponse({ status: 400, description: 'Room class already exists.' })
    async createRoomClass(@Body() data: RoomClassDto) {
      try {
        const result = await this.roomClassService.createRoomClass(data);
        return { statusCode: HttpStatus.CREATED, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  
    @Get()
    @ApiResponse({ status: 200, description: 'List of room classes.' })
    async getListRoomClass(@Query('hotelId') hotelId: number) {
      try {
        const result = await this.roomClassService.getListRoomClass(hotelId);
        return { statusCode: HttpStatus.OK, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  
    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Room class deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Room class not found.' })
    async deleteRoomClass(@Param('id') id: number) {
      try {
        const result = await this.roomClassService.deleteRoomClass(id);
        return { statusCode: HttpStatus.OK, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  
    @Put(':id')
    @ApiResponse({ status: 200, description: 'Room class updated successfully.' })
    @ApiResponse({ status: 404, description: 'Room class not found.' })
    async updateRoomClass(@Param('id') id: number, @Body() data: RoomClassDto) {
      try {
        const result = await this.roomClassService.updateRoomClass(id, data);
        return { statusCode: HttpStatus.OK, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  
    @Get('name-class/:name')
    @ApiResponse({ status: 200, description: 'Room class details.' })
    @ApiResponse({ status: 404, description: 'Room class not found.' })
    async getRoomClassByName(@Param('name') name: string) {
      try {
        const result = await this.roomClassService.getRoomClassByName(name);
        return { statusCode: HttpStatus.OK, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  
    @Get('bedtype/:bedType')
    @ApiResponse({ status: 200, description: 'Room classes with specified bed type.' })
    @ApiResponse({ status: 404, description: 'Bed type not found or no room classes found.' })
    async getRoomClassByBedType(@Param('bedType') bedType: string) {
      try {
        const result = await this.roomClassService.getRoomClassByBedType(bedType);
        return { statusCode: HttpStatus.OK, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  
    @Get('feature/:feature')
    @ApiResponse({ status: 200, description: 'Room classes with specified feature.' })
    @ApiResponse({ status: 404, description: 'Feature not found or no room classes found.' })
    async getRoomClassByFeature(@Param('feature') featureName: string) {
      try {
        const result = await this.roomClassService.getRoomClassByFeature(featureName);
        return { statusCode: HttpStatus.OK, ...result };
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  }
  