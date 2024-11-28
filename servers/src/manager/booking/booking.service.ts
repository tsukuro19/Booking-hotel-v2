import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class BookingService {
    constructor(
        private prismaService: PrismaModuleService
    ) { }

    async createBooking(data: any) {
        try{
            const roomAvailable = await this.prismaService.room.findMany({
                where: {
                    roomStatus: true
                }
            })
            if (roomAvailable.length < 1) {
                throw new Error("No room available")
            }
            const booking = await this.prismaService.booking.create({
                data: data
            })
            return{
                status: 200,
                message: "Booking created successfully",
                booking: booking
            }
        }catch(error){
            return {
                status: 400,
                message: error.message
            }
        }
    }

    // Finalize the booking once the payment is successful
    async finalizeBooking(bookingId: number) {
        await this.prismaService.booking.update({
            where: { id: bookingId },
            data: { bookingStatus: "CONFIRMED" }, // Mark as confirmed after successful payment
        });
    }

    async getBookingByCustomerId(customerId: Number) {
        return await this.prismaService.booking.findMany({
            where: {
                customerId: Number(customerId)
            },select:{
                bookingAmount:true,
                checkIn:true,
                checkOut:true,
                bookingStatus:true,
                hotel:{
                    select:{
                        name_hotel:true,
                        address:true,
                    }
                },
                numGuests:true,
            }
        })
    }

    async getBooking() {
        return await this.prismaService.booking.findMany({
            select:{
                bookingAmount:true,
                checkIn:true,
                checkOut:true,
                bookingStatus:true,
                hotel:{
                    select:{
                        name_hotel:true,
                        address:true,
                        rooms:{
                            select:{
                                roomNumber:true,
                                roomStatus:true,
                                id:true,
                            }
                        }
                    }
                },
                customer:{
                    select:{
                        last_name:true,
                        first_name:true,
                        phone_number:true,
                        email:true,
                    }
                },
                numGuests:true,
                id:true,
                customerId:true,
                hotelId:true,
                bookingType:true,
            }
        })
    }

    async getBookingByHotelId(hotelId: Number) {
        return await this.prismaService.booking.findMany({
            where: {
                hotelId: Number(hotelId)
            }
        })
    }

    async getBookingById(id: Number) {
        return await this.prismaService.booking.findUnique({
            where: {
                id: Number(id)
            }
        })
    }

    async updateBookingById(id: Number, data: any) {
        return await this.prismaService.booking.update({
            where: {
                id: Number(id)
            },
            data: data
        })
    }

    async deleteBookingById(id: Number) {
        return await this.prismaService.booking.delete({
            where: {
                id: Number(id)
            }
        })
    }
}
