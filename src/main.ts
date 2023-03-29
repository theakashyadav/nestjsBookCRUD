import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { BookGuard } from './book/guards/book.guard';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('Coming from middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  // app.useGlobalGuards(new BookGuard());
  await app.listen(3000);
}
bootstrap();
