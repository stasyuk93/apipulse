import { connect, ChannelWrapper, AmqpConnectionManager } from 'amqp-connection-manager';
import { Injectable } from "@nestjs/common";
import RequestTask from '../../entities/RequestTask.entity';
import { ConsumeMessage } from 'amqplib';


@Injectable()
export default class RequestTaskQueue {

    readonly connect: AmqpConnectionManager;
    readonly channel: ChannelWrapper;

    constructor(){
        this.connect = connect(['amqp://localhost:5672']);
        this.channel = this.connect.createChannel({
            name: 'tasks',
            setup: (channel) => {
                // `channel` here is a regular amqplib `ConfirmChannel`.
                // Note that `this` here is the channelWrapper instance.
                return channel.assertQueue('tasks', {durable: true});
            }
        });

        this.channel.on("close", () => console.log('close'));
        this.channel.on("connect", () => console.log('connect'));
        this.channel.on("error", (_error) => {console.log(_error,'===error')});
        this.channel.on('disconnect', function(err) {
            console.log('Disconnected.', err);
        });
    }

    send(tasks: RequestTask[]): void{

        try{

            this.channel.sendToQueue('tasks', Buffer.from('rabbit'),{
                persistent: true
            }, (err, ok) => {
                console.log(err,'===',ok)
            })
        } catch (e) {
            console.log(e)

        }


        // this.channel.close();

        return;
        try {
            tasks.map((task: RequestTask) => {
                this.channel.sendToQueue('tasks', Buffer.from(task.id.toString()),{
                    persistent: true
                }).then(() => {
                    console.log('add task ' + task.id)
                }).catch((e) => {
                    console.log(e,'error')
                })
            })
        } catch (e) {
            console.log(e)
        }

    }

    consumer(message: ConsumeMessage){
        console.log(message.content.toString(),'consumer');
        this.channel.ack(message);
    }

}