import {
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  IsDateString,
  Length,
  IsInt,
  IsOptional,
} from 'class-validator';

import { PaymentStatus } from '../payments.entity'; 

export class CreatePaymentDto {
  @IsOptional()
  @IsString()
  @Length(1, 10)
  code?: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  method: string;

  @IsDateString()
  date: string;

  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsInt()
  customerId: number;

  @IsInt()
  businessId: number;
}