import { Body, Controller, Get, Post, Req, Res, HttpException, UnauthorizedException } from '@nestjs/common';
import { UserValidation, LoginValidation } from '../validations/UserValidation';
import { UserService } from '../services';
import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http';
import { hashSync, compareSync } from 'bcrypt';
import UserEntity from "../entities/User.entity";

@Controller('user')
export default class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: UserValidation, @Res() res: FastifyReply<ServerResponse>){
        try {
            const entity = <UserEntity>data;
            entity.password = hashSync(data.password, 1);
            const user = await this.userService.create(entity);
            console.log(user);
            res.code(201).send(user);
        } catch (error){
            if(error.code && error.code === 'ER_DUP_ENTRY'){
                throw new HttpException('Duplicate email.', 409);
            }
            res.code(500).send({error});
        }
    }

    @Post('login')
    async login(@Body() data: LoginValidation, @Res() res: FastifyReply<ServerResponse>): Promise<FastifyReply<ServerResponse> | UnauthorizedException> {
        try{
            const user = await this.userService.getUser(data);

            if(!compareSync(data.password, user.password)){
                throw new UnauthorizedException();
            }
            return res.send(user);
        } catch(error){
            return res.send({error});
        }
    }

}