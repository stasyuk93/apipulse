import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import RequestTask from './RequestTask.entity';

export interface RequestTaskHistoryInterface {
    id?: number;

    requestTaskId: number;

    name: string;

    executed: Date;

    statusCode:number;

    isError: boolean;

    message: string;
}

@Entity()
export default class RequestTaskHistory implements RequestTaskHistoryInterface{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int')
    requestTaskId:number;

    @Column('varchar', {
        length: 255,
    })
    name: string;

    @Column('datetime')
    executed: Date;

    @Column('int', {
        width: 4,
        unsigned: true,
    })
    statusCode:number;

    @Column('boolean', {
        default: false
    })
    isError: boolean;

    @Column('varchar', {
        length: 255,
        nullable: true,
    })
    message: string;

    @ManyToOne(type => RequestTask)
    requestTask: RequestTask;

}