import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { sendEmailDto } from './dto/sendEmailDTO.dto';


@Injectable()
export class EmailService {
    emailTransport() {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_EMAIL,
            port: 587,
            secure: false,// Nếu bạn không dùng cổng bảo mật SSL, giữ `secure: false`
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASSWORD_EMAIL
            }
        })
        return transporter;
    }

    async sendEmail(data: sendEmailDto) {
        const { recipients, subject, html } = data;

        const transport = this.emailTransport();

        const options: nodemailer.SendMailOptions = {
            from: process.env.EMAIL_USER,
            to: recipients,
            subject: subject,
            html: html,
        };
        try {
            await transport.sendMail(options);
            console.log('Email sent successfully');
        } catch (error) {
            console.log('Error sending mail: ', error);
        }
    }
}
