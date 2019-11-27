import { FastifyReply, FastifyRequest } from 'fastify';
import UserEntity from "../entities/User.entity";
import { ServerResponse } from 'http';


export interface Request extends FastifyRequest{
    user: UserEntity
}

export interface Response extends FastifyReply<ServerResponse>{

}