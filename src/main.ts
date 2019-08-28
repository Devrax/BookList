import { Display } from './Display';
import { validation } from './validate';
import { showWarning } from './popUpMessages';

document.addEventListener('DOMContentLoaded', Display.displayBooks);

document.querySelector('#book-form').addEventListener('submit', e => {
  e.preventDefault();

  let title: string = (<HTMLInputElement>document.querySelector('#title'))
      .value,
    author: string = (<HTMLInputElement>document.querySelector('#author'))
      .value,
    isbn: string = (<HTMLInputElement>document.querySelector('#isbn')).value,
    releaseDate: string = (<HTMLInputElement>(
      document.querySelector('#releaseDate')
    )).value,
    price: number = +(<HTMLInputElement>document.querySelector('#price')).value;

  validation(title, author, isbn, releaseDate, price);
});

document.querySelector('#bookList').addEventListener('click', (e: any) => {
  if (
    e.target.classList.contains('delete') ||
    e.target.classList.contains('icon-cross')
  ) {
    showWarning(e.target);
  }
});
