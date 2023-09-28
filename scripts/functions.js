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
    Math.round(
      (array.reduce((total, book) => (book.price += total)) / array.length +
        Number.EPSILON) *
        100
    ) / 100
  ).concat(" €");
}
export default {
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
};
