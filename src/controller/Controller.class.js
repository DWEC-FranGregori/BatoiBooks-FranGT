import Books from "../model/books.class";
import Users from "../model/users.class";
import Modules from "../model/modules.class";
import Cart from "../model/cart.class";
import View from "../view/View.class";

export default class Controller {
  constructor() {
    this.books = new Books();
    this.users = new Users();
    this.modules = new Modules();
    this.cart = new Cart();
    this.view = new View();
  }

  async init() {
    try {
      await Promise.all([
        this.books.populateData(),
        this.users.populateData(),
        this.modules.populateData(),
        this.cart.populateData(),
      ]);
    } catch (err) {
      this.view.renderMessage("error", "Error cargando los datos: " + err);
      return;
    }
    this.view.renderMessage("info", "Datos cargados correctamente");
    this.view.renderModulesInSelect(this.modules.data);
    this.books.data.forEach((book) => {
      const DOMBook = this.view.renderBook(book);
      DOMBook.querySelector(".delete").addEventListener("click", async () => {
        const isReady = confirm(
          `¿Está seguro que quiere elminar el libro ${book.id} con módulo ? ${book.idModule}`
        );
        if (!isReady) {
          this.view.renderMessage(
            "error",
            `Libro ${book.id} con módulo ${book.idModule} no eliminado`
          );
          return;
        }
        try {
          await this.books.removeItem(Number(book.id));
          this.view.renderMessage(
            "info",
            `Libro ${book.id} con módulo ${book.idModule} eliminado correctamente`
          );
        } catch (err) {
          this.view.renderMessage(
            "error",
            "Error, no se pudo borrar el libro: " + err
          );
          return;
        }
        this.view.renderRemoveBook(book.id);
      });

      DOMBook.querySelector(".add").addEventListener("click", async () => {
        const isReady = confirm(
          `¿Está seguro que quiere añadir el libro ${book.id} con módulo ${book.idModule}?`
        );
        if (!isReady) {
          this.view.renderMessage(
            "error",
            `Libro ${book.id} con módulo ${book.idModule} no añadido al carrito`
          );
          return;
        }

        try {
          await this.cart.addItem(book);
          this.view.renderMessage(
            "info",
            `Libro ${book.id} con módulo ${book.idModule} añadido al carro`
          );
          this.view.clearForm();
        } catch (err) {
          this.view.renderMessage(
            "error",
            "Error, no se pudo añadir el libro: " + err
          );
          return;
        }
        // ahould render alls books from cart
      });

      DOMBook.querySelector(".edit").addEventListener("click", async () => {
        const isReady = confirm(
          `¿Está seguro que quiere editar el libro ${book.id} con módulo ${book.idModule}?`
        );
        if (!isReady) {
          this.view.renderMessage(
            "error",
            `Edición cancelada del libro ${book.id} con módulo ${book.idModule}`
          );
          return;
        }

        this.view.changeFormTitle("Editar");
        this.view.changeSubmitText("Cambiar");
        this.view.renderBookInForm(book);
      });
    });
    this.view.bookForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const idUser = 2; // guardo el usuario que soy yo
      if (!this.view.validateForm()) {
        return;
      }

      let book = this.view.getBookFormValues();
      book.price = Number(book.price);
      book.pages = Number(book.pages);
      book.idUser = idUser;

      const error = this.view.bookForm.querySelector("span.error");
      error.innerHTML = "";
      const exists = await this.books.isCreated(idUser, book.idModule);
      if (exists) {
        error.innerHTML = "El libro ya existe weyyy";
        return;
      }

      try {
        let message = "añadido";
        if (this.view.getId() === "hidden") {
          book = await this.books.addItem(book);
          this.view.renderBook(book);
        } else {
          message = "editado";
          book = await this.books.updateItem(book);
          this.view.changeFormTitle("Añadir");
          this.view.hideId();
          this.view.clearForm();
          this.view.changeSubmitText("Añadir");
          this.view.renderUpdatedBook(book);
        }
        this.view.renderMessage(
          "info",
          `Libro ${book.id} con módulo ${book.idModule} ${message} correctamente`
        );
      } catch (err) {
        this.view.renderMessage("error", "Error guardando el libro: " + err);
        return;
      }
    });
    window.addEventListener("hashchange", function () {
      const URL = String(window.location);

      const listElement = document.getElementById("list");
      const formElement = document.getElementById("form");
      const aboutElement = document.getElementById("about");

      listElement.setAttribute("hidden", "true");
      formElement.setAttribute("hidden", "true");
      formElement.setAttribute("hidden", "true");

      if (URL.includes("list")) {
        listElement.removeAttribute("hidden");
      } else if (URL.includes("form")) {
        formElement.removeAttribute("hidden");
      } else {
        aboutElement.removeAttribute("hidden");
      }
    });
  }
}
