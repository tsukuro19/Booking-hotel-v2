import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const token = request.cookies['auth_token'];
        
        if (!token) {
            throw new UnauthorizedException('Token missing');
        }

        try {
            // Verify token
            const payload = this.jwtService.verify(token);
            request['email'] = payload;
            return true;
        } catch (e) {
            throw new UnauthorizedException('Token expired or invalid');
        }
    }
}
