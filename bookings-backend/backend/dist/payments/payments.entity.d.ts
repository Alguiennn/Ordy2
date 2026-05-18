import { Customer } from '../customers/customer.entity';
import { Business } from '../business/business.entity';
export declare enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid"
}
export declare class Payment {
    id: number;
    code?: string;
    amount: number;
    method: string;
    date: string;
    status: PaymentStatus;
    customer: Customer;
    business: Business;
}
