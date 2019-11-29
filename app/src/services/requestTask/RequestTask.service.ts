import { Injectable } from '@nestjs/common';
import RequestTask, { RequestTaskInterface } from '../../entities/RequestTask.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';

Injectable()
export default class RequestTaskService {

    constructor(
        @InjectRepository(RequestTask)
        private readonly repository: Repository<RequestTask>,
    ) {}

    create(requestTask: RequestTaskInterface): Promise<RequestTask> {
        requestTask.nextRequestAt = requestTask.start;

        return this.repository.save(this.repository.create(requestTask));
    }

    findReadyToExecute(){
        const currentDate = new Date(moment().format('YYYY-MM-DD H:mm'));

        return this.repository.find({
            select: [
                'id',
            ],
            where: {
                isActive: true,
                // nextRequestAt: currentDate
            }
        })
    }
}

