import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Customer } from '../customers/customer.entity';
import { Business } from '../business/business.entity';

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PAID = 'paid',
}

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: string;

  @Column()
  time: string;

  @Column({
    type: 'text',
    default: AppointmentStatus.PENDING,
  })
  status: AppointmentStatus;

  @Column()
  serviceName: string;

  // 🔗 FK cliente
  @ManyToOne(() => Customer, customer => customer.appointments)
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  // 🔗 FK negocio
  @ManyToOne(() => Business, business => business.appointments)
  @JoinColumn({ name: 'businessId' })
  business: Business;
}