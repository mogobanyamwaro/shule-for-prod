import { ProductEnumStatus } from '@shule/backend/enums';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../users/user.entity';
@Entity('products')
export class Product extends BaseEntity {
  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'description',
  })
  description: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: ProductEnumStatus,
    default: ProductEnumStatus.IN_STOCK,
  })
  status: ProductEnumStatus;

  @Column({
    name: 'price',
  })
  price: string;

  @Column({
    name: 'tag',
  })
  tag: string;

  @Column({
    name: 'images',
    type: 'text',
    array: true,
  })
  images: string[];

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
