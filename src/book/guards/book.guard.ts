import { CanActivate, ExecutionContext } from '@nestjs/common';

export class BookGuard implements CanActivate {
  public key = 'super-secret';
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const headers = ctx.getRequest<Request>().headers;
    console.log(headers);

    if (headers['key'] === undefined) return false;

    return headers['key'] === this.key;
  }
}
