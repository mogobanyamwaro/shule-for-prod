import { Module } from '@nestjs/common';
import { BackendECommerceModule } from '@shule/backend/e-commerce';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
