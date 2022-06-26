import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionDTO } from '@shule/backend/dtos';
import { Institution, Profile, User } from '@shule/backend/entities';
import { HashHelper } from '@shule/backend/shared';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Institution)
    private readonly institutionRepository: Repository<Institution>
  ) {}

  async createInstitution(userId: string, input: InstitutionDTO) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    Object.assign(input, { user });

    const institution = await this.institutionRepository.save(
      this.institutionRepository.create({
        ...input,
      })
    );
    return institution;
  }

  async getAllInstitutions() {
    return await this.institutionRepository.find({
      relations: ['user'],
    });
  }

  async getInstitution(id: string) {
    return await this.institutionRepository.findOne({
      where: {
        id,
      },
    });
  }

  async updateInstitution(
    userId: string,

    input: Institution
  ) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['institutions'],
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    const institution = await this.institutionRepository.findOne({
      where: {
        id: input.id,
      },
    });
    if (!institution) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Institution not found',
      };
    }
    return this.institutionRepository.save(institution);
  }

  async toglleInstitutionFeatured(id: string) {
    const institution = await this.institutionRepository.findOne({
      where: {
        id,
      },
    });
    if (!institution) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'Institution not found',
      };
    }
    if (institution.isFeatured === false) {
      institution.isFeatured = true;
      return this.institutionRepository.save(institution);
    } else if (institution.isFeatured === true) {
      institution.isFeatured = false;
      return this.institutionRepository.save(institution);
    }
  }
}
