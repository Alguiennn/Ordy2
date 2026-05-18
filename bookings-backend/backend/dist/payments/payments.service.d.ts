import { Repository } from 'typeorm';
import { Payment } from './payments.entity';
import { Customer } from '../customers/customer.entity';
import { Business } from '../business/business.entity';
import { CreatePaymentDto } from './dto/create-payments.dto';
import { UpdatePaymentDto } from './dto/update-payments.dto';
export declare class PaymentsService {
    private paymentRepository;
    private customerRepository;
    private businessRepository;
    constructor(paymentRepository: Repository<Payment>, customerRepository: Repository<Customer>, businessRepository: Repository<Business>);
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment>;
    remove(id: number): Promise<Payment>;
}
