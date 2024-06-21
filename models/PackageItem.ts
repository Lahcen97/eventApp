import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Package } from './Package';

@Entity('package_items')
export class PackageItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Package, pkg => pkg.items)
  package: Package;

  @Column({ type: 'varchar', length: 255 })
  item_type: string;

  @Column('text')
  item_description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
