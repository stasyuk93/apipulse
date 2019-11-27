import {Injectable, UnauthorizedException, NestMiddleware, Req, Res, Inject, Scope} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';
import { UserService } from '../';
import UserEntity from "../../entities/User.entity";

@Injectable()
export default class Auth implements NestMiddleware {

    constructor(
        @Inject(UserService)
        private readonly userService: UserService
    ){}

    async use(@Req() req: FastifyRequest & {user:UserEntity}, @Res() res: FastifyReply<ServerResponse>, next: Function){

        const token = (req.headers.authorization || '').replace('Bearer ', '');

        if(!token){
            throw new UnauthorizedException();
        }

        const user = await this.userService.getByToken(token);

        if(user === undefined){
            throw new UnauthorizedException();
        }

        req.user = user;

        next();
    }

}