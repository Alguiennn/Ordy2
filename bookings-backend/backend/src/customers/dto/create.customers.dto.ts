import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCustomersDto {

  @ApiProperty({
    example: 'C001',
    required: false,
  })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ example: 'Pedro' })
  @IsString()
  name: string;

  @ApiProperty({ example: '999999999' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'pedro@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  businessId: number;
}