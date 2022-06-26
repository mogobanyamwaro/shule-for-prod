import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackendAuthModule } from '@shule/backend/auth';
import { BackendUsersModule } from '@shule/backend/users';
import { BackendRatingsModule } from '@shule/backend/ratings';
import { getMetadataArgsStorage } from 'typeorm';
import { BackendBlogsModule } from '@shule/backend/blogs';
import { BackendUploadsModule } from '@shule/backend/uploads';
@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        ssl: {
          rejectUnauthorized: false,
        },

        synchronize: process.env.NODE_ENV === 'development',
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
    BackendUsersModule,
    BackendAuthModule,
    BackendRatingsModule,
    BackendBlogsModule,
    BackendUploadsModule,
  ],
})
export class BackendCoreModule {}
