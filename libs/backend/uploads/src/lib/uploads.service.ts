import { HttpStatus, Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { Multer } from 'multer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Upload } from '@shule/backend/entities';
@Injectable()
export class CloudinaryService {
  constructor(
    @InjectRepository(Upload)
    private readonly uploadRepository: Repository<Upload>
  ) {}
  async uploadImage(
    file: Express.Multer.File
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });

      toStream(file.buffer).pipe(upload);
    });
  }

  async deleteFileFromCloudinary(publicId: string) {
    return new Promise((resolve, reject) => {
      v2.uploader.destroy(publicId, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });
  }
  async deleteFile(user: User, id: string) {
    const upload = await this.uploadRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (upload.user.id !== user.id) {
      return {
        status: HttpStatus.FORBIDDEN,
        message: 'You are not allowed to delete this file',
      };
    }
    if (!upload)
      return { code: HttpStatus.NOT_FOUND, message: 'File not found' };
    await this.uploadRepository.remove(upload);
    return this.deleteFileFromCloudinary(upload.key);
  }
  async storeFile(user: User, file: Express.Multer.File, type?: boolean) {
    const upload = await this.uploadImage(file);
    const uploadEntity = new Upload();
    uploadEntity.key = upload.public_id;
    uploadEntity.url = upload.url;
    uploadEntity.metadata = {
      filename: upload.original_filename,
      mimetype: upload.mime_type,
      size: upload.bytes,
    };
    uploadEntity.isPublic = type;
    uploadEntity.type = upload.resource_type;
    uploadEntity.user = user;
    return this.uploadRepository.save(uploadEntity);
  }
}
