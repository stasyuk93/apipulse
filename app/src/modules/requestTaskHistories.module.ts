import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RequestTaskHistoryController from '../controllers/RequestTaskHistory.controller';
import { RequestTaskHistoryService } from './../services';
import RequestTaskHistory from '../entities/RequestTaskHistory.entity';
import RequestTask from '../entities/RequestTask.entity';


@Module({
    controllers: [RequestTaskHistoryController],
    providers: [RequestTaskHistoryService],
    imports: [
        TypeOrmModule.forFeature([RequestTaskHistory, RequestTask])
    ],
    exports: [TypeOrmModule]
})
export class RequestTaskHistoriesModule {}
