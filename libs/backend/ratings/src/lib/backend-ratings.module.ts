import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution, Rating, User } from '@shule/backend/entities';
import { RatingController } from './rating.controller';
import { RatingService } from './ratings.service';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
  imports: [TypeOrmModule.forFeature([Rating, User, Institution])],
  exports: [],
})
export class BackendRatingsModule {}
