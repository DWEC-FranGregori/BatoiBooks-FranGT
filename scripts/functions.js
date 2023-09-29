const APUNTES = "Apunts";
const VACIO = "";
const ESTADOS = ["bad", "good", "new"];
const MIN_PERCENTAJE_TO_INCREMENT = 0.01;
const MAX_PERCENTAJE_TO_INCREMENT = 0.99;

function booksFromUser(arrayBooks, idUser) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }

  if (!isValidId(idUser)) {
    return [];
  }
  return arrayBooks.filter((book) => book.idUser === idUser);
}

function booksFromModule(arrayBooks, module) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }
  return arrayBooks.filter((book) => book.idModule === module);
}

function booksCheeperThan(arrayBooks, price) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }

  if (!isValidPrice(price)) {
    return [];
  }
  return arrayBooks.filter((book) => book.price <= price);
}

function booksWithStatus(arrayBooks, status) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }
  if (!ESTADOS.includes(status)) {
    return [];
  }
  return arrayBooks.filter((book) => book.status === status);
}

function averagePriceOfBooks(arrayBooks) {
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

function booksOfTypeNote(arrayBooks) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }
  return arrayBooks.filter((book) => book.publisher === APUNTES);
}

function booksNotOfTypeNote(arrayBooks) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }
  return arrayBooks.filter((book) => book.publisher !== APUNTES);
}

function booksNotSold(arrayBooks) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return [];
  }
  return arrayBooks.filter((book) => book.soldDate === VACIO);
}

function incrementPriceOfbooks(arrayBooks, percentajeToIncrement) {
  if (!isArrayAndContainsInfo(arrayBooks)) {
    return;
  }

  if (!isValidPercentaje(percentajeToIncrement)) {
    return;
  }
  arrayBooks.map((book) => (book.price *= 1 + percentajeToIncrement));
}

function getUserById(arrayUsers, idUser) {
  if (!isArrayAndContainsInfo(arrayUsers)) {
    return [];
  }

  if (!isValidId(idUser)) {
    return [];
  }
  return checkIsUndefined(arrayUsers.find((user) => user.id === idUser));
}

function getUserIndexById(arrayUsers, idUser) {
  if (!isArrayAndContainsInfo(arrayUsers)) {
    return [];
  }

  if (!isValidId(idUser)) {
    return [];
  }
  return arrayUsers.findIndex((user) => user.id === idUser);
}

function getUserByNickName(arrayUsers, nickname) {
  if (!isArrayAndContainsInfo(arrayUsers)) {
    return new Object();
  }
  return checkIsUndefined(arrayUsers.find((user) => user.nick === nickname));
}

function getModuleByCode(arrayModules, code) {
  if (!isArrayAndContainsInfo(arrayModules)) {
    return new Object();
  }
  return checkIsUndefined(arrayModules.find((module) => module.code === code));
}

function getModuleIndexByCode(arrayModules, code) {
  if (!isArrayAndContainsInfo(arrayModules)) {
    return -1;
  }
  return arrayModules.findIndex((module) => module.code === code);
}

function checkIsUndefined(data) {
  if (!data) {
    data = new Object();
  }
  return data;
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

function isValidId(idUser) {
  return isNumber(idUser) && isPositive(idUser);
}

function isNumber(number) {
  return !Number.isNaN(number);
}

function isPositive(number) {
  return number >= 0;
}
export default {
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNote,
  booksNotOfTypeNote,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode,
  getModuleIndexByCode,
};
