import Book from "./Book.class";

const VACIO = "";
const APUNTES = "Apunts";
const ESTADOS = ["bad", "good", "new"];
const MIN_PERCENTAJE_TO_INCREMENT = 0.01;
const MAX_PERCENTAJE_TO_INCREMENT = 0.99;

export default class Books {
  constructor() {
    this.data = [];
  }

  populateData(arrayBooks) {
    arrayBooks.forEach((book) => {
      this.data.push(new Book(book));
    });
  }

  addItem(book) {
    let newBook = new Book(book);
    newBook.id = this.getLastId() + 1;
    this.data.push(newBook);
    return newBook;
  }

  removeItem(id) {
    const itemToRemove = this.getItemById(id);
    if (itemToRemove === -1) {
      throw new Error("Id no encontrado");
    }

    this.data = this.data.filter(function (book) {
      return book.id !== id;
    });
    return {};
  }

  getItemById(id) {
    return new Book(this.data.find((book) => book.id === id));
  }

  booksFromUser(idUser) {
    const newBooks = new Books();
    const booksFiltrered = this.data.filter((value) => value.idUser === idUser);
    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  booksFromModule(module) {
    const newBooks = new Books();
    const booksFiltrered = this.data.filter((book) => book.idModule === module);
    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  booksCheeperThan(price) {
    const newBooks = new Books();
    const booksFiltrered = this.data.filter((book) => book.price <= price);
    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  booksWithStatus(status) {
    const newBooks = new Books();
    if (!isArrayAndContainsInfo(this.data)) {
      return newBooks;
    }

    if (!ESTADOS.includes(status)) {
      return newBooks;
    }

    const booksFiltrered = this.data.filter((book) => book.status === status);
    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  averagePriceOfBooks() {
    if (!isArrayAndContainsInfo(this.data)) {
      return "0.00 €";
    }

    return (
      (
        this.data.reduce((total, book) => (total += book.price), 0) /
        this.data.length
      ).toFixed(2) + " €"
    );
  }

  booksOfTypeNote() {
    const newBooks = new Books();
    if (!isArrayAndContainsInfo(this.data)) {
      return newBooks;
    }

    const booksFiltrered = this.data.filter(
      (book) => book.publisher === APUNTES
    );

    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  booksNotOfTypeNote() {
    const booksFiltrered = this.data.filter(
      (book) => book.publisher !== APUNTES
    );
    const newBooks = new Books();
    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  booksNotSold() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return new Books(this.data.filter((book) => book.soldDate === VACIO));
  }

  incrementPriceOfbooks(percentajeToIncrement) {
    if (!isArrayAndContainsInfo(this.data)) {
      return;
    }

    if (!isValidPercentaje(percentajeToIncrement)) {
      return;
    }
    return this.data.map(
      (book) => (book.price += book.price * percentajeToIncrement)
    );
  }

  toString() {
    return `El libro con id ${this.data.id} está en estado: ${this.data.status} y pertenece al módulo ${this.data.module}`;
  }

  getLastId() {
    if (this.data.length === 0) {
      return 0;
    }
    return this.data.reduce((maxId, book) => Math.max(maxId, book.id), 0);
  }
}

function isValidId(idUser) {
  return isNumber(idUser) && isPositive(idUser);
}

function isValidPrice(price) {
  return isNumber(price) && isPositive(price);
}

function isNumber(number) {
  return !Number.isNaN(number);
}

function isPositive(number) {
  return number >= 0;
}

function isValidPercentaje(percentajeToIncrement) {
  return (
    isNumber(percentajeToIncrement) &&
    percentajeToIncrement >= MIN_PERCENTAJE_TO_INCREMENT &&
    percentajeToIncrement <= MAX_PERCENTAJE_TO_INCREMENT
  );
}

function isArrayAndContainsInfo(array) {
  return Array.isArray(array) && array.length;
}
