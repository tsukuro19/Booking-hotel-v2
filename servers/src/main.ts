import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config(); 

async function bootstrap() {
  const appServer = await NestFactory.create(AppModule);
  appServer.enableShutdownHooks();
  appServer.enableCors();
  appServer.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Booking Hotel V2 API')
    .setDescription('The Booking Hotel V2 API description')
    .setVersion('1.0')
    .addBasicAuth()
    .build();

    appServer.use(cookieParser());
  
    const document=SwaggerModule.createDocument(appServer,config);
    SwaggerModule.setup('api',appServer,document);
    await appServer.listen(process.env.PORT_SERVER);
}
bootstrap();
