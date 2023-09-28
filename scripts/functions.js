function booksFromUser(array, number) {
  return array.filter((book) => book.idUser === number);
}

export default { booksFromUser };
