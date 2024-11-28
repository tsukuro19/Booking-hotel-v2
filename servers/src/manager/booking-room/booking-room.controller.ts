import { Controller, Post, Get, Param, Body, Delete, Put } from '@nestjs/common';
import { BookingRoomService } from './booking-room.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Booking Rooms')
@Controller('manager/booking-room')
export class BookingRoomController {
    constructor(private readonly bookingRoomService: BookingRoomService) {}

    @Post(':bookingId')
    @ApiOperation({ summary: 'Create a booking room for a booking' })
    @ApiParam({ name: 'bookingId', description: 'Booking ID to associate with a room', type: Number })
    @ApiResponse({ status: 201, description: 'Booking room created successfully' })
    @ApiResponse({ status: 400, description: 'Error creating booking room' })
    async createBookingRoom(@Param('bookingId') bookingId: number) {
        return await this.bookingRoomService.createBookingRoom(bookingId);
    }

    @Get(':bookingId')
    @ApiOperation({ summary: 'Get all rooms associated with a booking' })
    @ApiParam({ name: 'bookingId', description: 'Booking ID', type: Number })
    @ApiResponse({ status: 200, description: 'List of rooms associated with the booking' })
    @ApiResponse({ status: 404, description: 'No rooms found for this booking' })
    async getBookingRoomsByBookingId(@Param('bookingId') bookingId: number) {
        return await this.bookingRoomService.getBookingRoomByBookingId(bookingId);
    }

    @Get('room/:roomId')
    @ApiOperation({ summary: 'Get all bookings associated with a room' })
    @ApiParam({ name: 'roomId', description: 'Room ID', type: Number })
    @ApiResponse({ status: 200, description: 'List of bookings for the room' })
    @ApiResponse({ status: 404, description: 'No bookings found for this room' })
    async getBookingRoomsByRoomId(@Param('roomId') roomId: number) {
        return await this.bookingRoomService.getBookingRoomByRoomId(roomId);
    }

    @Get('detail/:id')
    @ApiOperation({ summary: 'Get a specific booking room by ID' })
    @ApiParam({ name: 'id', description: 'Booking Room ID', type: Number })
    @ApiResponse({ status: 200, description: 'Booking room details found' })
    @ApiResponse({ status: 404, description: 'Booking room not found' })
    async getBookingRoomById(@Param('id') id: number) {
        return await this.bookingRoomService.getBookingRoomById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a booking room' })
    @ApiParam({ name: 'id', description: 'Booking Room ID', type: Number })
    @ApiBody({ type: Object, description: 'Booking room update data' })
    @ApiResponse({ status: 200, description: 'Booking room updated successfully' })
    @ApiResponse({ status: 400, description: 'Invalid data provided' })
    @ApiResponse({ status: 404, description: 'Booking room not found' })
    async updateBookingRoom(@Param('id') id: number, @Body() data: any) {
        return await this.bookingRoomService.updateBookingRoomById(id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a booking room' })
    @ApiParam({ name: 'id', description: 'Booking Room ID', type: Number })
    @ApiResponse({ status: 200, description: 'Booking room deleted successfully' })
    @ApiResponse({ status: 404, description: 'Booking room not found' })
    async deleteBookingRoom(@Param('id') id: number) {
        return await this.bookingRoomService.deleteBookingRoomById(id);
    }
}
