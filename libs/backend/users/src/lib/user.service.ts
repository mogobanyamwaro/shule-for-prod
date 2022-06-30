import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateProfileInput,
  CreateUserInput,
  InstitutionDTO,
} from '@shule/backend/dtos';
import { Institution, Profile, User } from '@shule/backend/entities';
import { UserRoles } from '@shule/backend/enums';
import { HashHelper } from '@shule/backend/shared';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(Institution)
    private readonly institutionRepository: Repository<Institution>
  ) {}

  async createUser(input: CreateUserInput) {
    const exists = await this.userRepository.findOne({
      where: {
        email: input.email,
      },
    });

    if (exists) {
      return {
        code: HttpStatus.FOUND,
        message: 'User already exists, please login',
      };
    }

    const password = await HashHelper.encrypt(input.password);

    const newUser = await this.userRepository.save(
      this.userRepository.create({
        password,
        email: input.email,
        role: input.role,
      })
    );
    return newUser;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      relations: ['profile'],
    });
    // if (!user) {
    //   return {
    //     code: HttpStatus.NOT_FOUND,
    //     message: 'User not found',
    //   };
    // }
    return user;
  }

  async getUsers() {
    const users = await this.userRepository.find({
      relations: ['profile'],
    });
    return users;
  }

  async findById(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['profile'],
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    return user;
  }

  async updateUserRole(userId: string, role: any) {
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
    user.role = role;
    if (role === UserRoles.ADMIN) {
      user.isAdmin = true;
    }
    return this.userRepository.save(user);
  }

  async createProfile(userId: string, input: CreateProfileInput) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['profile'],
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    const profile = await this.profileRepository.save(
      this.profileRepository.create({
        ...input,
        user,
      })
    );
    return profile;
  }
  async updateProfile(userId: string, input: CreateProfileInput) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['profile'],
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    user.profile.firstName = input.firstName
      ? input.firstName
      : user.profile.firstName;
    user.profile.lastName = input.lastName
      ? input.lastName
      : user.profile.lastName;

    user.profile.avatar = input.avatar ? input.avatar : user.profile.avatar;
    user.profile.dateOfBirth = input.dateOfBirth
      ? input.dateOfBirth
      : user.profile.dateOfBirth;
    user.profile.gender = input.gender ? input.gender : user.profile.gender;
    user.profile.paymentMethod = input.paymentMethod
      ? input.paymentMethod
      : user.profile.paymentMethod;
    user.profile.phone = input.phone ? input.phone : user.profile.phone;

    const profile = await this.profileRepository.save(user);
    return profile;
  }

  async createInstitution(userId: string, input: InstitutionDTO) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['profile'],
    });
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    const institution = await this.institutionRepository.save(
      this.institutionRepository.create({
        ...input,
        user,
      })
    );
    return institution;
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
}
