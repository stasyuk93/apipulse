import { connect } from 'amqp-connection-manager';
import { Injectable } from "@nestjs/common";
import { ConsumeMessage } from 'amqplib';


@Injectable()
export default class RequestTaskConsumer {

    constructor(){
        connect(['amqp://localhost']).createChannel({
            name: 'tasks',
            setup: (channel) => {
                return Promise.all([
                    channel.assertQueue('tasks',{durable: true}),
                    channel.consume('tasks',(task:ConsumeMessage | null) => {
                        //TODO
                        channel.ack(task);
                    })
                ])
            }
        })
    }
}