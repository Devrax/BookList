import { Book, bookDetails } from './Book';
import { showErrorMessage } from './popUpMessages';
import { drawOnTable } from './drawOnTable';
import { Local } from './Local';

export function validation(
  title: string,
  author: string,
  isbn: string,
  releaseDate: string,
  price: number
) {
  if (title && author) {
    if (isbn.length === 13 || isbn.length === 10) {
      if (!isNaN(price)) {
        validated(title, author, isbn, releaseDate, price);
      } else {
        price = 0;
        validated(title, author, isbn, releaseDate, price);
      }
    } else {
      showErrorMessage(
        'El ISBN se compone de 10 a 13 digitos, solo la fecha es opcional'
      );
    }
  } else {
    showErrorMessage('Necesita completar todos los campos');
  }
}

//Con los datos ya validados se pasa el objeto para instanciar la clase Book
function validated(
  title: string,
  author: string,
  isbn: string,
  releaseDate: string,
  price: number
) {
  let book: Book = new Book({
    title: title,
    author: author,
    isbn: isbn,
    releaseDate: releaseDate,
    price: price
  });

  if (compared(book.isbn)) {
    drawOnTable(book);
  } else {
    showErrorMessage('El ISBN introducido ya existe');
  }
}

function compared(isbn: string): boolean {
  let books = Local.getBook();
  let hasIsbn: boolean = false;
  for (let book of books) {
    if (book.isbn === isbn) {
      hasIsbn = true;
      break;
    } else {
      continue;
    }
  }

  return !hasIsbn;
}
