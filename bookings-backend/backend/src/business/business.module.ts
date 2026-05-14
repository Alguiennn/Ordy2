import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Business } from './business.entity';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';

// Compila los paquetes para el swwager y la SQlite

@Module({
  imports: [TypeOrmModule.forFeature([Business])],

  controllers: [BusinessController],

  providers: [BusinessService],

  exports: [BusinessService],
})
export class BusinessModule {}