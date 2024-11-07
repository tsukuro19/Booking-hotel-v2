import { Module } from '@nestjs/common';
import { ValidateTokenController } from './validate-token.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "2d"
      }
    }),
],
  controllers: [ValidateTokenController]
})
export class ValidateTokenModule {}
