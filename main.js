import "./style.css";
import batoiBookLogo from "./public/logoBatoi.png";
import data from "./datos";
import functions from "./scripts/functions";

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

console.log(functions.booksFromUser(data["books"], 4));
console.log(functions.booksFromModule(data["books"], "5021"));
