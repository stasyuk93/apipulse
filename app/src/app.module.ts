import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandModule } from 'nestjs-command';
import RequestTaskController from "./controllers/RequestTask.controller";
import { Auth } from './middlewares';
import RequestTaskCommand from './commands/RequestTaskCommand'
import { RequestTaskQueue } from './services';

import {
    RequestTaskModule,
    UserModule,
    RequestTaskHistoriesModule,
    RequestTaskRMQModule,
} from './modules';



@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        RequestTaskModule,
        RequestTaskHistoriesModule,
        // RequestTaskRMQModule,
        CommandModule,
    ],
    providers: [
        RequestTaskCommand,
        RequestTaskQueue,
    ],


})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer){
        consumer.apply(Auth).forRoutes(RequestTaskController)
    }

}
