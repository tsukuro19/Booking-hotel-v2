import { Controller, Get, Post, Body, Param, Query, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from './dto/room.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

@ApiTags('Room')
@Controller('manager/room')
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new room' })
    @ApiResponse({ status: 201, description: 'Room created successfully.' })
    @ApiResponse({ status: 400, description: 'Bad request - Room already exists.' })
    async createRoom(@Body() data: RoomDto) {
        try {
            const result = await this.roomService.createRoom(data);
            return result;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
    @ApiOperation({ summary: 'Get list of rooms by hotel ID' })
    @ApiQuery({ name: 'hotelId', required: true, description: 'The hotel ID to filter rooms' })
    @ApiResponse({ status: 200, description: 'List of rooms for the specified hotel successfully fetched.' })
    async getListRoom(@Query('hotelId') hotelId: number) {
        try {
            return await this.roomService.getListRoom(hotelId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':roomNumber')
    @ApiOperation({ summary: 'Get room details by room number' })
    @ApiParam({ name: 'roomNumber', description: 'Room number' })
    @ApiResponse({ status: 200, description: 'Room details successfully fetched.' })
    @ApiResponse({ status: 404, description: 'Room not found.' })
    async getRoomByNumber(@Param('roomNumber') roomNumber: string) {
        try {
            return await this.roomService.getRoomByNumber(roomNumber);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Put(':roomNumber')
    @ApiOperation({ summary: 'Update room details by room number' })
    @ApiParam({ name: 'roomNumber', description: 'Room number' })
    @ApiResponse({ status: 200, description: 'Room updated successfully.' })
    @ApiResponse({ status: 404, description: 'Room not found.' })
    async updateRoom(@Param('roomNumber') roomNumber: number, @Body() data: any) {
        try {
            return await this.roomService.updateRoom(roomNumber, data);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Delete(':roomNumber')
    @ApiOperation({ summary: 'Delete room by room number' })
    @ApiParam({ name: 'roomNumber', description: 'Room number' })
    @ApiResponse({ status: 200, description: 'Room deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Room not found.' })
    async deleteRoom(@Param('roomNumber') roomNumber: number) {
        try {
            return await this.roomService.deleteRoom(roomNumber);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }

    @Get('with-room-class')
    @ApiOperation({ summary: 'Get list of rooms with room class' })
    @ApiResponse({ status: 200, description: 'Rooms with room classes successfully fetched.' })
    async getListRoomWithRoomClass() {
        try {
            return await this.roomService.getListRoomWithRoomClass();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('with-floor')
    @ApiOperation({ summary: 'Get list of rooms with floor information' })
    @ApiResponse({ status: 200, description: 'Rooms with floor details successfully fetched.' })
    async getListRoomWithFloor() {
        try {
            return await this.roomService.getListRoomWithFloor();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
