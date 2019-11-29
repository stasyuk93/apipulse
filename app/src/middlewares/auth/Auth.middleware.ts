import {
    Injectable,
    UnauthorizedException,
    NestMiddleware,
    Req,
    Res,
    Inject,
} from '@nestjs/common';
import { Request, Response } from '../../types/index';
import { UserService } from '../../services/index';

@Injectable()
export default class Auth implements NestMiddleware {

    constructor(
        @Inject(UserService)
        private readonly userService: UserService
    ){}

    async use(@Req() req: Request, @Res() res: Response, next: Function){

        const token = (req.headers.authorization || '').replace('Bearer ', '');

        if(!token){
            throw new UnauthorizedException();
        }

        const user = await this.userService.getByToken(token);

        if(user === undefined){
            throw new UnauthorizedException();
        }

        req.user = user;

        return next();
    }

}