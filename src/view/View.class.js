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
