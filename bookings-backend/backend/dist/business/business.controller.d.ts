import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
export declare class BusinessController {
    private readonly BusinessService;
    constructor(BusinessService: BusinessService);
    findAll(): Promise<import("./business.entity").Business[]>;
    findOne(id: number): Promise<import("./business.entity").Business | null>;
    create(CreateBusinessDto: CreateBusinessDto): Promise<import("./business.entity").Business>;
    update(id: number, UpdateBusinessDto: UpdateBusinessDto): Promise<import("./business.entity").Business>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
