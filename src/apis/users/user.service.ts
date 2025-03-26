import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v7 as uuidv7 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  public async createUser() {
    await this.userRepository.save({
      id: uuidv7(),
      firstName: 'Jason',
      lastName: 'Kim',
    });
  }
}
