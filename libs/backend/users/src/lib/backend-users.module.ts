import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution, Profile, User } from '@shule/backend/entities';
import { InstitutionController } from './institution.controller';
import { InstitutionService } from './institution.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController, InstitutionController],
  providers: [UserService, InstitutionService],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User, Profile, Institution])],
})
export class BackendUsersModule {}
