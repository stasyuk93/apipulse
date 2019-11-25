import { Controller } from "@nestjs/common";
import { RequestTaskHistoryService } from "../services";

@Controller('requestTaskHistory')
export default class RequestTaskHistoryController{

    constructor(private readonly requestTaskHistoryService: RequestTaskHistoryService) {}

}