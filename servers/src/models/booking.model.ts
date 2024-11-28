import { Prisma } from "@prisma/client";

export class BookingModel implements Prisma.BookingCreateInput{
   id:number;
   checkIn: string | Date;
   checkOut: string | Date;
   bookingStatus: string;
   bookingAmount: number;
   bookingType: string;
   numGuests: number;
   customer: Prisma.CustomerCreateNestedOneWithoutBookingsInput;
   hotel: Prisma.HotelCreateNestedOneWithoutBookingInput;

}