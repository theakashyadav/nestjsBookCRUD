import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('this is module based middleware [BOOK MODULE]');
    const protocol = req.protocol; //http, https
    const host = req.get('host'); //localhost:3000
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toDateString();

    console.log(protocol + '://' + host + url + '  ' + method + '   ' + date);

    next();
  }
}
