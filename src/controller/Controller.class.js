import Users from "../model/Users.class";
import Modules from "../model/Modules.class";
import Books from "../model/Books.class";
import View from "../view/View.class";

export default class Controller {
  constructor() {
    this.users = new Users();
    this.modules = new Modules();
    this.books = new Books();
    this.view = new View();
  }

  async init() {
    // Cargar los datos
    await this.users.populateData();
    await this.modules.populateData();
    await this.books.populateData();
    this.render();
  }
  removeBook() {
    this.view.remove.addEventListener("click", async (event) => {
      const bookId = prompt("Introduzce una id de la libro a borrar");
      try {
        await this.books.removeItem(bookId);
      } catch (error) {
        this.view.renderMessage("error", error.message);
        return;
      }
      this.view.renderDeleteBook(bookId);
    });
  }

  render() {
    this.view.renderOptionsModule(this.modules);
    this.view.renderAllBooks(this.books);

    this.view.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const idModule = document.getElementById("id-module").value;
      const publisher = document.getElementById("publisher").value;
      const price = document.getElementById("price").value;
      const pages = document.getElementById("pages").value;
      const comments = document.getElementById("comments").value;

      const book = await this.books.addItem({
        idUser: 2,
        idModule,
        publisher,
        price,
        pages,
        comments,
        photo: "",
        soldDate: "",
        status: "",
      });

      this.view.renderBook(book);
      this.view.clearForm();
    });
  }
}
