import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

import { Payment } from './payments.entity';
import { Customer } from '../customers/customer.entity';
import { Business } from '../business/business.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Payment,
      Customer,
      Business,
    ]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}