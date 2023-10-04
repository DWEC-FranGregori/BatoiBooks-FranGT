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
    this.data.forEach((book) => {
      arrayBooks.push(new Book(book));
    });
  }

  addItem(book) {
    book.id = getNewId();
    this.data.push(new Book(book));
  }

  removeItem(id) {
    const itemToRemove = this.getItemById(id);
    if(itemToRemove == {}){
      throw new IdNotFound();
    }
    this.data = this.data.filter(function (book) {
      return book.id !== id;
  });
  }

  getItemById(id) {
    const item = this.data.find((book) => book.id === id);
    if(!item){
      {};
    }
    return item;
  }

  booksFromUser( idUser) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    if (!isValidId(idUser)) {
      return [];
    }
    return this.data.filter((book) => book.idUser === idUser);
  }

  booksFromModule(module) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return this.data.filter((book) => book.idModule === module);
  }

  booksCheeperThan(price) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    if (!isValidPrice(price)) {
      return [];
    }
    return this.data.filter((book) => book.price <= price);
  }

  booksWithStatus(status) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    if (!ESTADOS.includes(status)) {
      return [];
    }
    return this.data.filter((book) => book.status === status);
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
    return this.data.filter((book) => book.publisher === APUNTES);
  }

  booksNotOfTypeNote() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return this.data.filter((book) => book.publisher !== APUNTES);
  }

  booksNotSold() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return this.data.filter((book) => book.soldDate === VACIO);
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

function getNewId(){
  if (this.data.length < 1) {
    return 1;
  }
  return ++this.data.reduce((bookBefore, bookAfter) => Math.max(bookBefore.id, bookAfter.id), -Infinity); 
}

module.exports = Books;
