import { bookDetails } from './Book';

export class Local {
  static getBook(): bookDetails[] | JSON {
    let books: number[] | Storage;
    if (localStorage.getItem('books') === null) {
      return (books = []);
    } else {
      return (books = JSON.parse(localStorage.getItem('books')));
    }
  }

  static addBook(book: bookDetails) {
    const books = Local.getBook();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn: string) {
    const books = Local.getBook();

    books.forEach((book: bookDetails, index: number) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}
