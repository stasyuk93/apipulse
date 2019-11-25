import { Controller } from "@nestjs/common";
import { RequestTaskService } from "../services";

@Controller('requestTask')
export default class RequestTaskController{

    constructor(private readonly requestTaskService: RequestTaskService) {}


}