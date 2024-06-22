import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Event } from './Event';
import { PackageItem } from './PackageItem';

@Table({
  tableName: 'packages',
})
export class Package extends Model<Package> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventId!: number;

  @BelongsTo(() => Event, 'eventId')
  event!: Event;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  available!: boolean;

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

  @HasMany(() => PackageItem, 'packageId')
  items!: PackageItem[];
}
