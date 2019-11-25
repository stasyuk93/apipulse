import { Injectable } from '@nestjs/common';
import UserEntity, { UserInterface } from '../../entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable()
export default class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) {}

    create(user: UserInterface): Promise<UserEntity> {
        return this.repository.save(this.repository.create(user));
    }

}