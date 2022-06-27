import { ClassSerializerInterceptor, Logger } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WinstonModule, utilities as WinstonUtilities } from 'nest-winston';
import * as express from 'express';
import * as winston from 'winston';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';
// import * as compression from 'compression';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    cors: true,
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: WinstonUtilities.format.nestLike('GoShule', {
            prettyPrint: true,
          }),
        }),
      ],
    }),
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableShutdownHooks();
  app.enableCors();
  app.use(cookieParser());
  // app.use(compression());

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Go Shule API')
    .setDescription('The Go Shule API description')
    .setVersion('1.0')
    .addTag('Go Shule')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 5000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `🚀 Swagger is running on: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();
