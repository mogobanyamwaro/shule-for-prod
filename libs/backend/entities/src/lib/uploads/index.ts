import { BaseEntity } from '../base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { ImageTypes } from './image.types';
export type FileMetadata = {
  filename?: string;
  height?: number;
  width?: number;
  type?: string;
  lastModified?: Date;
  mimetype?: string;
  uploadIp?: string;
  size?: string;
};

@Entity('uploads')
export class Upload extends BaseEntity {
  @Column({
    name: 'key',
    unique: true,
  })
  key: string;

  @Column({
    name: 'url',
  })
  url: string;

  @Column({
    name: 'metadata',
    type: 'jsonb',
    nullable: true,
  })
  metadata: FileMetadata;

  @Column({
    name: 'is_public',
  })
  isPublic: boolean;

  @Column({
    name: 'type',
    type: 'enum',
    enum: ImageTypes,
    nullable: true,
  })
  type: ImageTypes;

  @ManyToOne(() => User, (user) => user.files)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export * from './image.types';
