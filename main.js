import "./style.css";
import batoiBookLogo from "./public/logoBatoi.png";
import data from "./datos";

import Users from "./src/model/Users.class";
import Modules from "./src/model/Modules.class";

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

const modules = new Modules();
const newModule = modules.addItem({
  code: "AAAA",
  cliteral: "Nuevo módulo",
  vliteral: "Nou mòdul",
  idCourse: "12",
});
const newModule2 = modules.addItem({
  code: "BBBB",
  cliteral: "Nuevo módulo",
  vliteral: "Nou mòdul",
  idCourse: "16",
});

modules.removeItem(newModule.code);

console.log(newModule);
console.log(newModule2);
console.log(modules.length);
