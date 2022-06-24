import { InstitutionEnumStatus } from '@shule/backend/enums';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../base.entity';
import { Rating } from '../rating/rating.entity';
import { User } from '../users/user.entity';

@Entity('institution')
export class Institution extends BaseEntity {
  @Column({
    name: 'about',
  })
  about: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: InstitutionEnumStatus,
    default: InstitutionEnumStatus.PENDING,
  })
  status: InstitutionEnumStatus;

  @Column({
    name: 'education_type',
  })
  educationType: string;

  @Column({ name: 'education_level' })
  educationLevel: string;

  @Column({ name: 'performance_statistics' })
  performanceStatistics: string;

  @Column({ name: 'license_and_certification' })
  licenseAndCertification: string;

  @Column({ name: 'location' })
  location: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'facebook_link' })
  facebookLink: string;

  @Column({ name: 'instagram_link' })
  instagramLink: string;

  @Column({ name: 'school_photos', type: 'text', array: true })
  schoolPhotos: string[];

  @ManyToOne(() => User, (user) => user.institutions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Rating, (rating) => rating.institution)
  @JoinColumn({ name: 'institution_id' })
  ratings: Rating[];
}
