import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './dto';
import { BookException } from './exceptions/book.exception';
import { BookCustomExceptionFilter } from './exceptions/book.exception.filter';
import { BookGuard } from './guards/book.guard';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  // *get all books
  @Get('/findAll')
  @UseFilters(BookCustomExceptionFilter) // filter exception
  @UseGuards(new BookGuard()) // Guards
  getAllBooks(): Book[] {
    // throw new BookException();
    return this.bookService.findAllBooks();
  }

  // *update book
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  // *delete Book
  @Delete('/delete/:id')
  deleteBook(@Param('id', ParseIntPipe) bookId: number): string {
    console.log(bookId, typeof bookId);

    return this.bookService.deleteBookService(bookId);
  }

  //* add book
  @Post('/add')
  addBook(@Body(new ValidationPipe()) book: Book): string {
    return this.bookService.addBookService(book);
  }
}
