import { Prisma } from "@prisma/client";

export class Customer implements Prisma.ManagerCreateInput{
    id:number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    username: string;
    isVerified: boolean;
    tokenId:number;
}