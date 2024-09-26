import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cookieParser from 'cookie-parser';// Importar cookieParser

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());//parsear cookies

  await app.listen(3000);
}

bootstrap();
