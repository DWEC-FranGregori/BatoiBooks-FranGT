import Module from "./Module.class";

export default class Modules {
  constructor() {
    this.data = [];
  }

  populateData(arrayModules) {
    arrayModules.forEach((module) => {
      this.addItem(module);
    });
  }

  addItem(module) {
    this.data.push(
      new Module(module.code, module.cliteral, module.vliteral, module.idCourse)
    );
    return new Module(
      module.code,
      module.cliteral,
      module.vliteral,
      module.idCourse
    );
  }

  removeItem(code) {
    const itemToRemove = this.getModuleByCode(code);
    if (Object.keys(itemToRemove).length === 0) {
      throw new Error("Id no encontrado");
    }
    this.data = this.data.filter(function (module) {
      return module.code !== code;
    });
    return {};
  }

  toString() {
    let text = `Módulos (total ${this.data.length})`;
    this.data.forEach((modulo) => text.concat(`\n    - ${modulo.toString}`));

    return text;
  }
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
