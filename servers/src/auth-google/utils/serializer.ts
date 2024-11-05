/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthGoogleService } from '../auth-google.service';
import { Customer } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';


@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject() private readonly authService: AuthGoogleService,
    private readonly prismaService:PrismaModuleService
  ) {
    super();
  }

  serializeUser(user: Customer, done: Function) {
    console.log('Serializer User');
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    console.log(payload);
    const user = await this.prismaService.customer.findUnique({ where: { id: payload.id } });
    console.log('Deserialize User');
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}