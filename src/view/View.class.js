export default class View {
  constructor() {
    this.list = document.getElementById("list");
    this.form = document.getElementById("form");
    this.about = document.getElementById("about");
    this.messages = document.getElementById("messages");
  }

  renderOptionsModule(modules) {
    const DOMSelector = document.getElementById("id-module");
    modules.data.forEach((module) => {
      const DOMOptions = document.createElement("option");
      DOMOptions.textContent = module.cliteral;
      DOMOptions.value = module.code;
      // DOMOptions.setAttribute("value", module.code);
      DOMSelector.appendChild(DOMOptions);
    });
  }

  renderAllBooks(books) {
    const DOMSelector = document.getElementById("list");
    books.data.forEach((book) => {
      const newCardClass = document.createElement("div");
      newCardClass.className = "card";
      DOMSelector.appendChild(newCardClass);

      const photo = document.createElement("img");
      photo.src = book.photo;
      const idModule = document.createElement("h5");
      idModule.textContent = book.idModule;
      const publisher = document.createElement("h6");
      publisher.textContent = book.publisher;
      const price = document.createElement("p");
      price.textContent = `Precio : ${book.price}`;
      const pages = document.createElement("p");
      pages.textContent = book.pages;
      const status = document.createElement("p");
      status.textContent = `Estado : ${book.status}`;
      const soldDate = document.createElement("p");
      soldDate.textContent = `Vendido el ${book.soldDate}`;
      const comments = document.createElement("p");
      comments.textContent = `Comentarios : ${book.comments}`;

      newCardClass.appendChild(photo);
      newCardClass.appendChild(idModule);
      newCardClass.appendChild(publisher);
      newCardClass.appendChild(price);
      newCardClass.appendChild(pages);
      newCardClass.appendChild(status);
      newCardClass.appendChild(soldDate);
      newCardClass.appendChild(comments);

      DOMSelector.appendChild(newCardClass);
    });
  }

  renderDeleteBook(bookId) {
    const DOMBook = document.getElementById(`book-${bookId}`);
    DOMBook.parentElement.removeChild(DOMBook);
  }

  renderMessage(type, message) {
    const DOMNEWMEssage = document.createElement("div");
    DOMNEWMEssage.innerHTML = `
    ${message} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>`;
    DOMNEWMEssage.className = `${type} alert alert-danger alert-dismissible" role="alert"`;
    DOMNEWMEssage.setAttribute("role", "alert");
    this.messages.appendChild(DOMNEWMEssage);
  }
}
