import { PaymentStatus } from '../payments.entity';
export declare class CreatePaymentDto {
    code?: string;
    amount: number;
    method: string;
    date: string;
    status: PaymentStatus;
    customerId: number;
    businessId: number;
}
