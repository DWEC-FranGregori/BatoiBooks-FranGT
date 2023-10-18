import User from "./user.class";

import UsersRepository from "../repositories/users.repositories";

export default class Users {
  constructor() {
    this.data = [];
    this.usersRepository = new UsersRepository();
  }

  async populateData() {
    const usersFromRepository = await this.usersRepository.getAllUsers();
    this.data = usersFromRepository.map(
      (user) => new User(user.id, user.email, user.nick, user.password)
    );
  }

  async getUserById(id) {
    await this.usersRepository.getUserById(id);
    return this.data.find((item) => item.id === id) || {};
  }

  async addItem(payload) {
    await thiis.usersRepository.addUser(payload);
    const newUser = new User(
      getNextId(this.data),
      payload.email,
      payload.nick,
      payload.password
    );
    this.data.push(newUser);
    return newUser;
  }

  async removeItem(id) {
    await this.usersRepository.removeUser(id);
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw "No existe un usuario con id " + id;
    }
    this.data.splice(index, 1);
    return {};
  }

  toString() {
    let usersToString = `Usuarios (total ${this.data.length})`;
    this.data.forEach(
      (item) =>
        (usersToString += `
    - ${item}`)
    );
    return usersToString;
  }

  getUserByNick(nick) {
    return this.data.find((item) => item.nick === nick) || {};
  }
}

function getNextId(data) {
  return data.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1;
}
