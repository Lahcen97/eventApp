import { Table, Column, Model, DataType, CreatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';
import { Event } from './Event';

@Table({
  tableName: 'favorites',
})
export class Favorite extends Model<Favorite> {
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

  @BelongsTo(() => User, 'userId')
  user!: User;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventId!: number;

  @BelongsTo(() => Event, 'eventId')
  event!: Event;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  created_at!: Date;
}
