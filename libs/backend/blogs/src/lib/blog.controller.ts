import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@shule/backend/decorators';
import { User } from '@shule/backend/entities';
import { BlogService } from './blog.service';
import { BlogDTO } from '@shule/backend/dtos';
import { AuthGuard } from '@nestjs/passport';

@Controller('blog')
@ApiTags('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @ApiOperation({ summary: 'Create a blog' })
  @ApiBody({ type: BlogDTO })
  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createBlog(@AuthUser() user: User, @Body() blog: BlogDTO) {
    return this.blogService.createBlog(blog, user);
  }

  @ApiOperation({ summary: 'Get all blogs' })
  @Get('all')
  // @UseGuards(AuthGuard('jwt'))
  // @ApiBearerAuth()
  async getBlogs() {
    return this.blogService.getBlogs();
  }

  @ApiOperation({ summary: 'Get a blog' })
  @Get('get/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getBlog(@AuthUser() user: User, @Param('id') id: string) {
    return this.blogService.getBlog(id);
  }

  @ApiOperation({ summary: 'Delete a blog' })
  @Delete('delete/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteBlog(@AuthUser() user: User, @Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}
