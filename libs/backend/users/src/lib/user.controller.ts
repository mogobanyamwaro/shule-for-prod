import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@shule/backend/decorators';
import { CreateUserInput } from '@shule/backend/dtos';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @Post('create')
  @ApiBody({ type: CreateUserInput })
  async createUser(@Body() input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getUsers(@AuthUser() user: any) {
    return user;
  }
}
