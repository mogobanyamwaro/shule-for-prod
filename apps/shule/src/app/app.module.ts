import { Module } from '@nestjs/common';
import { BackendCoreModule } from '@shule/backend/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    BackendCoreModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      exclude: ['/api/**'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
