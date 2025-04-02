import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v7 as uuidv7 } from 'uuid';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  public async createUser() {
    await this.userRepository.save({
      id: uuidv7(),
      firstName: 'Jason',
      lastName: 'Kim',
    });
  }
}
