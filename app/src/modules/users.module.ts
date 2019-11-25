import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserController from '../controllers/User.controller';
import { UserService } from './../services';
import User from '../entities/User.entity';

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    exports: [TypeOrmModule]
})
export class UserModule {}
