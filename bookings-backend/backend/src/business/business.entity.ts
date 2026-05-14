import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Customer } from '../customers/customer.entity';
import { Appointment } from '../appointments/appointment.entity';
import { Payment } from '../payments/payments.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  // RELACIONES (opcional pero recomendado)
  @OneToMany(() => Customer, customer => customer.business)
  customers: Customer[];

  @OneToMany(() => Appointment, appointment => appointment.business)
  appointments: Appointment[];

  @OneToMany(() => Payment, payment => payment.business)
  payments: Payment[];
}