export class Book {
  constructor(book) {
    (this.id = book.id),
      (this.idUser = book.idUser),
      (this.idModule = book.idModule),
      (this.publisher = book.publisher),
      (this.price = book.price),
      (this.pages = book.pages),
      (this.status = book.status),
      (this.photo = book.photo),
      (this.comments = book.comments),
      (this.soldDate = book.soldDate);
  }

  toString() {
    return `El libro con id ${this.object.id} está en estado: ${this.object.status} y pertenece al módulo ${this.object.module}`;
  }
}
