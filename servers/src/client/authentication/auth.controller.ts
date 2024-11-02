import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { responseConfig } from 'src/config/response_config';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/middleware/jwt/jwt.middleware';
import { UpdatePasswordDto } from './dto/update-password.dto';


@Controller('/client/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    @ApiOperation({
        summary: "Login user"
    })
    @ApiCreatedResponse({
        description: "Login user successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    async login(@Req() req: Request, @Res() res: Response, @Body() loginDTO: LoginUserDto): Promise<any> {
        try {
            const result = await this.authService.login(loginDTO);
            res.cookie("auth_token", result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Only secure in production
                sameSite: 'strict', // Recommended for security
                maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
            });
            return responseConfig(res, result, "Login Success", 200);
        } catch (e) {
            console.error(e);
            return responseConfig(res, e, "Internal server", 500);
        }
    }


    @ApiOperation({
        summary:"Register user"
    })
    @ApiCreatedResponse({
        description:"Register user successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
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

    @ApiOperation({
        summary:"Update password"
    })
    @ApiCreatedResponse({
        description:"Update password successfully"
    })
    @ApiBadRequestResponse({
        description:"Invalid data provided"
    })
    // Registration endpoint
    @Post('/update-password')
    async updatePassword(@Req() req: Request, @Res() res: Response, @Body() updatePassword: UpdatePasswordDto): Promise<any> {
        try{
            const result = await this.authService.updatePassword(updatePassword);
            return responseConfig(res, result, "Update password success", 200);
        }catch(e){
            return responseConfig(res, e, "Internal server error", 500);
        }
    }
}
