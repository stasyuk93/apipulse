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

    create(requestTask: RequestTaskInterface): RequestTaskInterface {
        return this.repository.create(requestTask);
    }

}