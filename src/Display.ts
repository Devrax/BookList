import { bookDetails } from './Book';
import { Local } from './Local';

export class Display {
  static displayBooks() {
    const book = Local.getBook();

    book.forEach((book: bookDetails) => Display.addBookToList(book));
  }

  //Add Books
  static addBookToList(book: bookDetails) {
    const list = document.querySelector('#bookList');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>${book.releaseDate}</td>
    <td>${book.price <= 0 ? 'Gratis' : book.price + '$'}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete"><span class="icon-cross"></span></a></td>
    `;

    list.appendChild(row);
    this.cleanFields();
  }

  //Clean Fields
  static cleanFields() {
    (<HTMLInputElement>document.querySelector('#title')).value = '';
    (<HTMLInputElement>document.querySelector('#author')).value = '';
    (<HTMLInputElement>document.querySelector('#isbn')).value = '';
    (<HTMLInputElement>document.querySelector('#releaseDate')).value = '';
    (<HTMLInputElement>document.querySelector('#price')).value = '';
  }

  static removeField(target: any) {
    if (target.classList.contains('delete')) {
      //Remueve del LocalStorage
      console.log('Display: removeField > 45');
      Local.removeBook(
        target.parentElement.previousElementSibling.previousElementSibling
          .previousElementSibling.innerText
      );
      //Remueve de la vista
      target.parentElement.parentElement.remove();
    } else {
      console.log('Display: removeField > 49');
      Local.removeBook(
        target.parentElement.parentElement.previousElementSibling
          .previousElementSibling.previousElementSibling.innerText
      );
      target.parentElement.parentElement.parentElement.remove();
    }
  }
}
