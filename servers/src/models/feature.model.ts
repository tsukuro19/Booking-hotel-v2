import { Prisma } from "@prisma/client";

export class Feature implements Prisma.FeatureCreateInput{
    id:number;
    featureName: string;
    featureDescription?: string;
    featurePrice: number;
    featuresRoomClass?: Prisma.RoomClassFeatureCreateNestedManyWithoutFeatureInput;
    hotel: Prisma.HotelCreateNestedOneWithoutFeaturesInput;
}