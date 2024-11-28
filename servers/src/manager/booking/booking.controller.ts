import { Controller, Post, Get, Param, Body, Delete, Put } from '@nestjs/common';
import { BookingService } from './booking.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Bookings')
@Controller('manager/booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new booking' })
    @ApiBody({ type: Object, description: 'Booking data' })
    @ApiResponse({ status: 201, description: 'Booking created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid data' })
    async createBooking(@Body() data: any) {
        return await this.bookingService.createBooking(data);
    }

    @Get()
    @ApiOperation({ summary: 'Get all bookings' })
    @ApiResponse({ status: 200, description: 'List of all bookings' })
    @ApiResponse({ status: 404, description: 'No bookings found' })
    async getAllBookings() {
        return await this.bookingService.getBooking();
    }

    @Get('customer/:customerId')
    @ApiOperation({ summary: 'Get all bookings by customer ID' })
    @ApiParam({ name: 'customerId', description: 'Customer ID', type: Number })
    @ApiResponse({ status: 200, description: 'Bookings for the specified customer' })
    @ApiResponse({ status: 404, description: 'No bookings found for this customer' })
    async getBookingsByCustomerId(@Param('customerId') customerId: number) {
        return await this.bookingService.getBookingByCustomerId(customerId);
    }

    @Get('hotel/:hotelId')
    @ApiOperation({ summary: 'Get all bookings by hotel ID' })
    @ApiParam({ name: 'hotelId', description: 'Hotel ID', type: Number })
    @ApiResponse({ status: 200, description: 'Bookings for the specified hotel' })
    @ApiResponse({ status: 404, description: 'No bookings found for this hotel' })
    async getBookingsByHotelId(@Param('hotelId') hotelId: number) {
        return await this.bookingService.getBookingByHotelId(hotelId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get booking by ID' })
    @ApiParam({ name: 'id', description: 'Booking ID', type: Number })
    @ApiResponse({ status: 200, description: 'Booking found' })
    @ApiResponse({ status: 404, description: 'Booking not found' })
    async getBookingById(@Param('id') id: number) {
        return await this.bookingService.getBookingById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update booking by ID' })
    @ApiParam({ name: 'id', description: 'Booking ID', type: Number })
    @ApiBody({ type: Object, description: 'Booking update data' })
    @ApiResponse({ status: 200, description: 'Booking updated successfully' })
    @ApiResponse({ status: 400, description: 'Invalid data' })
    @ApiResponse({ status: 404, description: 'Booking not found' })
    async updateBookingById(@Param('id') id: number, @Body() data: any) {
        return await this.bookingService.updateBookingById(id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete booking by ID' })
    @ApiParam({ name: 'id', description: 'Booking ID', type: Number })
    @ApiResponse({ status: 200, description: 'Booking deleted successfully' })
    @ApiResponse({ status: 404, description: 'Booking not found' })
    async deleteBookingById(@Param('id') id: number) {
        return await this.bookingService.deleteBookingById(id);
    }
}
