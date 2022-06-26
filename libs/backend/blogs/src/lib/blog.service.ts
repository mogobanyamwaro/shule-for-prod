import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogDTO } from '@shule/backend/dtos';
import { Blog, User } from '@shule/backend/entities';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>
  ) {}

  async createBlog(blog: BlogDTO, user: User) {
    const newBlog = this.blogRepository.create(blog);
    newBlog.user = user;
    return this.blogRepository.save(newBlog);
  }

  async getBlogs() {
    return this.blogRepository.find();
  }

  async getBlog(id: string) {
    return this.blogRepository.findOne({
      where: { id },
    });
  }

  async deleteBlog(id: string) {
    return this.blogRepository.delete({ id });
  }
}
