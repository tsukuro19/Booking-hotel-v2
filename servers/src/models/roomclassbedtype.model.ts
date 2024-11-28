import { Prisma } from "@prisma/client";

export class RoomClassBedType implements Prisma.RoomClassBedTypeCreateInput{
    id:number;
    totalPriceRoomBeds: number;
    numBeds: number;
    roomClass: Prisma.RoomClassCreateNestedOneWithoutRoomClassBedTypeInput;
    bedType: Prisma.BedTypeCreateNestedOneWithoutRoomClassBedTypeInput;
}