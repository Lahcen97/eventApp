import { Table, Column, Model, DataType, CreatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';

@Table({
  tableName: 'user_follows',
})
export class UserFollow extends Model<UserFollow> {
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
  followerId!: number;

  @BelongsTo(() => User, 'followerId')
  follower!: User;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  followingId!: number;

  @BelongsTo(() => User, 'followingId')
  following!: User;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  created_at!: Date;
}
