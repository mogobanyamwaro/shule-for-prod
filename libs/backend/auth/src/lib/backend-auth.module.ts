import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessToken, RefreshToken, User } from '@shule/backend/entities';
import { BackendUsersModule } from '@shule/backend/users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './service/token.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenService],
  exports: [],
  imports: [
    forwardRef(() => BackendUsersModule),

    TypeOrmModule.forFeature([User, AccessToken, RefreshToken]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      }),
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
})
export class BackendAuthModule {}
