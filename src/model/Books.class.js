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
    book.id = this.getNewId();
    this.data.push(new Book(book));
    return new Book(book);
  }

  removeItem(id) {
    const itemToRemove = this.getItemById(id);
    if (itemToRemove === -1) {
      throw Error("Id no encontrado");
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
    return new Books(this.data.filter((book) => book.idModule === module));
  }

  booksCheeperThan(price) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    if (!isValidPrice(price)) {
      return [];
    }
    return new Books(this.data.filter((book) => book.price <= price));
  }

  booksWithStatus(status) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [Function, Books];
    }
    if (!ESTADOS.includes(status)) {
      return [Function, Books];
    }
    return new Books(this.data.filter((book) => book.status === status));
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
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return new Books(this.data.filter((book) => book.publisher === APUNTES));
  }

  booksNotOfTypeNote() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return new Books(this.data.filter((book) => book.publisher !== APUNTES));
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
    return this.data.map((book) => (book.price *= 1 + percentajeToIncrement));
  }

  toString() {
    return `El libro con id ${this.data.id} está en estado: ${this.data.status} y pertenece al módulo ${this.data.module}`;
  }

  getNewId() {
    if (!this.data.length) {
      return 1;
    }
    if (this.data.length == 1) {
      return 2;
    }
    return Math.max(...this.data.map((book) => book.idUser), 0) + 1;
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
