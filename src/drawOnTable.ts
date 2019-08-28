import { Display } from './Display';
import { Book } from './Book';
import { Local } from './Local';

//Funcion para crear una fila con el metodo de la clase Display

export function drawOnTable(book: Book): void {
  Display.addBookToList(book);
  Local.addBook(book);
}
