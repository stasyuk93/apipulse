import { Body, Controller, HttpException, Post, Res, UnauthorizedException } from '@nestjs/common';
import { LoginValidation, UserValidation } from '../validations/UserValidation';
import { UserService } from '../services';
import { compareSync, hashSync } from 'bcrypt';
import UserEntity from "../entities/User.entity";
import { Request, Response } from '../types';


@Controller()
export default class AuthController {

    constructor(private readonly userService: UserService) {}

    @Post('login')
    async login(@Body() data: LoginValidation, @Res() res: Response): Promise<Response | UnauthorizedException> {
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

    @Post('register')
    async register(@Body() data: UserValidation, @Res() res: Response){

        try {

            const entity = <UserEntity>data;

            entity.password = hashSync(data.password, 1);

            entity.token = hashSync(data.email, 2);

            const user = await this.userService.create(entity);

            res.code(201).send(user);

        } catch (error){

            if(error.code && error.code === 'ER_DUP_ENTRY'){
                throw new HttpException('Duplicate email.', 409);
            }

            res.code(500).send({error});
        }
    }
}