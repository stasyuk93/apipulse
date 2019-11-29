import { Injectable } from '@nestjs/common';
import RequestTask, { RequestTaskInterface } from '../../entities/RequestTask.entity';
import RequestTaskHistory, { RequestTaskHistoryInterface } from '../../entities/RequestTaskHistory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable()
export default class RequestTaskHistoryService {

    constructor(
        @InjectRepository(RequestTask)
        private readonly repository: Repository<RequestTask>,
    ) {}

    create(requestTask: RequestTask, history: RequestTaskHistoryInterface ): Promise<RequestTaskHistoryInterface> {
        return this.repository.manager.save(history)
    }

    findAllByUser(userId: number): Promise<RequestTask[]>{
        return this.repository.find({
            relations:['request_task'],
            where: {
                userId
            }
        })
    }
}