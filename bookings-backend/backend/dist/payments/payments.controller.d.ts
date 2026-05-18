import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payments.dto';
import { UpdatePaymentDto } from './dto/update-payments.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    findAll(): Promise<import("./payments.entity").Payment[]>;
    findOne(id: number): Promise<import("./payments.entity").Payment>;
    create(createPaymentDto: CreatePaymentDto): Promise<import("./payments.entity").Payment>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<import("./payments.entity").Payment>;
    remove(id: number): Promise<import("./payments.entity").Payment>;
}
