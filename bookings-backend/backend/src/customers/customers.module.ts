import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Customer } from './customer.entity';

import { CustomerController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
  ],

  controllers: [CustomerController],

  providers: [CustomersService],

  exports: [CustomersService],
})
export class CustomersModule {}