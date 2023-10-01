import "./style.css";
import batoiBookLogo from "./public/logoBatoi.png";
import data from "./datos";

const Users = require("./src/model/Users.class");

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
users.populateData(data["books"]);

users.forEach((user) => {
  console.log(user);
});
