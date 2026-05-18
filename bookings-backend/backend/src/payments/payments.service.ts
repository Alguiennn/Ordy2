import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment } from './payments.entity'; 
import { Customer } from '../customers/customer.entity';
import { Business } from '../business/business.entity';

import { CreatePaymentDto } from './dto/create-payments.dto'; 
import { UpdatePaymentDto } from './dto/update-payments.dto'; 

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const customer = await this.customerRepository.findOne({
      where: { id: createPaymentDto.customerId },
    });

    if (!customer) {
      throw new NotFoundException('Cliente no encontrado');
    }

    const business = await this.businessRepository.findOne({
      where: { id: createPaymentDto.businessId },
    });

    if (!business) {
      throw new NotFoundException('Negocio no encontrado');
    }

    const payment = this.paymentRepository.create({
      code: createPaymentDto.code,
      amount: createPaymentDto.amount,
      method: createPaymentDto.method,
      date: createPaymentDto.date,
      status: createPaymentDto.status,
      customer,
      business,
    });

    return await this.paymentRepository.save(payment);
  }

  async findAll() {
    return await this.paymentRepository.find({
      relations: ['customer', 'business'],
    });
  }

  async findOne(id: number) {
    const payment = await this.paymentRepository.findOne({
      where: { id },
      relations: ['customer', 'business'],
    });

    if (!payment) {
      throw new NotFoundException('Pago no encontrado');
    }

    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.findOne(id);

    if (updatePaymentDto.customerId) {
      const customer = await this.customerRepository.findOne({
        where: { id: updatePaymentDto.customerId },
      });

      if (!customer) {
        throw new NotFoundException('Cliente no encontrado');
      }

      payment.customer = customer;
    }

    if (updatePaymentDto.businessId) {
      const business = await this.businessRepository.findOne({
        where: { id: updatePaymentDto.businessId },
      });

      if (!business) {
        throw new NotFoundException('Negocio no encontrado');
      }

      payment.business = business;
    }

    Object.assign(payment, {
      code: updatePaymentDto.code ?? payment.code,
      amount: updatePaymentDto.amount ?? payment.amount,
      method: updatePaymentDto.method ?? payment.method,
      date: updatePaymentDto.date ?? payment.date,
      status: updatePaymentDto.status ?? payment.status,
    });

    return await this.paymentRepository.save(payment);
  }

  async remove(id: number) {
    const payment = await this.findOne(id);

    return await this.paymentRepository.remove(payment);
  }
}