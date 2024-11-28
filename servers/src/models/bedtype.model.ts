import { Prisma } from "@prisma/client";

export class BedType implements Prisma.BedTypeCreateInput{
    id:number;
    bedTypeName: string;
    roomClassBedType?: Prisma.RoomClassBedTypeCreateNestedManyWithoutBedTypeInput;
    hotel: Prisma.HotelCreateNestedOneWithoutBedTypesInput;
}