import { Prisma } from "@prisma/client";

export class Floor implements Prisma.FloorCreateInput{
    id:number;
    floorNumber: string;
    hotel: Prisma.HotelCreateNestedOneWithoutFloorsInput;
    rooms?: Prisma.RoomCreateNestedManyWithoutFloorInput;
}