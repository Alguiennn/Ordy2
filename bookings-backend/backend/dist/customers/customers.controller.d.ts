import { CustomersService } from './customers.service';
import { CreateCustomersDto } from './dto/create.customers.dto';
import { UpdateCustomersDto } from './dto/update.customers.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomersService);
    findAll(): Promise<import("./customer.entity").Customer[]>;
    findOne(id: number): Promise<import("./customer.entity").Customer | null>;
    create(createCustomersDto: CreateCustomersDto): Promise<import("./customer.entity").Customer>;
    update(id: number, updateCustomersDto: UpdateCustomersDto): Promise<import("./customer.entity").Customer>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
