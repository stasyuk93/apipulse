import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import UserEntity from './User.entity';
import RequestTaskHistory from './RequestTaskHistory.entity';

export interface RequestTaskInterface {

    id: number;

    userId: number;

    name: string;

    url: string;

    frequency: string;

    start: Date;

    nextRequestAt: Date;

    method: string;

    statusCode:number;

    options:string;

    isActive: boolean;

    notifyEmail: string;

}

@Entity()
export default class RequestTask implements RequestTaskInterface{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int', {
        name: 'user_id'
    })
    userId: number;

    @Column('varchar', {
        length: 255,
    })
    name: string;

    @Column('varchar', {
        length: 255,
    })
    url: string;

    @Column('varchar', {
        length: 255,
    })
    frequency: string;

    @Column('date')
    start: Date;

    @Column('date')
    nextRequestAt: Date;

    @Column('varchar', {
        length: 10,
    })
    method: string;

    @Column('int', {
        width: 4,
        unsigned: true,
    })
    statusCode:number;

    @Column('json')
    options:string;

    @Column('boolean', {
        default: true
    })
    isActive: boolean;

    @Column('varchar', {
        length: 255,
    })
    notifyEmail: string;

    @ManyToOne(type => UserEntity)
    user: UserEntity;

    @OneToMany(type => RequestTaskHistory, history => history)
    requestTaskHistory: RequestTaskHistory[];

}