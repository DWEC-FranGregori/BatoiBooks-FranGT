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
  return array.find((user) => user.id === number);
}

function getUserIndexById(array, number) {
  return array.findIndex((user) => user.id === number);
}

function getUserByNickName(array, string) {
  return array.find((user) => user.nick === string);
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
};
