import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Event } from './Event';

@Entity('event_documents')
export class EventDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.documents)
  event: Event;

  @Column({ type: 'varchar', length: 255 })
  document_url: string;

  @CreateDateColumn()
  created_at: Date;
}
