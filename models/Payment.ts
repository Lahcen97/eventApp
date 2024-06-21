import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Event } from './Event';
import { Ticket } from './Ticket';
import { Package } from './Package';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.payments)
  user: User;

  @ManyToOne(() => Event, event => event.payments, { nullable: true })
  event: Event;

  @ManyToOne(() => Ticket, ticket => ticket.payments, { nullable: true })
  ticket: Ticket;

  @ManyToOne(() => Package, pkg => pkg.payments, { nullable: true })
  package: Package;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('timestamp')
  payment_date: Date;

  @Column({ type: 'varchar', length: 255 })
  payment_status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
