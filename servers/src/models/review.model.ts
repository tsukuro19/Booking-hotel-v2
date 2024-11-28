import { Prisma } from "@prisma/client";

export class ReviewModel implements Prisma.ReviewCreateInput {
    id:number;
    content: string;
    createdAt?: string | Date;
    rating: number;
    updatedAt?: string | Date;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    hotel: Prisma.HotelCreateNestedOneWithoutReviewsInput;
}