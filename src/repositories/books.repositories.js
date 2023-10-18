"use strict";

const SERVER = import.meta.env.VITE_URL_API;

export default class BooksRepository {
  async getAllBooks() {
    const response = await fetch(SERVER + "/books");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async getBookById(id) {
    const response = await fetch(SERVER + `/books/${id}`);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async getBooksFromUser(idUser) {
    const response = await fetch(SERVER + `/books?idUser=${idUser}`);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async getBooksFromModule(idModule) {
    const response = await fetch(SERVER + `/books?idModule=${idModule}`);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async getBooksWithStatus(status) {
    const response = await fetch(SERVER + `/books?status=${status}`);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }
  //PATCH solo datos a modificar
  //PUT todo el objeto, con los datos modificados y los datos sin modificar

  async addBook(book) {
    const response = await fetch(SERVER + "/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async removeBook(id) {
    const response = await fetch(SERVER + `/books/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async changeBook(book) {
    const response = await fetch(SERVER + `/books/${book.id}`, {
      method: "PUT", // or 'PATCH'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    return response.json();
  }

  async incrementPriceOfBooks(newPrice) {
    const response = await fetch(SERVER + `/books?${newPrice}`, {
      method: "PATCH", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: (newPrice + 1) * books.price }),
    });
    return response.json();
  }

  async updatePriceOfBook(id, price) {
    const response = await fetch(SERVER + `/books/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: price }),
    });
    return response.json();
  }
}
