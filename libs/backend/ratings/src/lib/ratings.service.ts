import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingDTO } from '@shule/backend/dtos';
import { Institution, Rating, User } from '@shule/backend/entities';
import { RatingEnumType } from '@shule/backend/enums';
import { Repository } from 'typeorm';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    @InjectRepository(Institution)
    private readonly institutionRepository: Repository<Institution>
  ) {}

  async createRating(rating: RatingDTO, user: User) {
    const institution = await this.institutionRepository.findOne({
      where: { id: rating.institutionId },
      relations: ['ratings', 'ratings.user', 'ratings.user.profile'],
    });
    const isReviewed = institution.ratings.find(
      (rating) => rating.userId === user.id
    );
    if (isReviewed) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: 'You have already reviewed this institution',
      };
    }

    const newRating = new Rating();
    newRating.comment = rating.comment;
    newRating.ratingValue = rating.ratingValue;
    newRating.ratingType = rating.ratingType;
    newRating.institution = institution;
    newRating.user = user;
    newRating.userId = user.id;

    return await this.ratingRepository.save(
      this.ratingRepository.create(newRating)
    );
  }

  async getAllRatings(type: any) {
    // return await this.ratingRepository.find({
    //   where: { ratingType: type },
    //   relations: ['institution', 'user', 'user.profile'],
    // });

    return await this.ratingRepository.delete({});
  }

  async getInstitutionRatings(institutionId: string) {
    const institution = await this.institutionRepository.findOne({
      where: { id: institutionId },
      relations: ['ratings', 'ratings.user', 'ratings.user.profile'],
    });

    if (institution.ratings.length === 0) {
      return [];
    }
    let totalRatingValue = 0;
    const totalUsers = institution.ratings
      .map((rating) => {
        return rating.userId;
      })
      .filter((v, i, a) => a.indexOf(v) === i).length;

    console.log(totalUsers);

    institution.ratings.forEach((rating) => {
      totalRatingValue += rating.ratingValue;
    });

    const totalRating = totalRatingValue / totalUsers;
    totalRating.toFixed(1);
    console.log(totalRating);
    return {
      totalRating,
      ratings: institution.ratings,
    };
  }
}
