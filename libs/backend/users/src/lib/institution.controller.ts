import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@shule/backend/decorators';
import { InstitutionDTO } from '@shule/backend/dtos';
import { Institution, User } from '@shule/backend/entities';
import { InstitutionService } from './institution.service';

@Controller('institutions')
@ApiTags('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @ApiOperation({ summary: 'Create a new Institution' })
  @Post('create')
  @ApiBody({ type: InstitutionDTO })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createUser(@AuthUser() user: User, @Body() input: InstitutionDTO) {
    return this.institutionService.createInstitution(user.id, input);
  }

  @ApiOperation({ summary: 'Update institution profile' })
  @Put('update')
  @ApiBody({ type: InstitutionDTO })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async updateInstitution(@AuthUser() user: User, @Body() input: Institution) {
    return this.institutionService.updateInstitution(user.id, input);
  }

  @ApiOperation({ summary: 'Get all institutions' })
  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getAllInstitutions() {
    return this.institutionService.getAllInstitutions();
  }

  @ApiOperation({ summary: 'Get an institution' })
  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getInstitution(@Param('id') id: string) {
    return this.institutionService.getInstitution(id);
  }
}
