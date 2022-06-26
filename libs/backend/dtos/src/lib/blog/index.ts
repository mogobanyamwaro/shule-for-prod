import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BlogDTO {
  @ApiProperty({ description: 'Blog title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Blog content' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ description: 'Blog image' })
  @IsOptional()
  @IsString()
  image: string;
}
