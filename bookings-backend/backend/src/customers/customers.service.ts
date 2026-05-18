import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Customer } from './customer.entity';

import { CreateCustomersDto } from './dto/create.customers.dto';
import { UpdateCustomersDto } from './dto/update.customers.dto';

@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  // LISTAR
  findAll() {
    return this.customerRepository.find({
      relations: ['business'],
      order: {
        name: 'ASC',
      },
    });
  }

  // BUSCAR POR ID
  findOne(id: number) {
    return this.customerRepository.findOne({
      where: { id },
      relations: ['business'],
    });
  }

  // CREAR
  async create(
    createCustomersDto: CreateCustomersDto,
  ) {

    const customer = this.customerRepository.create({
      code: createCustomersDto.code,

      name: createCustomersDto.name,

      phone: createCustomersDto.phone,

      email: createCustomersDto.email,

      business: {
        id: createCustomersDto.businessId,
      },
    });

    return this.customerRepository.save(customer);
  }

  // ACTUALIZAR
  async update(
    id: number, // El cliente que vas a actualizar
    updateCustomersDto: UpdateCustomersDto, // Que datos se permiten actualizar : Tipo de dato que siga la estructura del objeto
  ) {

    const customer = await this.customerRepository.findOne({ //Busca en la base de datos
      where: { id }, 
      relations: ['business'], // Tra el la relacion con el ID cliente
    });

    if (!customer) {
      throw new NotFoundException(
        `No existe el cliente con id ${id}`,
      );
    }

    // ACTUALIZA CAMPOS NORMALES
    customer.code =
      updateCustomersDto.code ?? customer.code;

    customer.name =
      updateCustomersDto.name ?? customer.name;

    customer.phone =
      updateCustomersDto.phone ?? customer.phone;

    customer.email =
      updateCustomersDto.email ?? customer.email;

    // ACTUALIZA FK BUSINESS
    if (updateCustomersDto.businessId) {
      customer.business = {
        id: updateCustomersDto.businessId,
      } as any;
    }

    return this.customerRepository.save(customer);
  }

  // ELIMINAR
  async remove(id: number) {

    const customer = await this.customerRepository.findOneBy({
      id,
    });

    if (!customer) {
      throw new NotFoundException(
        `No existe el cliente con id ${id}`,
      );
    }

    await this.customerRepository.remove(customer);

    return {
      message: `Cliente ${id} eliminado correctamente`,
    };
  }
}