import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Event } from './Event';

@Entity('sub_events')
export class SubEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.subEvents)
  event: Event;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @Column('datetime')
  date: Date;

  @Column({ type: 'boolean', default: false })
  is_paid: boolean;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
