import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import * as dotenv from 'dotenv';

dotenv.config(); 

async function bootstrap() {
  const appClient = await NestFactory.create(ClientModule);
  await appClient.listen(process.env.PORT_CLIENT);

  appClient.enableShutdownHooks();

  const appManager=await NestFactory.create(ManagerModule);
  await appManager.listen(process.env.PORT_MANAGER);

  appManager.enableShutdownHooks();
}
bootstrap();
