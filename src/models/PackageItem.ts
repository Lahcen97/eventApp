import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Package } from './Package';

@Table({
  tableName: 'package_items',
})
export class PackageItem extends Model<PackageItem> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Package)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  packageId!: number;

  @BelongsTo(() => Package, 'packageId')
  package!: Package;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  item_type!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  item_description!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
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
}
