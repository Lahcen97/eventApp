import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import { Ticket } from './Ticket';
import { SubEvent } from './SubEvent';
import { Payment } from './Payment';
import { Package } from './Package';
import { Favorite } from './Favorite';
import { FeaturedEvent } from './FeaturedEvent';
import { EventDocument } from './EventDocument';

@Table({
  tableName: 'events',
})
export class Event extends Model<Event> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_approved!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_paid!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_featured!: boolean;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: true,
  })
  price!: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  created_at!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updated_at!: Date;

  @HasMany(() => Ticket)
  tickets!: Ticket[];

  @HasMany(() => SubEvent)
  subEvents!: SubEvent[];

  @HasMany(() => Payment)
  payments!: Payment[];

  @HasMany(() => Package)
  packages!: Package[];

  @HasMany(() => Favorite)
  favorites!: Favorite[];

  @HasMany(() => FeaturedEvent)
  featuredEvents!: FeaturedEvent[];

  @HasMany(() => EventDocument)
  documents!: EventDocument[];
}
