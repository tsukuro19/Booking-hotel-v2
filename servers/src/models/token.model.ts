import { Prisma } from "@prisma/client";

export class Token implements Prisma.TokenCreateInput {
    id:number;
    email: string;
    token: string;
    createdAt: Date;
    customerId?: number;
}