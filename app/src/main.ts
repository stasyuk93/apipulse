import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({
          logger: true,
          ignoreTrailingSlash: true,
      })
  );

  app.useGlobalPipes(new ValidationPipe({
      transform: true,
  }));

  await app.listen(3000);


}

bootstrap();
