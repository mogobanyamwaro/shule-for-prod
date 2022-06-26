import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload, User } from '@shule/backend/entities';
import { CloudinaryProvider } from './cloudinary.providers';
import { UploadController } from './upload.controller';
import { CloudinaryService } from './uploads.service';

@Module({
  controllers: [UploadController],
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryService, CloudinaryProvider],
  imports: [TypeOrmModule.forFeature([User, Upload])],
})
export class BackendUploadsModule {}
