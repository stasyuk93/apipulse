import {IsString, IsEmail, Length, MinLength, MaxLength, IsBoolean, IsUrl, IsDateString, IsDate, IsNumber, IsNotEmpty, IsJSON, IsOptional} from 'class-validator';
import { RequestTaskInterface } from '../entities/RequestTask.entity';

export class RequestTaskValidation{

    @IsString()
    frequency: string;

    @IsNotEmpty()
    @IsString()
    method: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    notifyEmail: string;

    @IsJSON()
    options: string;

    @IsDateString()
    start:Date;

    @IsNotEmpty()
    @IsNumber()
    statusCode: number;

    @IsUrl()
    url: string;

    @IsOptional()
    @IsNumber()
    id?: number;

    @IsBoolean()
    isActive?: boolean;

    // @IsNumber()
    // userId?: number;

}

