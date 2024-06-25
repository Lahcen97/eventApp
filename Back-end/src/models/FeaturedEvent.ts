import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Event } from './Event';

@Table({
  tableName: 'featured_events',
})
export class FeaturedEvent extends Model<FeaturedEvent> {
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
    allowNull: true,
  })
  country!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  global!: boolean;
}
