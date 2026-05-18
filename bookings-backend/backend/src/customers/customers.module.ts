import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Customer } from './customer.entity';

import { CustomerController } from './customers.controller';
import { CustomersService } from './customers.service';

// TypeORM Convierte tablas de base de datos en clases de TypeScript y viceversa.
// Esto conecta la entidad Customer con TypeORM.

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
  ],

  controllers: [CustomerController],

  providers: [CustomersService],

  exports: [CustomersService],
})
export class CustomersModule {}