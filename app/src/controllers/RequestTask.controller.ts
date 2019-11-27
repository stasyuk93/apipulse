import {  Body, Controller, Get, Post, Req, Res, } from "@nestjs/common";
import { RequestTaskService } from "../services";
import { RequestTaskValidation } from '../validations/RequestTaskValidation';
import { RequestTaskInterface } from '../entities/RequestTask.entity';
import { Request, Response } from '../types';

@Controller('request-task')
export default class RequestTaskController{

    constructor(
        private readonly requestTaskService: RequestTaskService,
    ) {}

    @Post()
    async create(@Req() req: Request, @Body() data: RequestTaskValidation, @Res() res: Response){
        try{
            const user = req.user.id;
            const requestTask = <RequestTaskInterface>data;
            requestTask.userId = user;
            const task = await this.requestTaskService.create(requestTask);
            res.code(201).send(task);
        } catch (e){
            res.code(500).send({error:e});
        }
    }

}