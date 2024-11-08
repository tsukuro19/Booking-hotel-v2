import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { responseConfig } from 'src/config/response_config';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/middleware/jwt/jwt.middleware';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { GoogleAuthGuard } from 'src/auth-google/middleware/google.middleware';
import { JwtService } from '@nestjs/jwt';

@ApiTags('Authentication Client')
@Controller('/client/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService,
    ) { }

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
        summary: "Register user"
    })
    @ApiCreatedResponse({
        description: "Register user successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    // Registration endpoint
    @Post('/register')
    async register(@Req() req: Request, @Res() res: Response, @Body() registerUserDto: RegisterUserDto): Promise<any> {
        try {
            const result = await this.authService.registerWithVerification(registerUserDto);
            res.cookie("auth_token", result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Only secure in production
                sameSite: 'strict', // Recommended for security
                maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
            });
            return responseConfig(res, result, "Register success", 200);
        } catch (e) {
            return responseConfig(res, e, "Internal server error", 500);
        }
    }

    @ApiOperation({
        summary: "Update password"
    })
    @ApiCreatedResponse({
        description: "Update password successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    // Registration endpoint
    @Post('/update-password')
    async updatePassword(@Req() req: Request, @Res() res: Response, @Body() updatePassword: UpdatePasswordDto): Promise<any> {
        try {
            const result = await this.authService.updatePassword(updatePassword);
            return responseConfig(res, result, "Update password success", 200);
        } catch (e) {
            return responseConfig(res, e, "Internal server error", 500);
        }
    }

    @ApiOperation({
        summary: "Confirm Email"
    })
    @ApiCreatedResponse({
        description: "Confirm email successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    @ApiParam({
        name: 'tokenSend',
        required: true,
        description: 'The token sent to confirm the email',
        type: String // Hoặc kiểu dữ liệu khác nếu cần
    })
    // Registration endpoint
    @Get('/confirm/:tokenSend')
    async confirmEmail(@Req() req: Request, @Res() res: Response): Promise<any> {
        try {
            const result = await this.authService.confirmEmail(req.params.tokenSend);
            res.redirect("http://localhost:" + process.env.PORT_FRONTEND_CLIENT);
            return responseConfig(res, result, "Confirm email success", 200);
        } catch (e) {
            return responseConfig(res, e, "Internal server error", 500);
        }
    }

    @ApiOperation({
        summary: "Login with google"
    })
    @ApiCreatedResponse({
        description: "Login with google Successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    // Registration endpoint
    @Get('/google/login')
    @UseGuards(GoogleAuthGuard)
    async loginGoogle() {
        return { msg: "Login with google success" }
    }

    @ApiOperation({
        summary: "Take result after login with google"
    })
    @ApiCreatedResponse({
        description: "Handle redirect with google Successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    // Registration endpoint
    @Get('/google/redirect')
    @UseGuards(GoogleAuthGuard)
    async handleRedirectGoogle(@Req() req: Request, @Res() res: Response): Promise<any> {
        // Extract the email from the user object that is attached to the request
        // Ensure req.user has the email property
        const result=await this.authService.registerJWT(String(req.user));
        res.cookie("auth_token", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only secure in production
            sameSite: 'strict', // Recommended for security
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        });
        return responseConfig(res, {msg: "Handle redirect with google success", token: result.token}, "Confirm email success", 200);
    }

    @ApiOperation({
        summary: "Check security serialize user"
    })
    @ApiCreatedResponse({
        description: "Check Successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    // Registration endpoint
    @Get('status')
    user(@Req() request: Request, @Res() res: Response) {
        if (request.user) {
            return res.status(200).json({ msg: 'Authenticated', user: request.user });
        } else {
            return res.status(401).json({ msg: 'Not Authenticated' });
        }
    }
}
