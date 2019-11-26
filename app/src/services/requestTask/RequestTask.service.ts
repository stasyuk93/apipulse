import { Injectable } from '@nestjs/common';
import RequestTask, { RequestTaskInterface } from '../../entities/RequestTask.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable()
export default class RequestTaskService {

    constructor(
        @InjectRepository(RequestTask)
        private readonly repository: Repository<RequestTask>,
    ) {}

    create(requestTask: RequestTaskInterface): Promise<RequestTask> {
        return this.repository.save(this.repository.create(requestTask));
    }

}