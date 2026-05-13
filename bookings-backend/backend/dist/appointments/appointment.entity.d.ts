export declare enum AppointmentStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    PAID = "paid"
}
export declare class Appointment {
    id: number;
    date: string;
    time: string;
    status: AppointmentStatus;
    customerId: number;
    businessId: number;
    serviceName: string;
}
