import { Prisma } from "@prisma/client";

export class Room implements Prisma.RoomCreateInput {
    id:number;
    roomNumber: string;
    roomStatus: boolean;
    dayAvailableFrom?: string | Date;
    floor: Prisma.FloorCreateNestedOneWithoutRoomsInput;
    roomClass: Prisma.RoomClassCreateNestedOneWithoutRoomsInput;
    roomBookings?: Prisma.BookingRoomCreateNestedManyWithoutRoomInput;
    hotel: Prisma.HotelCreateNestedOneWithoutRoomClassesInput;
}