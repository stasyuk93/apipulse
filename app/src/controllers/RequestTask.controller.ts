import {  Body, Controller, Get, Post, Req, Res, HttpException, Headers } from "@nestjs/common";
import { RequestTaskService } from "../services";
import { RequestTaskValidation } from '../validations/RequestTaskValidation';
import { RequestTaskInterface } from '../entities/RequestTask.entity';
import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http';

@Controller('request-task')
export default class RequestTaskController{

    constructor(private readonly requestTaskService: RequestTaskService) {}

    @Post()
    async create(@Headers() headers , @Body() data: RequestTaskValidation, @Res() res: FastifyReply<ServerResponse>){
        console.log(headers)
        try{
            const user = 1;
            const requestTask = <RequestTaskInterface>data;
            requestTask.userId = user;
            const task = await this.requestTaskService.create(requestTask);
            res.code(201).send(task);
        } catch (e){
            res.code(500).send({error:e});
        }
    }

}