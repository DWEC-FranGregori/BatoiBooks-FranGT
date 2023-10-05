import "./style.css";
import batoiBookLogo from "/logoBatoi.png";
import data from "./datos";

import Users from "./src/model/users.class";
import Modules from "./src/model/Modules.class";
import Books from "./src/model/Books.class";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${batoiBookLogo}" class="logo vanilla" alt="Batoi logo" />
    </a>
    <h1>BatoiBooks</h1>
    <p class="read-the-docs">
      Abre la consola para ver el resultado
    </p>
  </div>
`;

console.log("PARTE DE CLASES");
let users = new Users();
let modules = new Modules();
let books = new Books();

users.populateData(data["users"]);
modules.populateData(data["modules"]);
books.populateData(data["books"]);

console.log(users);
console.log(modules);
console.log(books);
