import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RequestTaskController from '../controllers/RequestTask.controller';
import { RequestTaskService } from './../services';
import RequestTask from '../entities/RequestTask.entity';

@Module({
    controllers: [RequestTaskController],
    providers: [RequestTaskService],
    imports: [
        TypeOrmModule.forFeature([RequestTask])
    ],
    exports: [TypeOrmModule]
})
export class RequestTaskModule {}
