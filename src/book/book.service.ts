import { Injectable } from '@nestjs/common';
import { Book } from './dto';
import { v4 as uuidv4 } from 'uuid';
import { BookException } from './exceptions/book.exception';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //* addBook
  addBookService(book: Book): string {
    //? auto generated id using UUID
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been saved successfully';
  }

  //* updateBook
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    this.books[index] = book;
    return 'Book has been updated successfully';
  }

  //* deleteBook
  deleteBookService(bookId: number): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });
    return 'Book has been deleted successfully';
  }

  //* find all books
  findAllBooks(): Book[] {
    return this.books;
  }
}
