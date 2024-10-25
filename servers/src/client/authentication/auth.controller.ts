import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { responseConfig } from 'src/config/response_config';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Get()
    getHello():string{
        return this.authService.getHello();
    }

    @Post('/login')
    async login(@Req() req:Request, @Res() res:Response, @Body() loginDTO:LoginUserDto):Promise<any>{
        try{
            const result= await this.authService.login(loginDTO);
            return responseConfig(res,result,"Login Success",200);
        }catch(e){
            console.error(e);
            return responseConfig(res,e,"Internal server",500);
        }
    }

     // Registration endpoint
     @Post('/register')
     async register(@Req() req: Request, @Res() res: Response, @Body() registerUserDto: RegisterUserDto): Promise<any> {
         try {
             const result = await this.authService.registerWithOutOTP(registerUserDto);
             return responseConfig(res, result, "Register success", 200);
         } catch (e) {
             return responseConfig(res, e, "Internal server error", 500);
         }
     }
 
     // OTP verification endpoint
     @Post('/verify-otp')
     async verifyOtp(
         @Req() req: Request,
         @Res() res: Response,
         @Body() body: { email: string; otp: string }
     ): Promise<any> {
         try {
             const { email, otp } = body;
             const result = await this.authService.verifyOtp(email, otp);
             return responseConfig(res, result, "OTP Verified and save customer to database", 200);
         } catch (e) {
             return responseConfig(res, e, "Invalid OTP or server error", 400);
         }
     }
}
