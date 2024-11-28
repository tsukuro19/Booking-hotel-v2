import { Prisma } from "@prisma/client"

export class RoomClassFeature implements Prisma.RoomClassFeatureCreateInput{
    id:number;
    roomClass: Prisma.RoomClassCreateNestedOneWithoutRoomClassFeatureInput;
    feature: Prisma.FeatureCreateNestedOneWithoutFeaturesRoomClassInput;
}