import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomersDto } from './dto/create.customers.dto';
import { UpdateCustomersDto } from './dto/update.customers.dto';
export declare class CustomersService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer | null>;
    create(createCustomersDto: CreateCustomersDto): Promise<Customer>;
    update(id: number, updateCustomersDto: UpdateCustomersDto): Promise<Customer>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
