import { Prisma } from "@prisma/client";

export class Message implements Prisma.MessageCreateInput {
    id:number;
    content: string;
    senderId?: number;
    receiverId?: number;
    sentAt?: string | Date;
    customer?: Prisma.CustomerCreateNestedOneWithoutMessagesInput;
    manager?: Prisma.ManagerCreateNestedOneWithoutMessagesInput;
}