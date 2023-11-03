import Books from "../model/books.class";
import Users from "../model/users.class";
import Modules from "../model/modules.class";
import View from "../view/view.class";

export default class Controller {
  constructor() {
    this.books = new Books();
    this.users = new Users();
    this.modules = new Modules();
    this.view = new View();
  }

  async init() {
    try {
      await Promise.all([
        this.books.populateData(),
        this.users.populateData(),
        this.modules.populateData(),
      ]);
    } catch (err) {
      this.view.renderErrorMessage("error", "Error cargando los datos: " + err);
      return;
    }
    this.view.renderErrorMessage("info", "Datos cargados correctamente");
    this.view.renderModulesInSelect(this.modules.data);
    this.books.data.forEach((book) => {
      const DOMBook = this.view.renderBook(book);
      DOMBook.querySelector(".delete").addEventListener("click", async () => {
        const isReady = confirm(
          `¿Está seguro que quiere elminar el libro ${book.id} con módulo ? ${book.idModule}`
        );
        if (!isReady) {
          this.view.renderErrorMessage(
            "error",
            `Libro ${book.id} con módulo ${book.idModule} no eliminado`
          );
          return;
        }
        try {
          await this.books.removeItem(Number(book.id));
          this.view.renderErrorMessage(
            "info",
            `Libro ${book.id} con módulo ${book.idModule} eliminado correctamente`
          );
        } catch (err) {
          this.view.renderErrorMessage(
            "error",
            "Error, no se pudo borrar el libro: " + err
          );
          return;
        }
        this.view.renderRemoveBook(book.id);
      });
    });
  }
}
