import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CustomersService } from './customers.service';

import { CreateCustomersDto } from './dto/create.customers.dto';
import { UpdateCustomersDto } from './dto/update.customers.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {

  constructor(
    private readonly customerService: CustomersService,
  ) {}

  // LISTAR
  @Get()
  @ApiOkResponse({ description: 'Lista todos los clientes' })
  findAll() {
    return this.customerService.findAll();
  }

  // BUSCAR POR ID
  @Get(':id')
  @ApiOkResponse({ description: 'Busca un cliente por ID' })
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.customerService.findOne(id);
  }

  // CREAR
  @Post()
  @ApiCreatedResponse({ description: 'Cliente creado correctamente' })
  create(
    @Body() createCustomersDto: CreateCustomersDto,
  ) {
    return this.customerService.create(createCustomersDto);
  }

  // ACTUALIZAR
  @Patch(':id')
  @ApiOkResponse({ description: 'Cliente actualizado correctamente' })
  update(
    @Param('id', ParseIntPipe) id: number,

    @Body() updateCustomersDto: UpdateCustomersDto,
  ) {
    return this.customerService.update(
      id,
      updateCustomersDto,
    );
  }

  // ELIMINAR
  @Delete(':id')
  @ApiOkResponse({ description: 'Cliente eliminado correctamente' })
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.customerService.remove(id);
  }
}