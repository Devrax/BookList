export interface bookDetails {
  title: string;
  author: string;
  isbn: string;
  releaseDate: string;
  price: number;
}

export class Book {
  public title: string;
  public author: string;
  public isbn: string;
  public releaseDate: string;
  public price: number;

  constructor(book: bookDetails) {
    this.title = book.title;
    this.author = book.author;
    this.isbn = book.isbn;
    this.releaseDate = book.releaseDate;
    this.price = book.price;
  }
}
