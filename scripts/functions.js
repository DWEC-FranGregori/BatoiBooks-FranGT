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
export default {
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNote,
  booksNotOfTypeNote,
  booksNotSold,
};
