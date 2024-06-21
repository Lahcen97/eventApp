import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Event } from './Event';

@Entity('featured_events')
export class FeaturedEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.featuredEvents)
  event: Event;

  @Column({ type: 'varchar', length: 255, nullable: true })
  country: string;

  @Column({ type: 'boolean', default: false })
  global: boolean;
}