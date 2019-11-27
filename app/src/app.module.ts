import {Module, NestModule, MiddlewareConsumer, Scope, Inject} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users.module';
import { RequestTaskModule } from './modules/requestTasks.module';
import { RequestTaskHistories } from './modules/requestTaskHistories.module';
import RequestTaskController from "./controllers/RequestTask.controller";
import { AuthService } from './services';

@Module({
    imports: [
      TypeOrmModule.forRoot(),
      UserModule,
      RequestTaskModule,
      RequestTaskHistories
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer){
        consumer.apply(AuthService).forRoutes(RequestTaskController)
    }

}
