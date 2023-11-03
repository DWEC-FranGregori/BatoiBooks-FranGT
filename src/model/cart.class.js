"use strict";
export default class Cart {
  constructor() {
    this.data = [];
  }

  populateData() {}

  getBookById(id) {
    return this.data.find((book) => book.id === id) || {};
  }

  addItem(book) {
    if (this.data.find((b) => b.id === book.id)) {
      throw new Error("No se pueden añadir 2 libros iguales");
    }
    this.data.push(book);
    const copyBook = book;
    return copyBook;
  }

  toString() {
    let cartToString = `Libros (total ${this.data.length})`;
    this.data.forEach(
      (item) =>
        (cartToString += `
    - ${item}`)
    );
    return cartToString;
  }
}
