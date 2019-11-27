import { Injectable } from '@nestjs/common';
import UserEntity, { UserInterface } from '../../entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginValidation } from "../../validations/UserValidation";

Injectable()
export default class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) {}

    create(user: UserInterface): Promise<UserEntity> {
        return this.repository.save(this.repository.create(user));
    }

    getByToken(token:string): Promise<UserEntity | undefined>{
        return this.repository.findOne({ token });
    }

    getUser(data: LoginValidation): Promise<UserEntity | undefined>{
        const { email } = data;
        return this.repository.findOne({ email })
    }

}