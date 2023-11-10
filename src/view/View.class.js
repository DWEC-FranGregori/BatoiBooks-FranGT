export default class View {
  constructor() {
    this.list = document.getElementById("list");
    this.about = document.getElementById("about");
    this.form = document.getElementById("form");
    this.bookForm = document.getElementById("bookForm");
    this.messages = document.getElementById("messages");
  }

  renderBook(book) {
    const bookUI = document.createElement("div");
    bookUI.id = "book-" + book.id;
    bookUI.className = "card";
    bookUI.innerHTML = `
    <img src="${book.photo}" alt="Lbro: ${book.id}">
      <div>
        <h5 class="module">${book.idModule + " (" + book.id + ")"}</h5>
        <h6 class="publisher">${book.publisher}</h6>
        <p class="price">Precio: ${book.price} €</p>
        <p class="pages">Páginas: ${book.pages}</p>
        <p class="status">Estado: ${book.status}</p>
        <p class="soldDate">${
          book.soldDate ? "Vendido el " + book.soldDate : "En venta"
        }</p>
        <p class="comments">Comentarios: ${book.comments || ""}</p>
        <button class="add">
          <span class="material-icons">add_shopping_cart</span>
        </button>
        <button class="edit">
          <span class="material-icons">edit</span>
        </button>
        <button class="delete">
          <span class="material-icons">delete</span>
        </button>
      </div>
    `;
    this.list.appendChild(bookUI);
    this.bookForm.reset();
    return bookUI;
  }

  renderUpdatedBook(book) {
    const bookUI = document.getElementById(`${"book-" + book.id}`);
    bookUI.querySelector(".module").innerText = `${book.idModule} ${book.id}`;
    bookUI.querySelector(".publisher").innerText = `${book.publisher}`;
    bookUI.querySelector(".price").innerText = `Precio: ${book.price} €`;
    bookUI.querySelector(".pages").innerText = `Páginas: ${book.pages}`;
    bookUI.querySelector(".status").innerText = `Estado: ${book.status}`;
    bookUI.querySelector(".soldDate").innerText = `${
      book.soldDate ? "Vendido el " + book.soldDate : "En venta"
    }`;
    bookUI.querySelector(".comments").innerText = `Comentarios: ${
      book.comments || ""
    }`;
  }

  renderModulesInSelect(modules) {
    const selectModules = document.getElementById("id-module");
    modules.forEach((module) => {
      const moduleUI = document.createElement("option");
      moduleUI.value = module.code;
      moduleUI.textContent = module.cliteral;
      selectModules.appendChild(moduleUI);
    });
  }

  renderRemoveBook(id) {
    const bookUI = document.getElementById("book-" + id);
    bookUI.parentElement.removeChild(bookUI);
  }

  renderMessage(type, message) {
    const messageUI = document.createElement("div");
    messageUI.className = type + " alert alert-danger alert-dismissible";
    messageUI.setAttribute("role", "alert");
    messageUI.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
    `;
    this.messages.appendChild(messageUI);
    window.scroll(0, 0);
  }

  getBookFormValues() {
    const id = document.getElementById("id").value;
    const idModule = this.bookForm.elements["id-module"].value;
    // También podríamos coger el input directamente con su id
    // document.getElementById('id-module').value
    const publisher = this.bookForm.elements.publisher.value;
    const price = this.bookForm.elements.price.value;
    const pages = this.bookForm.elements.pages.value;
    const status = this.bookForm.querySelector(
      'input[name="status"]:checked'
    ).value;
    const comments = this.bookForm.elements.comments.value;

    return {
      id,
      idModule,
      publisher,
      price,
      pages,
      status,
      comments,
    };
  }
  clearForm() {
    this.bookForm.reset();
  }

  renderBookInForm(book) {
    document.getElementById("id-book").removeAttribute("hidden");
    document.getElementById("id").value = book.id;
    document.getElementById("id-module").value = book.idModule;
    document.getElementById("publisher").value = book.publisher;
    document.getElementById("price").value = book.price;
    document.getElementById("pages").value = book.pages;
    document.getElementById("comments").value = book.comments;
    const radioButtons = document.querySelectorAll(
      'input[type="radio"][name="status"]'
    );
    radioButtons.forEach((botton) => {
      if (botton.value === book.status) {
        botton.checked = true;
      }
    });
  }

  changeFormTitle(text) {
    const title = document.getElementById("title");
    title.textContent = `${text} Libro`;
  }

  changeSubmitText(text) {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = `${text}`;
  }

  getId() {
    return document.getElementById("id-book").getAttribute("hidden");
  }

  hideId() {
    document.getElementById("id-book").setAttribute("hidden", "hidden");
  }
}
