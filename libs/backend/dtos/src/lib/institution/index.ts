import { ApiProperty } from '@nestjs/swagger';
import { InstitutionEnumStatus } from '@shule/backend/enums';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class InstitutionDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The about of the institution',
  })
  about: string;

  @IsEnum(InstitutionEnumStatus)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The status of the institution',
  })
  status: InstitutionEnumStatus;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The education type of the institution',
  })
  educationType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The education level of the institution',
  })
  educationLevel: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The performance statistics of the institution',
  })
  performanceStatistics: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The license and certification of the institution',
  })
  licenseAndCertification: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The location of the institution',
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The phone of the institution',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the institution',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The facebook link of the institution',
  })
  facebookLink: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The instagram link of the institution',
  })
  instagramLink: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The school photos of the institution',
  })
  schoolPhotos: string[];
}
