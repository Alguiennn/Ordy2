import { Repository } from 'typeorm';
import { Business } from './business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
export declare class BusinessService {
    private readonly BusinessRepository;
    constructor(BusinessRepository: Repository<Business>);
    findAll(): Promise<Business[]>;
    findOne(id: number): Promise<Business | null>;
    create(createBusinessDto: CreateBusinessDto): Promise<Business>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<Business>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
