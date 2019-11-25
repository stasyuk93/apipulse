import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserValidation } from '../validations/userValidation';
import { UserService } from '../services';


@Controller('user')
export default class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() user: UserValidation){
        this.userService.create(user);
    }


}