import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { CustomerService } from '../../customer/customer.service';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { Customer } from 'src/models/customer.model';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { EmailService } from 'src/email/email.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    private otps = new Map<string, string>();
    private customerTemp = new Map<string, RegisterUserDto>();

    constructor(
        private readonly primasService: PrismaModuleService,
        private jwtService: JwtService,
        private readonly customerService: CustomerService,
        private emailService: EmailService) { }

    async registerJWT(email: string) {
        return {
            token: this.jwtService.sign({ email_user: email })
        }
    }

    async login(loginDTO: LoginUserDto): Promise<any> {
        const { email, password } = loginDTO;

        const customer = await this.primasService.customer.findUnique({
            where: { email }
        })

        if (!customer) {
            throw new NotFoundException("User not found");
        }

        if(!customer.isVerified) {
            throw new BadRequestException('User not already verified');
        }

        const validPassword = await bcrypt.compare(password, customer.password);

        if (!validPassword) {
            throw new BadRequestException('Invalid password')
        }


        return {
            token: this.jwtService.sign({ email_user: email }),
            userId:customer.id
        }
    }


    async registerWithVerification(registerDto: RegisterUserDto): Promise<any> {
        const customer = await this.primasService.customer.findUnique({
            where: { email: registerDto.email }
        })
        if (customer) {
            throw new BadRequestException('User already exists');
        }
        if (registerDto.password !== registerDto.retype_password) {
            throw new BadRequestException('Password does not match');
        }
        const tokenExist = await this.primasService.token.findUnique({
            where: {
                email: registerDto.email
            }
        });
        if (tokenExist) {
            const currentDate = new Date();
            const tokenDate = new Date(tokenExist.createdAt);
            const timeDiff = (currentDate.getTime() - tokenDate.getTime()) / (1000 * 60);
            // If the token is older than 5 minutes, delete the old token and create a new one
            if (timeDiff > 5) {
                await this.primasService.token.delete({
                    where: {
                        id: tokenExist.id
                    }
                })
            } else {
                return { message: "A verification email has been sent to your gmail. Please verify your email or try again in 5 minutes." };
            }
        } else {
            const newCustomer = new Customer();
            const email = registerDto.email;
            newCustomer.email = registerDto.email;
            newCustomer.password = await bcrypt.hash(registerDto.password, 10);;
            newCustomer.first_name = registerDto.first_name || '';
            newCustomer.last_name = registerDto.last_name || '';
            newCustomer.isVerified = false;
            newCustomer.phone_number = registerDto.phone_number || '';
            newCustomer.username = registerDto.username || '';

            const emailToken = crypto.randomBytes(64).toString('hex');
            const user = await this.customerService.createCustomer(newCustomer);
            //Create token to send email
            const token = await this.primasService.token.create({
                data: {
                    email: user.email,
                    token: emailToken,
                    customerId: user.id
                }
            })
            await this.primasService.customer.update({
                where: {
                    id: user.id
                },
                data: {
                    tokenId: token.id
                }
            })
            this.emailService.sendEmail({
                recipients: user.email,
                subject: "Email verification",
                html: `<a href="http://localhost:${process.env.PORT_SERVER}/client/auth/confirm/${emailToken}">Click here to verify</a>`,
                text: ""
            })
            return {
                token: this.jwtService.sign({ email_user: email }),
                tokenEmail: emailToken,
                userId:customer.id
            };
        }

    }

    async confirmEmail(tokenSend: string): Promise<any> {
        const tokenData = await this.primasService.token.findUnique({
            where: {
                token: tokenSend
            }
        })
        if (!tokenData) {
            throw new NotFoundException("Not found token");
        }
        const customer = await this.customerService.updateIsVerified(tokenData.customerId);
        const customerId = tokenData.customerId;
        await this.primasService.token.delete({
            where: {
                id: tokenData.id
            }
        });
        await this.primasService.customer.update({
            where: {
                id: customerId
            },
            data: {
                tokenId: null
            }
        })
        return customer;
    }

    async updatePassword(data: UpdatePasswordDto): Promise<any> {
        const { email, password, retype_password, oldPassword } = data;
        if (password !== retype_password) {
            throw new BadRequestException('Password does not match');
        }
        const save_password = await bcrypt.hash(password, 10);
        const result = await this.customerService.updatePassword(email, oldPassword, save_password);
        return result;
    }
}
