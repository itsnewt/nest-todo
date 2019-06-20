import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenv } from 'dotenv';

async function bootstrap() {
  dotenv();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
