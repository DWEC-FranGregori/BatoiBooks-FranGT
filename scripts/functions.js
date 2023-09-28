function booksFromUser(array, number) {
  return array.filter((book) => book.idUser === number);
}

function booksFromModule(array, string) {
  return array.filter((book) => book.idModule === string);
}

function booksCheeperThan(array, number) {
  return array.filter((book) => book.price <= number);
}

export default { booksFromUser, booksFromModule, booksCheeperThan };
