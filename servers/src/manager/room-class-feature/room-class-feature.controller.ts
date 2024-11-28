import { Controller, Post, Get, Delete, Put, Param, Body, HttpStatus } from '@nestjs/common';
import { RoomClassFeatureService } from './room-class-feature.service';
import { RoomClassFeatureDTO } from './dto/room-class-feature.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('RoomClassFeature')
@Controller('manager/room-class-feature')
export class RoomClassFeatureController {
    constructor(private readonly roomClassFeatureService: RoomClassFeatureService) {}

    @Post()
    @ApiOperation({ summary: 'Create Room Class Feature' })
    @ApiBody({ type: RoomClassFeatureDTO })
    @ApiResponse({ status: 201, description: 'Room Class Feature created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async create(@Body() data: RoomClassFeatureDTO) {
        const result = await this.roomClassFeatureService.createRoomClassFeature(data);
        return {
            message: result.message,
            data: result.data,
            statusCode: HttpStatus.CREATED
        };
    }

    @Get(':hotelId')
    @ApiOperation({ summary: 'Get list of Room Class Features for a Hotel' })
    @ApiParam({ name: 'hotelId', type: Number, description: 'Hotel ID' })
    @ApiResponse({ status: 200, description: 'List of Room Class Features' })
    @ApiResponse({ status: 404, description: 'Not found' })
    async getList(@Param('hotelId') hotelId: number) {
        const result = await this.roomClassFeatureService.getListRoomClassFeature(hotelId);
        return {
            message: result.message,
            data: result.data,
            statusCode: HttpStatus.OK
        };
    }

    @Delete(':roomClassId')
    @ApiOperation({ summary: 'Delete Room Class Feature' })
    @ApiParam({ name: 'roomClassId', type: Number, description: 'Room Class Feature ID' })
    @ApiResponse({ status: 200, description: 'Room Class Feature deleted successfully' })
    @ApiResponse({ status: 404, description: 'Room Class Feature not found' })
    async delete(@Param('roomClassId') id: number) {
        const result = await this.roomClassFeatureService.deleteRoomClassFeature(id);
        return {
            message: result.message,
            data: result.data,
            statusCode: HttpStatus.OK
        };
    }

    @Put('/:roomClassId')
    @ApiOperation({ summary: 'Update Room Class Feature' })
    @ApiParam({ name: 'roomClassId', type: Number, description: 'Room Class Feature ID' })
    @ApiBody({ type: RoomClassFeatureDTO })
    @ApiResponse({ status: 200, description: 'Room Class Feature updated successfully' })
    @ApiResponse({ status: 404, description: 'Room Class Feature not found' })
    async update(@Param('roomClassId') id: number, @Body() data: RoomClassFeatureDTO) {
        const result = await this.roomClassFeatureService.updateRoomClassFeature(id, data);
        return {
            message: result.message,
            data: result.data,
            statusCode: HttpStatus.OK
        };
    }

    @Get(':hotelId/:roomClassId')
    @ApiOperation({ summary: 'Get Room Class Feature by ID' })
    @ApiParam({ name: 'roomClassId', type: Number, description: 'Room Class Feature ID' })    
    @ApiResponse({ status: 200, description: 'Room Class Feature' })
    @ApiResponse({ status: 404, description: 'Room Class Feature not found' })
    async getRoomClassFeatureById(@Param('roomClassId') id: number, @Param('hotelId') hotelId: number) {
        const result = await this.roomClassFeatureService.getRoomClassFeatureById(id,hotelId);
        return {
            message: result.message,
            data: result.data,
            statusCode: HttpStatus.OK
        };
    }
}
