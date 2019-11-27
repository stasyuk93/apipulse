import {  Body, Controller, Get, Post, Req, Res, HttpException } from "@nestjs/common";
import { Request, Response } from '../types';
import { RequestTaskHistoryService } from "../services";

@Controller('request-task-history')
export default class RequestTaskHistoryController{

    constructor(private readonly requestTaskHistoryService: RequestTaskHistoryService) {}

    @Get()
    getAllHistory(@Req() req: Request){
        const user = req.user.id;
        return this.requestTaskHistoryService.findAllByUser(user);
    }

}