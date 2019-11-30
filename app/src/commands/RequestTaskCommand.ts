import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { RequestTaskService, RequestTaskQueue } from '../services';
import { RequestTaskInterface } from '../entities/RequestTask.entity';


@Injectable()
export default class RequestTaskCommand {
    constructor(
        private readonly requestTaskService: RequestTaskService,
        private readonly requestTaskQueue: RequestTaskQueue,
    ) { }

    //npx nestjs-command queue:tasks
    @Command({ command: 'queue:tasks', describe: 'find is ready to execute tasks', autoExit: true })
    async taskQueue() {
        const tasks = await this.requestTaskService.findReadyToExecute();
        await this.requestTaskQueue.send(tasks);
    }

    @Command({ command: 'seed:task', describe: 'find is ready to execute tasks', autoExit: true })
    async seed(){
        let task = <RequestTaskInterface>{
            userId:1,
            name:"test",
            url:"http://chat.loc",
            frequency:"* * * * *",
            start: new Date(),
            nextRequestAt: new Date(),
            method:"get",
            statusCode:200,
            options:"{}",
            isActive:true,
            notifyEmail:"stasyuk.php@gmail.com"
        };

        for(let i =0; i < 100; i++){
            await this.requestTaskService.create(task)
        }
    }

}