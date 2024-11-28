import { Prisma } from "@prisma/client";

export class PaymentStatusModel implements Prisma.PaymentStatusCreateInput{
    id:number;
    paymentStatus: string;
    booking: Prisma.BookingCreateNestedOneWithoutBookingPaymentsInput;
}