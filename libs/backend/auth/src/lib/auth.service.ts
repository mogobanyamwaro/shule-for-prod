import { compareSync } from 'bcrypt';

import { UserService } from '@shule/backend/users';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ALREADY_REGISTERED_ERROR } from './constants';

import { VerifyEmailInput } from './dtos/auth.input';
import { AccessToken, RefreshToken, User } from '@shule/backend/entities';
import { getRepository, Repository } from 'typeorm';
import { addDays, addHours } from 'date-fns';

import {
  HttpStatus,
  OnModuleInit,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput, LoginInput } from '@shule/backend/dtos';

export class AuthService implements OnModuleInit {
  private userService: UserService;
  constructor(
    private readonly jwtService: JwtService,
    private moduleRef: ModuleRef,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepo: Repository<RefreshToken>,
    @InjectRepository(AccessToken)
    private readonly accessTokenRepo: Repository<AccessToken>
  ) {}

  onModuleInit() {
    this.userService = this.moduleRef.get(UserService, { strict: false });
  }

  async createUser(input: CreateUserInput) {
    const { email, password, role } = input;
    const user = await this.userService.createUser({
      email,
      password,
      role,
    });
    console.log(user);
    return {
      code: HttpStatus.OK,
      message: 'User Created Successfully',
      timestamp: new Date().toLocaleDateString(),
      user,
    };
  }

  async getUser(id: string) {
    return await this.userService.findById(id);
  }

  async login(input: LoginInput) {
    const { email, password } = input;

    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Invalid Password',
      };
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = await this.jwtService.signAsync(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },

      { secret: process.env.JWT_REFRESH_TOKEN_SECRET }
    );
    return this.saveTokens(user, refreshToken, accessToken);
  }
  async saveTokens(user: User, refreshToken: string, accessToken: string) {
    const refresh = await this.refreshTokenRepo.save(
      this.refreshTokenRepo.create({
        user,
        token: refreshToken,
        expiresAt: addDays(new Date(), 7),
      })
    );

    const access = await this.accessTokenRepo.save(
      this.accessTokenRepo.create({
        user,
        token: accessToken,
        expiresAt: addHours(new Date(), 6),
      })
    );

    return {
      refreshToken: refresh.token,
      refreshTokenExpiresAt: refresh.expiresAt,
      accessToken: access.token,
      accessTokenExpiresAt: access.expiresAt,
    };
  }

  async refreshToken(request: Request) {
    //@ts-ignore
    const tokenData = request.cookies['refreshToken'];

    // * If the refreshToken object is not found
    if (!tokenData) {
      throw new UnauthorizedException();
    }

    const refreshToken = tokenData['value'];

    // * If the actual token value is not found
    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    const user = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    });

    const withRelations = await this.userService.findOneByEmail(user.email);

    const refresh = await this.jwtService.signAsync(
      {
        id: withRelations.id,
        email: withRelations.email,

        role: withRelations.role,
      },
      { expiresIn: '7d', secret: process.env.JWT_REFRESH_TOKEN_SECRET }
    );

    const access = await this.jwtService.signAsync(
      {
        id: withRelations.id,
        email: withRelations.email,
        // username: withRelations.profile?.username,
        role: withRelations.role,
        // status: withRelations.status,
      },
      { expiresIn: '6h', secret: process.env.JWT_SECRET }
    );

    return this.saveTokens(user, refresh, access);
  }
}
