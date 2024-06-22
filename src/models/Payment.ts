import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';
import { Event } from './Event';
import { Ticket } from './Ticket';
import { Package } from './Package';

@Table({
  tableName: 'payments',
})
export class Payment extends Model<Payment> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  eventId!: number;

  @BelongsTo(() => Event)
  event!: Event;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  ticketId!: number;

  @BelongsTo(() => Ticket)
  ticket!: Ticket;

  @ForeignKey(() => Package)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  packageId!: number;

  @BelongsTo(() => Package)
  package!: Package;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  payment_date!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment_status!: string;

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
}
