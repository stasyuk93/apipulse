import { Injectable } from '@nestjs/common';
import RequestTaskHistory, { RequestTaskHistoryInterface } from '../../entities/RequestTaskHistory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable()
export default class RequestTaskHistoryService {

    constructor(
        @InjectRepository(RequestTaskHistory)
        private readonly repository: Repository<RequestTaskHistory>,
    ) {}

    create(requestTaskHistory: RequestTaskHistoryInterface): RequestTaskHistoryInterface {
        return this.repository.create(requestTaskHistory);
    }

}