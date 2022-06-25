import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@shule/backend/decorators';
import { RatingDTO } from '@shule/backend/dtos';
import { User } from '@shule/backend/entities';
import { RatingEnumType } from '@shule/backend/enums';
import { RatingService } from './ratings.service';

@Controller('ratings')
@ApiTags('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @ApiOperation({ summary: 'Create a new rating' })
  @Post('create')
  @ApiBody({ type: RatingDTO })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createUser(@AuthUser() user: User, @Body() input: RatingDTO) {
    return this.ratingService.createRating(input, user);
  }

  @ApiOperation({ summary: 'Get all ratings' })
  @Get('/:type')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getAllRatings(@Param('type') type: string) {
    return this.ratingService.getAllRatings(type);
  }

  @ApiOperation({ summary: 'Get institution ratings' })
  @Get('institution/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getInstitutionRatings(@Param('id') id: string) {
    return this.ratingService.getInstitutionRatings(id);
  }
}
