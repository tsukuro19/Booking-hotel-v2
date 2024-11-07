import { Prisma } from "@prisma/client";

export class Blog implements Prisma.BlogCreateInput{
    id:number;
    title:string;
    content: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    customer: Prisma.CustomerCreateNestedOneWithoutBlogsInput;
}