function booksFromUser(array, number) {
  return array.filter((book) => book.idUser === number);
}

function booksFromModule(array, string) {
  return array.filter((book) => book.idModule === string);
}

export default { booksFromUser, booksFromModule };
