import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Business } from '../business/business.entity';
import { Appointment } from '../appointments/appointment.entity';
import { Payment } from '../payments/payments.entity';

@Entity()
export class Customer {

  @PrimaryGeneratedColumn()
  id: number;

  // OPCIONAL
  @Column({
    type: 'varchar',
    length: 10,
    unique: true,
    nullable: true,
  })
  code?: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  email: string;

  // FK BUSINESS
  @ManyToOne(
    () => Business,
    business => business.customers,
  )
  @JoinColumn({
    name: 'businessId',
  })
  business: Business;

  // RELACIONES
  @OneToMany(
    () => Appointment,
    appointment => appointment.customer,
  )
  appointments: Appointment[];

  @OneToMany(
    () => Payment,
    payment => payment.customer,
  )
  payments: Payment[];
}