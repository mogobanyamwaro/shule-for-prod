import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity('user-address')
export class UserAddress extends BaseEntity {
  @Column({
    name: 'county',
  })
  county: string;

  @Column({
    name: 'town',
  })
  town: string;

  @Column({
    name: 'estate',
  })
  estate: string;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
