import { Controller, Post, Get, Param, Body, Delete, Put } from '@nestjs/common';
import { PaymentStatusService } from './payment-status.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Payment Statuses')
@Controller('manager/payment-status')
export class PaymentStatusController {
    constructor(private readonly paymentStatusService: PaymentStatusService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new payment status' })
    @ApiBody({ type: Object, description: 'Payment status creation data' })
    @ApiResponse({ status: 201, description: 'Payment status created successfully' })
    @ApiResponse({ status: 400, description: 'Error creating payment status' })
    async createPaymentStatus(@Body() data: any) {
        return await this.paymentStatusService.createPaymentStatus(data);
    }

    @Get()
    @ApiOperation({ summary: 'Get all payment statuses' })
    @ApiResponse({ status: 200, description: 'List of all payment statuses' })
    async getPaymentStatuses() {
        return await this.paymentStatusService.getPaymentStatus();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a specific payment status by ID' })
    @ApiParam({ name: 'id', description: 'Payment status ID', type: Number })
    @ApiResponse({ status: 200, description: 'Payment status found' })
    @ApiResponse({ status: 404, description: 'Payment status not found' })
    async getPaymentStatusById(@Param('id') id: number) {
        return await this.paymentStatusService.getPaymentStatusById(id);
    }

    @Get('booking/:bookingId')
    @ApiOperation({ summary: 'Get payment statuses for a specific booking ID' })
    @ApiParam({ name: 'bookingId', description: 'Booking ID to filter payment statuses', type: Number })
    @ApiResponse({ status: 200, description: 'List of payment statuses for the booking' })
    @ApiResponse({ status: 404, description: 'No payment statuses found for the booking' })
    async getPaymentStatusByBookingId(@Param('bookingId') bookingId: number) {
        return await this.paymentStatusService.getPaymentStatusByBookingId(bookingId);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a payment status' })
    @ApiParam({ name: 'id', description: 'Payment status ID to update', type: Number })
    @ApiBody({ type: Object, description: 'Payment status update data' })
    @ApiResponse({ status: 200, description: 'Payment status updated successfully' })
    @ApiResponse({ status: 400, description: 'Invalid data provided' })
    @ApiResponse({ status: 404, description: 'Payment status not found' })
    async updatePaymentStatus(@Param('id') id: number, @Body() data: any) {
        return await this.paymentStatusService.updatePaymentStatus(id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a payment status' })
    @ApiParam({ name: 'id', description: 'Payment status ID to delete', type: Number })
    @ApiResponse({ status: 200, description: 'Payment status deleted successfully' })
    @ApiResponse({ status: 404, description: 'Payment status not found' })
    async deletePaymentStatus(@Param('id') id: number) {
        return await this.paymentStatusService.deletePaymentStatus(id);
    }
}
