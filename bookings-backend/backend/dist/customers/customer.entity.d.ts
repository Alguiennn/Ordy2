import { Business } from '../business/business.entity';
import { Appointment } from '../appointments/appointment.entity';
import { Payment } from '../payments/payments.entity';
export declare class Customer {
    id: number;
    code: string;
    name: string;
    phone: string;
    email: string;
    business: Business;
    appointments: Appointment[];
    payments: Payment[];
}
