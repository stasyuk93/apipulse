import { Controller } from "@nestjs/common";
import { RequestTaskQueue } from '../services'
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ConsumeMessage } from "amqplib";


@Controller()
export class TaskQueueController {

    constructor(
        private readonly taskQueueService: RequestTaskQueue
    ){}

    @MessagePattern('tasks')
    consumer(message: ConsumeMessage){
        console.log(message.content.toString());
        this.taskQueueService.channel.ack(message);
    }
}