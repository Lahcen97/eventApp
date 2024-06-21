import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Event } from './Event';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.tickets)
  event: Event;

  @Column({ type: 'varchar', length: 255 })
  ticket_type: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
