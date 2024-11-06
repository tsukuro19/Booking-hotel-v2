import { Module } from '@nestjs/common';

import { googleStrategy } from './utils/google.strategy';
import { CustomerService } from 'src/customer/customer.service';
import { Prisma } from '@prisma/client';
import { PrismaModuleService } from 'src/prisma_module/prisma_module.service';
import { AuthGoogleService } from './auth-google.service';
import { SessionSerializer } from './utils/serializer';
import { AuthService } from 'src/client/authentication/auth.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';

@Module({
  providers: [AuthGoogleService,googleStrategy,CustomerService,PrismaModuleService,SessionSerializer,AuthService,JwtService,EmailService]
})
export class AuthGoogleModule {}
