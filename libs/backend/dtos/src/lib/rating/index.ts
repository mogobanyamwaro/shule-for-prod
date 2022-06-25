import { ApiProperty } from '@nestjs/swagger';
import { RatingEnumType } from '@shule/backend/enums';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RatingDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The rating value',
  })
  ratingValue: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The comment',
  })
  comment: string;

  @IsEnum(RatingEnumType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The rating type',
  })
  ratingType: RatingEnumType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The institution id',
  })
  institutionId: string;
}
