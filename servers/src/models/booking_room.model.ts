import { Prisma } from "@prisma/client";

export class BookingRoomModel implements Prisma.BookingRoomCreateInput{
    id:number;
    booking: Prisma.BookingCreateNestedOneWithoutBookingRoomsInput;
    room: Prisma.RoomCreateNestedOneWithoutRoomBookingsInput;
}

