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
  addItem(user) {
    user.id = getNewId();
    this.data.push(user);
  }
  removeItem(id) {
    const userToRemove = this.getItemById(id);
    if(userToRemove == {}){
      throw new IdNotFound();
    }
    this.data= this.data.filter(function(user){
      return user.id !== id;
    });
  }

  toString() {}

  getItemById(idUser) {
    if (!isArrayAndContainsInfo(this.data)) {
      return {};
    }

    if (!isValidId(idUser)) {
      return {};
    }
    return checkIsUndefined(this.data.find((user) => user.id === idUser));
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
      return new Object();
    }
    return checkIsUndefined(this.data.find((user) => user.nick === nickname));
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

function getNewId(){
  if (this.data.length < 1) {
    return 1;
  }
  return ++this.data.reduce((userBefore, userAfter) => Math.max(userBefore.id, userAfter.id), -Infinity); 
}

module.exports = Users;
