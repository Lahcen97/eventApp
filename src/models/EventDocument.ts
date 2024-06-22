import { Table, Column, Model, DataType, CreatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Event } from './Event';

@Table({
  tableName: 'event_documents',
})
export class EventDocument extends Model<EventDocument> {
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
  document_url!: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  created_at!: Date;
}
