import { RatingEnumType } from '@shule/backend/enums';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Institution } from '../institution/institution.entity';
import { User } from '../users/user.entity';

@Entity('rating')
export class Rating extends BaseEntity {
  @Column({
    name: 'rating_value',
    default: 1,
  })
  ratingValue: number;

  @Column({ name: 'comment', nullable: true })
  comment: string;

  @Column({
    name: 'rating_type',
    type: 'enum',
    enum: RatingEnumType,
    default: RatingEnumType.INSTITUTION_RATING,
  })
  ratingType: RatingEnumType;

  @Column({ name: 'userId', nullable: true })
  userId: string;
  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Institution, (institution) => institution.ratings)
  @JoinColumn({ name: 'institution_id' })
  institution: Institution;
}
