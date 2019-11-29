import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './../services';
import User from '../entities/User.entity';
import AuthController from "../controllers/Auth.controller";

@Module({
    controllers: [AuthController],
    providers: [
        UserService,
    ],
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    exports: [
        TypeOrmModule,
        UserService
    ]
})
export class UserModule {}
