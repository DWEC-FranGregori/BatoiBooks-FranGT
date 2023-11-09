import "./style.css";
import batoiLogo from "/logoBatoi.png";
import Controller from "./src/controller/Controller.class";

document.querySelector("#app").innerHTML = `
  <header>
    <a href="http://www.cipfpbatoi.es" target="_blank">
      <img src="${batoiLogo}" class="logo" alt="CIP FP Batoi" />
    </a>
  </header>
  <nav>
    <ul>
      <li><a href="#list">Ver Libros</a></li>
      <li><a href="#form">Añadir Libro</a></li>
      <li><a href="#about">Acerca de...</a></li>
    </ul>
  </nav>
  <div id="messages">
  </div>
  <div id="list">
  </div>
    <div id="form">
      <form id="bookForm">
        <div>
          <label for="id-module">Módulo:</label>
          <select id="id-module" required>
            <option>- Selecciona un módulo -</option>
          </select><br>
        </div>

        <div>
          <label for="publisher">Editorial:</label>
          <input type="text" id="publisher" required><br>
        </div>

        <div>
          <label for="price">Precio:</label>
          <input type="number" id="price" required><br>
        </div>

        <div>
          <label for="pages">Páginas:</label>
          <input type="number" id="pages"><br>
        </div>

        <div>
          <label>Estado:</label>
          <input type="radio" name="status" value="new" class>new
          <input type="radio" name="status" value="good">good
          <input type="radio" name="status" value="bad">bad
        </div>

        <div>
          <label for="comments">Comentarios:</label>
          <textarea id="comments"></textarea>
        </div>

        <button type="submit">Añadir</button>
        <button type="reset">Reset</button>
      </form>
    </div>
    <div id="about">
      <p>Lorem Ipsum</p>
    </div>
  </div>

  <footer>Fran Gregori</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const myController = new Controller();
  myController.init();
});
