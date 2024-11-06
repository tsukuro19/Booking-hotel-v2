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
    done(null, user);
  }

  async deserializeUser(payload: string, done: Function) {
    if (payload!=undefined) {
      return done(null, null);
    }
    const user = await this.prismaService.customer.findUnique({ where: { email: payload } });
    return user ? done(null, user) : done(null, null);
  }
}