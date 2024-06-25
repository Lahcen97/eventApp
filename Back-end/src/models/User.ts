import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import { Favorite } from './Favorite';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  country!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  oauth_provider!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  oauth_id!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_admin!: boolean;

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

  @HasMany(() => Favorite)
  favorites!: Favorite[];
}
