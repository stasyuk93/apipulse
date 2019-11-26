import { Injectable, Headers, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../';

@Injectable()
export class Auth {

    constructor(private readonly userService: UserService){}

    async auth(@Headers() header): Promise<boolean | UnauthorizedException>{

        const token = header.authorization || undefined;

        if(!token){
            throw new UnauthorizedException();
        }

        const user = await this.userService.getByToken(token);

        if(user !== undefined){
            return true;
        }

        throw new UnauthorizedException();
    }

}