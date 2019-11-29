import {IsString, IsEmail, Length, MinLength, MaxLength, IsBoolean, IsUrl, IsDateString, IsDate, IsNumber, IsNotEmpty, IsJSON, IsOptional} from 'class-validator';
import { Transform } from "class-transformer";
import * as moment from 'moment';

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

    @Transform(date => moment(date, 'YYYY-MM-DD H:mm').toDate())
    @IsDate()
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

}

