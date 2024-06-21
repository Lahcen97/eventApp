import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { EventDocument } from './EventDocument';
import { FeaturedEvent } from './FeaturedEvent';
import { Ticket } from './Ticket';
import { Package } from './Package';
import { Payment } from './Payment';
import { SubEvent } from './SubEvent';
import { Favorite } from './Favorite';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.events)
  user: User;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @Column('datetime')
  date: Date;

  @Column({ type: 'boolean', default: false })
  is_approved: boolean;

  @Column({ type: 'boolean', default: false })
  is_paid: boolean;

  @Column({ type: 'boolean', default: false })
  is_featured: boolean;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => EventDocument, eventDocument => eventDocument.event)
  documents: EventDocument[];

  @OneToMany(() => FeaturedEvent, featuredEvent => featuredEvent.event)
  featuredEvents: FeaturedEvent[];

  @OneToMany(() => Ticket, ticket => ticket.event)
  tickets: Ticket[];

  @OneToMany(() => Package, pkg => pkg.event)
  packages: Package[];

  @OneToMany(() => Payment, payment => payment.event)
  payments: Payment[];

  @OneToMany(() => SubEvent, subEvent => subEvent.event)
  subEvents: SubEvent[];

  @OneToMany(() => Favorite, favorite => favorite.event)
  favorites: Favorite[];
}
