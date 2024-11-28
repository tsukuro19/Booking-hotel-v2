import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('manager/review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new review' })
    @ApiBody({
        description: 'Review data to create a new review',
        type: Object,
    })
    @ApiResponse({ status: 201, description: 'Review created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid data' })
    async createReview(@Body() reviewData: any) {
        return this.reviewService.createReview(reviewData);
    }

    @Get(':managerId')
    @ApiOperation({ summary: 'Get reviews for a manager by managerId' })
    @ApiParam({ name: 'managerId', description: 'ID of the manager' })
    @ApiResponse({ status: 200, description: 'Reviews fetched successfully' })
    @ApiResponse({ status: 404, description: 'Manager not found' })
    async getReviewByManagerId(@Param('managerId') managerId: number) {
        return this.reviewService.getReviewByManagerId(managerId);
    }

    @Get('customer/:customerId')
    @ApiOperation({ summary: 'Get reviews for a customer by customerId' })
    @ApiParam({ name: 'customerId', description: 'ID of the customer' })
    @ApiResponse({ status: 200, description: 'Reviews fetched successfully' })
    @ApiResponse({ status: 404, description: 'Customer not found' })
    async getReviewByCustomerId(@Param('customerId') customerId: number) {
        return this.reviewService.getReviewByCustomerId(customerId);
    }

    @Get('hotel/:hotelId')
    @ApiOperation({ summary: 'Get reviews for a hotel by hotelId' })
    @ApiParam({ name: 'hotelId', description: 'ID of the hotel' })
    @ApiResponse({ status: 200, description: 'Reviews fetched successfully' })
    @ApiResponse({ status: 404, description: 'Hotel not found' })
    async getReviewByHotelId(@Param('hotelId') hotelId: number) {
        return this.reviewService.getReviewByHotelId(hotelId);
    }

    @Put(':reviewId')
    @ApiOperation({ summary: 'Update a review by reviewId' })
    @ApiParam({ name: 'reviewId', description: 'ID of the review to update' })
    @ApiBody({
        description: 'Review data to update the existing review',
        type: Object,
    })
    @ApiResponse({ status: 200, description: 'Review updated successfully' })
    @ApiResponse({ status: 404, description: 'Review not found' })
    async updateReview(
        @Param('reviewId') reviewId: number,
        @Body() reviewData: any
    ) {
        return this.reviewService.updateReview(reviewId, reviewData);
    }

    @Delete(':reviewId')
    @ApiOperation({ summary: 'Delete a review by reviewId' })
    @ApiParam({ name: 'reviewId', description: 'ID of the review to delete' })
    @ApiResponse({ status: 200, description: 'Review deleted successfully' })
    @ApiResponse({ status: 404, description: 'Review not found' })
    async deleteReview(@Param('reviewId') reviewId: number) {
        return this.reviewService.deleteReview(reviewId);
    }
}
