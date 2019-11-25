import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface UserInterface {
    id?: number;

    name: string;

    email: string;

    password: string;
}

@Entity('user')
export default class UserEntity implements UserInterface {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {
        length: 255,
    })
    name: string;

    @Column('varchar', {
        length: 255,
        unique: true,
    })
    email: string;

    @Column('varchar', {
        length: 100,
    })
    password: string;
}