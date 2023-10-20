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
  /*
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
  */

  render() {
    this.view.renderOptionsModule(this.modules);
  }
}
