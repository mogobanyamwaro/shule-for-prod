import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { UserRoles } from '@shule/backend/enums';
import { Profile } from './user.profile.entity';
import { Institution } from '../institution/institution.entity';
import { UserAddress } from './user.address.entity';
import { Rating } from '../rating/rating.entity';
import { Blog } from '../blog/blog.entity';
import { Product } from '../e-commerce/product.entity';
@Entity('users')
export class User extends BaseEntity {
  @IsEmail()
  @Column({
    name: 'email',
    unique: true,
  })
  email: string;

  @Exclude()
  @Column({
    name: 'password',
  })
  password: string;

  @Column({
    name: 'is_admin',
    default: false,
  })
  isAdmin: boolean;

  @Column({
    name: 'role',
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.PARENT,
  })
  role: UserRoles;

  canModify() {
    return this.isAdmin || this.id;
  }

  constructor(user?: Partial<User>) {
    super();
    Object.assign(this, user);
  }
  @OneToOne(() => Profile, (profile) => profile.user, {
    eager: true,
    cascade: ['insert', 'remove', 'soft-remove', 'update'],
  })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @OneToMany(() => Institution, (institution) => institution.user)
  @JoinColumn({ name: 'user_id' })
  institutions: Institution[];

  @OneToMany(() => UserAddress, (useraddres) => useraddres.user)
  @JoinColumn({ name: 'user_id' })
  addresses: UserAddress[];

  @OneToOne(() => Rating, (rating) => rating.user)
  @JoinColumn({ name: 'user_id' })
  ratings: Rating;

  @OneToMany(() => Blog, (blog) => blog.user)
  @JoinColumn({ name: 'user_id' })
  blogs: Blog[];

  @OneToMany(() => Product, (product) => product.user)
  @JoinColumn({ name: 'user_id' })
  products: Product[];
}
