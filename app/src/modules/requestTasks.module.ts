import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RequestTaskController from '../controllers/RequestTask.controller';
import { RequestTaskService, UserService } from './../services';
import RequestTask from '../entities/RequestTask.entity';
import UserEntity from "../entities/User.entity";

@Module({
    controllers: [RequestTaskController],
    providers: [
        RequestTaskService,
        UserService,
        UserEntity,
    ],
    imports: [
        TypeOrmModule.forFeature([RequestTask, UserEntity]),
    ],
    exports: [
        TypeOrmModule,
        RequestTaskService,
    ]
})
export class RequestTaskModule{

}
