import { Prisma } from "@prisma/client";

export class Hotel implements Prisma.HotelCreateInput{
    id:number;
    name_hotel: string;
    address: string;
    phone_number: string;
    city: string;
    country: string;
    room_quantity: number;
    managerId: number;
    manager: Prisma.ManagerCreateNestedOneWithoutHotelInput;
}