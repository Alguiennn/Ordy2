import { Customer } from '../customers/customer.entity';
import { Appointment } from '../appointments/appointment.entity';
import { Payment } from '../payments/payments.entity';
export declare class Business {
    id: number;
    name: string;
    customers: Customer[];
    appointments: Appointment[];
    payments: Payment[];
}
