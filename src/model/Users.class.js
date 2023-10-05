import User from "./User.class";

export default class Users {
  constructor() {
    this.data = [];
  }

  populateData(arrayUsers) {
    arrayUsers.forEach((user) => {
      this.data.push(new User(user.id, user.email, user.nick));
    });
  }

  addItem(user) {
    user.id = this.getNewId();
    this.data.push(new User(user.id, user.email, user.nick));
    return new User(user.id, user.email, user.nick);
  }

  removeItem(id) {
    const itemToRemove = this.getItemById(id);
    if (Object.keys(itemToRemove).length === 0) {
      throw new Error("Id no encontrado");
    }
    this.data = this.data.filter(function (user) {
      return user.id !== id;
    });
    return {};
  }

  toString() {
    let text = "Usuarios (total " + this.data.length;
    this.data.forEach(
      (user) =>
        (text += "\n    - " + user.nick + " (" + user.id + ") - " + user.email)
    );
    return text;
  }

  getItemById(idUser) {
    return this.data.find((user) => user.id === idUser);
  }

  getUserIndexById(idUser) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    if (!isValidId(idUser)) {
      return [];
    }
    return this.data.findIndex((user) => user.id === idUser);
  }

  getUserByNickName(nickname) {
    if (!isArrayAndContainsInfo(this.data)) {
      return {};
    }
    return checkIsUndefined(this.data.find((user) => user.nick === nickname));
  }

  getNewId() {
    if (!this.data.length) {
      return 1;
    }
    if (this.data.length == 1) {
      return 2;
    }
    return (
      this.data.reduce((userBefore, userAfter) =>
        Math.max(userBefore.id, userAfter.id)
      ) + 1
    );
  }
}

function isArrayAndContainsInfo(array) {
  return Array.isArray(array) && array.length;
}

function isValidId(idUser) {
  return isNumber(idUser) && isPositive(idUser);
}

function isNumber(number) {
  return !Number.isNaN(number);
}

function isPositive(number) {
  return number >= 0;
}

function checkIsUndefined(data) {
  if (!data) {
    data = {};
  }
  return data;
}
