import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { RequestTaskService, RequestTaskQueue } from '../services';


@Injectable()
export default class RequestTaskCommand {
    constructor(
        private readonly requestTaskService: RequestTaskService,
        private readonly requestTaskQueue: RequestTaskQueue
    ) { }

    @Command({ command: 'queue:tasks', describe: 'find is ready to execute tasks', autoExit: true })
    async taskQueue() {
        const tasks = await this.requestTaskService.findReadyToExecute();
        this.requestTaskQueue.send(tasks);

    }
}