import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt_node") {
    constructor(private readonly primasService:PrismaModuleService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Bearer ...
            ignoreExpiration: true, // bật tắt expiredIn
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload:{email:string}) {
        const users= await this.primasService.customer.findUnique({
            where:{
                email:payload.email
            }
        })
        return users;
    }
}