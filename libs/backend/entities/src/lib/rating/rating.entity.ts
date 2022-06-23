import { RatingEnumType } from '@shule/backend/enums';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Institution } from '../institution/institution.entity';
import { User } from '../users/user.entity';

@Entity('rating')
export class Rating extends BaseEntity {
  @Column({
    name: 'rating_value',
  })
  ratingValue: number;

  @Column({ name: 'comment' })
  comment: string;

  @Column({
    name: 'rating_type',
    type: 'enum',
    enum: RatingEnumType,
    default: RatingEnumType.INSTITUTION_RATING,
  })
  ratingType: RatingEnumType;

  @OneToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Institution, (institution) => institution.ratings)
  @JoinColumn({ name: 'institution_id' })
  institution: Institution;
}
