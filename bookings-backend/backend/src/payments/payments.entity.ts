import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Customer } from '../customers/customer.entity';
import { Business } from '../business/business.entity';

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 10,
    unique: true,
    nullable: true,
  })
  code?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 50 })
  method: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'text', default: PaymentStatus.PENDING })
  status: PaymentStatus;

  // 🔗 FK cliente
  @ManyToOne(() => Customer, customer => customer.payments)
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  // 🔗 FK negocio
  @ManyToOne(() => Business, business => business.payments)
  @JoinColumn({ name: 'businessId' })
  business: Business;
}