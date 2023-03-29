import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Book } from '../dto';
import { validate } from 'class-validator';

export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    // console.log(value, typeof value);

    // convert obj to class using class transformer
    const bookClass = plainToInstance(Book, value);
    // console.log({ bookClass });

    //   class validation
    const errors = await validate(bookClass);
    console.log({ errors });

    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation Failed' + JSON.stringify(errors),
      );
    }
    // if (value.id) throw new BadRequestException("Please don't send id");
    return value;
  }
}
