import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
})
export class PaymentsModule {}