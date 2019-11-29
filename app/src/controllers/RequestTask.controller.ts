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
            const requestTask = <RequestTaskInterface>data;
            requestTask.userId = req.raw.user.id;
            const task = await this.requestTaskService.create(requestTask);
            res.code(201).send(task);
        } catch (e){
            console.log(e)
            res.code(500).send({error:e});
        }
    }

    @Post('test')
    async test(@Res() res: Response){
        const task = await this.requestTaskService.findReadyToExecute();
        res.send(task);

    }

}