import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { CustomerService } from '../../customer/customer.service';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from './email.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { Customer } from 'src/models/customer/customer.model';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthService {
    private otps = new Map<string, string>();
    private customerTemp = new Map<string, RegisterUserDto>();

    constructor(
        private readonly primasService: PrismaModuleService,
        private jwtService: JwtService,
        private readonly customerService: CustomerService,
        private emailService: EmailService) { }

    async login(loginDTO: LoginUserDto): Promise<any> {
        const { email, password } = loginDTO;

        const customer = await this.primasService.customer.findUnique({
            where: { email }
        })

        if (!customer) {
            throw new NotFoundException("User not found");
        }

        const validPassword = await bcrypt.compare(password, customer.password);

        if (!validPassword) {
            throw new NotFoundException('Invalid password')
        }


        return {
            token: this.jwtService.sign({ email_user:email })
        }
    }

    // Method to generate a 6-digit OTP
    private generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Registration method
    async register(registerUserDto: RegisterUserDto): Promise<any> {
        const { email } = registerUserDto;

        // Generate OTP and store user temporarily
        const otp = this.generateOtp();
        this.otps.set(email, otp);
        this.customerTemp.set(email, registerUserDto);

        // Send OTP to user's email
        await this.emailService.sendOtp(email, otp);

        return { message: 'OTP has been sent to your email for verification' };
    }

    async registerWithOutOTP(registerDto: RegisterUserDto): Promise<any> {
        if(registerDto.password !== registerDto.retype_password){
            throw new BadRequestException('Password does not match');
        }
        const newCustomer = new Customer();
        const email=registerDto.email;
        newCustomer.email = registerDto.email;
        newCustomer.password = await bcrypt.hash(registerDto.password, 10);;
        newCustomer.first_name = registerDto.first_name || '';
        newCustomer.last_name = registerDto.last_name || '';
        newCustomer.isVerified = false;
        newCustomer.phone_number = registerDto.phone_number || '';
        newCustomer.username = registerDto.username || '';

        const user = await this.customerService.createCustomer(newCustomer);
        return {
            token: this.jwtService.sign({ email_user:email }),
        };
    }

    // OTP verification method
    async verifyOtp(email: string, otp: string): Promise<any> {
        const storedOtp = this.otps.get(email);
        const tempUser = this.customerTemp.get(email);

        if (!storedOtp || storedOtp !== otp || !tempUser) {
            throw new BadRequestException('Invalid OTP or email');
        }

        // Remove OTP and temp user info after successful verification
        this.otps.delete(email);
        this.customerTemp.delete(email);
        const newCustomer = new Customer();
        newCustomer.email = tempUser.email;
        newCustomer.password = await bcrypt.hash(tempUser.password, 10);;
        newCustomer.first_name = tempUser.first_name || '';
        newCustomer.last_name = tempUser.last_name || '';
        newCustomer.isVerified = true;
        newCustomer.phone_number = tempUser.phone_number || '';
        newCustomer.username = tempUser.username || '';

        const user = await this.customerService.createCustomer(newCustomer);

        return { message: 'User successfully registered and verified' };
    }
    
    async updatePassword(data: UpdatePasswordDto): Promise<any> {
        const {email, password, retype_password ,oldPassword} = data;
        if(password !== retype_password){
            throw new BadRequestException('Password does not match');
        }
        const save_password=await bcrypt.hash(password, 10);
        const result=await this.customerService.updatePassword(email, oldPassword,save_password);
        return result;
    }
}
