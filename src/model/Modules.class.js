const Module = require("../model/Module.class");

class Modules {
  constructor() {
    this.data = [];
  }
  populateData(arrayModules) {
    arrayModules.forEach((module) => {
      this.data.push(
        new Module(
          module.code,
          module.cliteral,
          module.vliteral,
          module.idCourse
        )
      );
    });
  }

  addItem(module) {
    this.data.push(module);
  }

  removeItem(code) {
    const itemToRemove = this.getModuleByCode(code);
    if (itemToRemove == {}) {
      throw new IdNotFound();
    }
    this.data = this.data.filter(function (book) {
      return book.code !== code;
    });
  }

  toString() {}
  getModuleByCode(code) {
    if (!isArrayAndContainsInfo(this.data)) {
      return {};
    }
    return checkIsUndefined(this.data.find((module) => module.code === code));
  }

  getModuleIndexByCode(code) {
    if (!isArrayAndContainsInfo(this.data)) {
      return -1;
    }
    return this.data.findIndex((module) => module.code === code);
  }
}

function checkIsUndefined(data) {
  if (!data) {
    data = {};
  }
  return data;
}

function isArrayAndContainsInfo(array) {
  return Array.isArray(array) && array.length;
}

module.exports = Modules;
