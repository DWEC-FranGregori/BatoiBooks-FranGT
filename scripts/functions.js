const APUNTES = "Apunts";
const VACIO = "";

function booksFromUser(array, number) {
  return array.filter((book) => book.idUser === number);
}

function booksFromModule(array, string) {
  return array.filter((book) => book.idModule === string);
}

function booksCheeperThan(array, number) {
  return array.filter((book) => book.price <= number);
}

function booksWithStatus(array, string) {
  return array.filter((book) => book.status === string);
}

function averagePriceOfBooks(array) {
  return (
    (
      array.reduce((total, book) => ((total += book.price), 0)) / array.length
    ).toFixed(2) + " €"
  );
}

function booksOfTypeNote(array) {
  return array.filter((book) => book.publisher === APUNTES);
}

function booksNotOfTypeNote(array) {
  return array.filter((book) => book.publisher !== APUNTES);
}

function booksNotSold(array) {
  return array.filter((book) => book.soldDate === VACIO);
}

function incrementPriceOfbooks(array, number) {
  array.map((book) => (book.price *= 100 * (100 * number)));
}

function getUserById(array, number) {
  return checkIsUndefined(array.find((user) => user.id === number));
}

function getUserIndexById(array, number) {
  return array.findIndex((user) => user.id === number);
}

function getUserByNickName(array, string) {
  return checkIsUndefined(array.find((user) => user.nick === string));
}

function getModuleByCode(array, string) {
  return checkIsUndefined(array.find((module) => module.code === string));
}

function getModuleIndexByCode(array, string) {
  return array.findIndex((module) => module.code === string);
}

function checkIsUndefined(data) {
  if (!data) {
    data = new Object();
  }
  return data;
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
