import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Event } from './Event';
import { PackageItem } from './PackageItem';

@Entity('packages')
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.packages)
  event: Event;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => PackageItem, packageItem => packageItem.package)
  items: PackageItem[];
}
