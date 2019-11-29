import { FastifyReply, FastifyRequest } from 'fastify';
import UserEntity from "../entities/User.entity";
import { ServerResponse } from 'http';

export type Request = FastifyRequest & {user:UserEntity} & {raw:{user:UserEntity}};

export type Response = FastifyReply<ServerResponse>;