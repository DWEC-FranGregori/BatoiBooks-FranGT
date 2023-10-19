import Book from "./book.class";

import BooksRepository from "../repositories/books.repositories";

const NOTES = "Apunts";

export default class Books {
  constructor() {
    this.data = [];
    this.booksRepository = new BooksRepository();
  }

  async getBookById(id) {
    await this.booksRepository.getBookById(id);
    return this.data.find((item) => item.id === id) || {};
  }

  async populateData() {
    const books = await this.booksRepository.getAllBooks();
    this.data = books.map((book) => new Book(book));
  }

  async addItem(book) {
    await this.booksRepository.addBook(book);
    this.data.push(new Book(book));
    return new Book(book);
  }

  async removeItem(id) {
    await this.booksRepository.removeBook(id);
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw "No existe un libro con id " + id;
    }
    this.data.splice(index, 1);
    return {};
  }

  toString() {
    let booksToString = `Libros (total ${this.data.length})`;
    this.data.forEach(
      (item) =>
        (booksToString += `
    - ${item}`)
    );
    return booksToString;
  }

  booksFromUser(userId) {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => item.idUser === userId);
    return filteredBooks;
  }

  booksFromModule(moduleId) {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => item.idModule === moduleId);
    return filteredBooks;
  }

  booksCheeperThan(price) {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => item.price <= price);
    return filteredBooks;
  }

  booksWithStatus(status) {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => item.status === status);
    return filteredBooks;
  }

  averagePriceOfBooks() {
    const sum = this.data.reduce((total, item) => total + item.price, 0);
    return this.data.length
      ? (sum / this.data.length).toFixed(2) + " €"
      : "0 €";
  }

  booksOfTypeNote() {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => item.publisher === NOTES);
    return filteredBooks;
  }

  booksNotOfTypeNote() {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => item.publisher !== NOTES);
    return filteredBooks;
  }

  booksNotSold() {
    const filteredBooks = new Books();
    filteredBooks.data = this.data.filter((item) => !item.soldDate);
    return filteredBooks;
  }

  updatePriceOfBook(id, price) {
    return this.data.map((item) => {
      if (item.id === id) {
        item.price = (price + 1) * item.price;
      }
      return item;
    });
  }

  async incrementPriceOfbooks(increment) {
    return this.data.map((item) => {
      item = this.booksRepository.updatePriceOfBook(
        item.id,
        (item.price = (item.price * (1 + increment)).toFixed(2))
      );
    });
  }
}
