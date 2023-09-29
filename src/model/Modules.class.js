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
  addItem() {}
  removeItem() {}
  getItemByCode() {}
  toString() {}
  getModuleByCode(arrayModules, code) {
    if (!isArrayAndContainsInfo(arrayModules)) {
      return {};
    }
    return checkIsUndefined(
      arrayModules.find((module) => module.code === code)
    );
  }

  getModuleIndexByCode(arrayModules, code) {
    if (!isArrayAndContainsInfo(arrayModules)) {
      return -1;
    }
    return arrayModules.findIndex((module) => module.code === code);
  }
}

function checkIsUndefined(data) {
  if (!data) {
    data = new Object();
  }
  return data;
}

function isArrayAndContainsInfo(array) {
  return Array.isArray(array) && array.length;
}

module.exports = Modules;
