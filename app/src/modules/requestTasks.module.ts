import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RequestTaskController from '../controllers/RequestTask.controller';
import { RequestTaskService, AuthService, UserService } from './../services';
import RequestTask from '../entities/RequestTask.entity';
import UserEntity from "../entities/User.entity";

@Module({
    controllers: [RequestTaskController],
    providers: [
        RequestTaskService,
        AuthService,
        UserService,
        UserEntity,
    ],
    imports: [
        TypeOrmModule.forFeature([RequestTask, UserEntity]),
    ],
    exports: [
        TypeOrmModule,
    ]
})
export class RequestTaskModule{

}
