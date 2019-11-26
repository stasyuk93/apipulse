import {  Body, Controller, Get, Post, Req, Res, HttpException } from "@nestjs/common";
import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http';
import { RequestTaskHistoryService } from "../services";

@Controller('request-task-history')
export default class RequestTaskHistoryController{

    constructor(private readonly requestTaskHistoryService: RequestTaskHistoryService) {}

    @Get()
    getAllHistory(){
        const user = 1;
        return this.requestTaskHistoryService.findAllByUser(user);
    }

}