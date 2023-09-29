class Book {
  constructor(object) {
    this.object = object;
  }

  toString() {
    return `El libro con id ${this.object.id} está en estado: ${this.object.status} y pertenece al módulo ${this.object.module}`;
  }
}

module.exports = Book;
