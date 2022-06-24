import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserInput, LoginInput } from '@shule/backend/dtos';

@Controller('auth')
@ApiTags('Authentication Apis')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({
    type: CreateUserInput,
  })
  @ApiOperation({
    summary: 'Register a new user',
  })
  async register(
    @Body() input: CreateUserInput,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const result = await this.authService.createUser(input);
    //@ts-ignore
    res.json(result);
  }
  @Post('login')
  @ApiBody({ type: LoginInput })
  @ApiOperation({
    summary: 'Login A User',
  })
  async login(
    @Body() input: LoginInput,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const result = await this.authService.login(input);
    //@ts-ignore
    res.cookie('refreshToken', {
      //@ts-ignore
      value: result.refreshToken,
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
    //@ts-ignore
    res.json({ result });
  }

  @Get('check/:email')
  @ApiOperation({
    summary: 'Check if a user is registered',
  })
  @Get('refresh-token')
  @ApiOperation({ summary: 'Refresh Token' })
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const result = await this.authService.refreshToken(req);
    //@ts-ignore
    res.json({ result });
  }
}
