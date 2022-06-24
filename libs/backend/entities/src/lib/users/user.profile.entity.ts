import { PaymentMethods } from '@shule/backend/enums';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity('profile')
export class Profile extends BaseEntity {
  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    name: 'gender',
  })
  gender: string;

  @Column({
    name: 'date_of_birth',
  })
  dateOfBirth: string;

  @Column({ name: 'avatar' })
  avatar: string;

  @Column({
    name: 'phone',
  })
  phone: string;

  @Column({
    name: 'payment_method',
    type: 'enum',
    enum: PaymentMethods,
    default: PaymentMethods.CASH,
  })
  paymentMethod: PaymentMethods;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
