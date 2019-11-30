import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandModule, CommandService } from 'nestjs-command';
import RequestTaskController from "./controllers/RequestTask.controller";
import { Auth } from './middlewares';
import RequestTaskCommand from './commands/RequestTaskCommand'
import { RequestTaskQueue, RequestTaskConsumer } from './services';

import {
    RequestTaskModule,
    UserModule,
    RequestTaskHistoriesModule,
} from './modules';



@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        RequestTaskModule,
        RequestTaskHistoriesModule,
        CommandModule,
        RequestTaskConsumer,

    ],
    providers: [
        RequestTaskCommand,
        RequestTaskQueue,
        CommandService,
    ],


})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer){
        consumer.apply(Auth).forRoutes(RequestTaskController)
    }

}
