import { Module } from '@nestjs/common';
import { BackendCoreModule } from '@shule/backend/core';
import { BackendECommerceModule } from '@shule/backend/e-commerce';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
