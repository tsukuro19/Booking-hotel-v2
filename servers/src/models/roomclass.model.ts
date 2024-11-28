import { Prisma } from "@prisma/client";

export class RoomClass implements Prisma.RoomClassCreateInput {
    id: number;
    className: string;
    basePrice: number;
    roomClassBedType?: Prisma.RoomClassBedTypeCreateNestedManyWithoutRoomClassInput;
    roomClassFeature?: Prisma.RoomClassFeatureCreateNestedManyWithoutRoomClassInput;
    rooms?: Prisma.RoomCreateNestedManyWithoutRoomClassInput;
    hotel: Prisma.HotelCreateNestedOneWithoutRoomClassesInput;
}