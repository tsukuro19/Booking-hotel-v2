import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter;
    constructor() {
        this.transporter=nodemailer.createTransport({
            host:'mail.projectbooking.info',
            port:465,
            secure:true,
            auth:{
                user:'hutech.nguyentranhoangthien@gmail.com',
                pass:'thien12042003'
            }
        });
    }

    async sendOtp(emailTo:string,otp:string){
        const mailOptions = await this.transporter.sendMail({
            from: 'hutech.nguyentranhoangthien@gmail.com',
            to: emailTo,
            subject: 'Your OTP Code',
            text: `<b>Your OTP code is: ${otp}</b>`,
        });
        console.log("Message sent: %s",mailOptions.messageId)
    }
}
