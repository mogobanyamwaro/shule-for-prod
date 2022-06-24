import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethods, UserRoles } from '@shule/backend/enums';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserInput {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'The password of the user',
  })
  password: string;

  @IsNotEmpty()
  @ApiProperty({ enum: Object.keys(UserRoles) })
  @IsEnum(UserRoles, {
    message: `Role type Must be one of the following: ${Object.keys(
      UserRoles
    ).join(', ')}`,
  })
  role: UserRoles;
}

export class LoginInput {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'The password of the user',
  })
  password: string;
}

export class CreateProfileInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The first name of the user',
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The last name of the user',
  })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The phone of the user',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The gender of the user',
  })
  gender: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The date of birth of the user',
  })
  dateOfBirth: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The avatar of the user',
  })
  avatar: string;

  @IsEnum(PaymentMethods, {
    message: `Payment method type Must be one of the following: ${Object.keys(
      PaymentMethods
    ).join(', ')}`,
  })
  @IsOptional()
  @ApiProperty({
    description: 'The payment method of the user',
  })
  paymentMethod: PaymentMethods;
}
