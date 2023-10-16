"use strict";

const SERVER = import.meta.env.VITE_URL_API;

export default class ModulesRepository {
  async getAllModules() {
    const response = await fetch(SERVER + "/modules");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async getModuleById(id) {
    const response = await fetch(SERVER + `/modules/${id}`);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async addModule(module) {
    const response = await fetch(SERVER + "/modules", {
      method: "POST",
      body: JSON.stringify(module),
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

  async removeModule(code) {
    const response = await fetch(SERVER + `/modules/${code}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  }

  async changeModule(module) {
    const response = await fetch(SERVER + `/modules/${module.id}`, {
      method: "PUT", // or 'PATCH'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(module),
    });
    return response.json();
  }
}
