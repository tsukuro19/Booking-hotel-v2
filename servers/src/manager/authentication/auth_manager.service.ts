import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { Manager } from 'src/models/manager.model';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { EmailService } from 'src/email/email.service';
import * as crypto from 'crypto';
import { ManagerService } from '../service/manager.service';

@Injectable()
export class AuthManagerService {
    private otps = new Map<string, string>();
    private managerTemp = new Map<string, RegisterUserDto>();

    constructor(
        private readonly primasService: PrismaModuleService,
        private jwtService: JwtService,
        private readonly managerService: ManagerService,
        private emailService: EmailService) { }

    async registerJWT(email: string) {
        return {
            token: this.jwtService.sign({ email_user: email })
        }
    }

    async login(loginDTO: LoginUserDto): Promise<any> {
        const { email, password } = loginDTO;

        const manager = await this.primasService.manager.findUnique({
            where: { email }
        })

        if (!manager) {
            throw new NotFoundException("User not found");
        }

        const validPassword = await bcrypt.compare(password, manager.password);

        if (!validPassword) {
            throw new NotFoundException('Invalid password')
        }


        return {
            token: this.jwtService.sign({ email_user: email })
        }
    }


    async registerWithVerification(registerDto: RegisterUserDto): Promise<any> {
        const manager = await this.primasService.manager.findUnique({
            where: { email: registerDto.email }
        })
        if (manager) {
            return "User already exists";
        }
        if (registerDto.password !== registerDto.retype_password) {
            throw new BadRequestException('Password does not match');
        }
        const tokenExist = await this.primasService.tokenHotel.findUnique({
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
                await this.primasService.tokenHotel.delete({
                    where: {
                        id: tokenExist.id
                    }
                })
            } else {
                return { message: "A verification email has been sent to your gmail. Please verify your email or try again in 5 minutes." };
            }
        } else {
            const newManager = new Manager();
            const email = registerDto.email;
            newManager.email = registerDto.email;
            newManager.password = await bcrypt.hash(registerDto.password, 10);;
            newManager.first_name = registerDto.first_name || '';
            newManager.last_name = registerDto.last_name || '';
            newManager.isVerified = false;
            newManager.phone_number = registerDto.phone_number || '';
            newManager.username = registerDto.username || '';

            const emailToken = crypto.randomBytes(64).toString('hex');
            const user = await this.managerService.createManager(newManager);
            //Create token to send email
            const token = await this.primasService.tokenHotel.create({
                data: {
                    email: user.email,
                    token: emailToken,
                    managerId: user.id
                }
            })
            await this.primasService.manager.update({
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
                html: `<a href="http://localhost:${process.env.PORT_SERVER}/manager/auth/confirm/${emailToken}">Click here to verify</a>`,
                text: ""
            })
            return {
                token: this.jwtService.sign({ email_user: email }),
                tokenEmail: emailToken
            };
        }
    }

    async confirmEmail(tokenSend: string): Promise<any> {
        const tokenData = await this.primasService.tokenHotel.findUnique({
            where: {
                token: tokenSend
            }
        })
        if (!tokenData) {
            throw new NotFoundException("Not found token");
        }
        const manager = await this.managerService.updateIsVerified(tokenData.managerId);
        const managerId = tokenData.managerId;
        await this.primasService.tokenHotel.delete({
            where: {
                id: tokenData.id
            }
        });
        await this.primasService.manager.update({
            where: {
                id: managerId
            },
            data: {
                tokenId: null
            }
        })
        return manager;
    }

    async updatePassword(data: UpdatePasswordDto): Promise<any> {
        const { email, password, retype_password, oldPassword } = data;
        if (password !== retype_password) {
            throw new BadRequestException('Password does not match');
        }
        const save_password = await bcrypt.hash(password, 10);
        const result = await this.managerService.updatePassword(email, oldPassword, save_password);
        return result;
    }
}
