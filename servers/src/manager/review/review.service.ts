import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class ReviewService {
    constructor(
        private prismaService: PrismaModuleService,
    ) {}

    async createReview(reviewData: any) {
        try {
            const review = await this.prismaService.review.create({
                data: reviewData,
            });
            return review;
        } catch (error) {
            console.error('Error creating review:', error);
            throw error;
        }
    }

    async getReviewByManagerId(managerId: number) {
        try {
            const reviews = await this.prismaService.review.findMany({
                where:{
                    hotel:{
                        managerId: Number(managerId)
                    }
                },select:{
                    id:true,
                    rating:true,
                    content:true,
                    customerId:true,
                    hotelId:true,
                    hotel:{
                        select:{
                            name_hotel:true,
                        }
                    }
                }
            });
            return reviews;
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw error;
        }
    }

    async getReviewByCustomerId(customerId: number) {
        try {
            const reviews = await this.prismaService.review.findMany({
                where:{
                    customerId: customerId
                }
            });
            return reviews;
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw error;
        }
    }

    async getReviewByHotelId(hotelId: number) {
        try {
            const reviews = await this.prismaService.review.findMany({
                where:{
                    hotelId: Number(hotelId)
                },select:{
                    id:true,
                    rating:true,
                    content:true,
                    customerId:true,
                    hotelId:true,
                    customer:{
                        select:{
                            last_name:true,
                            first_name:true,
                        }
                    }
                }
            });
            return reviews;
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw error;
        }
    }

    async updateReview(reviewId: number, reviewData: any) {
        try {
            const updatedReview = await this.prismaService.review.update({
                where: { id: Number(reviewId) },
                data: reviewData,
            });
            return updatedReview;
        } catch (error) {
            console.error('Error updating review:', error);
            throw error;
        }
    }

    async deleteReview(reviewId: number) {
        try {
            const deletedReview = await this.prismaService.review.delete({
                where: { id: Number(reviewId) },
            });
            return deletedReview;
        } catch (error) {
            console.error('Error deleting review:', error);
            throw error;
        }
    }

    async getReviewById(reviewId: number) {
        try {
            const review = await this.prismaService.review.findUnique({
                where: { id: reviewId },
            });
            return review;
        } catch (error) {
            console.error('Error fetching review:', error);
            throw error;
        }
    }

}
