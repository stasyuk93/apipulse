import {IsString, IsEmail, Length, MinLength, MaxLength} from 'class-validator';
import { UserInterface } from '../entities/User.entity';


export class UserValidation implements UserInterface{
    @IsString()
    @Length(3, 255)
    name: string;

    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsString()
    @MinLength(4)
    password: string;
}

export class LoginValidation {
    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsString()
    @MinLength(4)
    password: string;
}