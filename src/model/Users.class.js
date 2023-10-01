const User = require("../model/User.class");

class Users extends UsersInterface {
  constructor() {
    this.data = [];
  }
  populateData(arrayUsers) {
    arrayUsers.forEach((user) => {
      this.data.push(new User(user.id, user.email, user.nickname));
    });
  }
  addItem() {}
  removeItem() {}
  getItemByCode() {}
  toString() {}

  getUserById(arrayUsers, idUser) {
    if (!isArrayAndContainsInfo(arrayUsers)) {
      return {};
    }

    if (!isValidId(idUser)) {
      return {};
    }
    return checkIsUndefined(arrayUsers.find((user) => user.id === idUser));
  }

  getUserIndexById(arrayUsers, idUser) {
    if (!isArrayAndContainsInfo(arrayUsers)) {
      return [];
    }

    if (!isValidId(idUser)) {
      return [];
    }
    return arrayUsers.findIndex((user) => user.id === idUser);
  }

  getUserByNickName(arrayUsers, nickname) {
    if (!isArrayAndContainsInfo(arrayUsers)) {
      return new Object();
    }
    return checkIsUndefined(arrayUsers.find((user) => user.nick === nickname));
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

module.exports = Users;
