const Book = require("../model/Book.class");

const VACIO = "";
const ESTADOS = ["bad", "good", "new"];
const MIN_PERCENTAJE_TO_INCREMENT = 0.01;
const MAX_PERCENTAJE_TO_INCREMENT = 0.99;

class Books {
  constructor() {
    this.data = [];
  }
  populateData(arrayBooks) {
    arrayBooks.forEach((book) => {
      this.data.push(new Book(book));
    });
  }
  addItem() {}
  removeItem() {}
  getItemByCode() {}
  booksFromUser(arrayBooks, idUser) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }

    if (!isValidId(idUser)) {
      return [];
    }
    return arrayBooks.filter((book) => book.idUser === idUser);
  }

  booksFromModule(arrayBooks, module) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }
    return arrayBooks.filter((book) => book.idModule === module);
  }

  booksCheeperThan(arrayBooks, price) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }

    if (!isValidPrice(price)) {
      return [];
    }
    return arrayBooks.filter((book) => book.price <= price);
  }

  booksWithStatus(arrayBooks, status) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }
    if (!ESTADOS.includes(status)) {
      return [];
    }
    return arrayBooks.filter((book) => book.status === status);
  }

  averagePriceOfBooks(arrayBooks) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return "0.00 €";
    }
    return (
      (
        arrayBooks.reduce((total, book) => (total += book.price), 0) /
        arrayBooks.length
      ).toFixed(2) + " €"
    );
  }

  booksOfTypeNote(arrayBooks) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }
    return arrayBooks.filter((book) => book.publisher === APUNTES);
  }

  booksNotOfTypeNote(arrayBooks) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }
    return arrayBooks.filter((book) => book.publisher !== APUNTES);
  }

  booksNotSold(arrayBooks) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return [];
    }
    return arrayBooks.filter((book) => book.soldDate === VACIO);
  }

  incrementPriceOfbooks(arrayBooks, percentajeToIncrement) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return;
    }

    if (!isValidPercentaje(percentajeToIncrement)) {
      return;
    }
    return arrayBooks.map((book) => (book.price *= 1 + percentajeToIncrement));
  }

  toString() {
    return `El libro con id ${this._data_.id} está en estado: ${this._data_.status} y pertenece al módulo ${this._data_.module}`;
  }
}

function isValidId(idUser) {
  return isNumber(idUser) && isPositive(idUser);
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

module.exports = Books;
