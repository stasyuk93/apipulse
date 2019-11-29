import { Module } from '@nestjs/common';
import { TaskQueueController } from '../controllers/TaskQueue.controller'
import { RequestTaskQueue } from './../services';
import RequestTaskCommand from "../commands/RequestTaskCommand";
import { CommandModule } from "nestjs-command";
import { TypeOrmModule } from '@nestjs/typeorm';
import {RequestTaskService} from "../services";
import RequestTask, { RequestTaskInterface } from '../entities/RequestTask.entity';


@Module({
    controllers: [
        TaskQueueController,
    ],
    providers: [
        RequestTaskQueue,
        RequestTaskCommand,
        RequestTaskService,

    ],
    imports: [
        CommandModule,
        RequestTaskService
    ],
    exports: [
        RequestTaskQueue,
    ]
})
export class RequestTaskRMQModule{

}