import { Prisma } from "@prisma/client";

export class Images implements Prisma.ImagesCreateInput{
    id:number;
    imageUrl: string;
    hotelId: number;
    hotel: Prisma.HotelCreateNestedOneWithoutImageInput;
}