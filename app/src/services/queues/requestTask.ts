import { connect, ChannelWrapper, AmqpConnectionManager } from 'amqp-connection-manager';
import { Injectable } from "@nestjs/common";
import RequestTask from '../../entities/RequestTask.entity';
import { ConsumeMessage } from 'amqplib';

@Injectable()
export default class RequestTaskQueue {

    connection: AmqpConnectionManager;
    channel: ChannelWrapper;

    constructor(){}


    async init(): Promise<void>{
        await this.connect();
        await this.connectToChannel();

    }

    async connect(){
         this.connection = await connect(['amqp://localhost']);
    }

    async connectToChannel(){
        this.channel = await this.connection.createChannel({name:'tasks',
            setup: (channel) => {
                return channel.assertQueue('tasks', {durable: true})
            }
        });
    }

    async send(tasks: RequestTask[] | null): Promise<void>{
        await this.init();
        let array:Promise<void>[] = [];

        tasks.map((task: RequestTask) => {
            array.push(
                this.channel.sendToQueue('tasks', Buffer.from(task.id.toString()), {
                    persistent: true
                })
            )
        });
        await Promise.all(array);

    }

}