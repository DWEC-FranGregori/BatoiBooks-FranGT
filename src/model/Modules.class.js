import Module from "./module.class";

import ModuleRepository from "../repositories/modules.repositories";

export default class Modules {
  constructor() {
    this.data = [];
    this.moduleRepository = new ModuleRepository();
  }

  async populateData() {
    const modulesFromRepository = await this.moduleRepository.getAllModules();
    this.data = modulesFromRepository.map(
      (module) =>
        new Module(
          module.code,
          module.cliteral,
          module.vliteral,
          module.idCourse
        )
    );
  }

  async getModuleByCode(code) {
    await this.moduleRepository.getModuleByCode(code);
    return this.data.find((item) => item.code === code) || {};
  }

  async addItem(payload) {
    await this.moduleRepository.addModule(payload);
    const newModule = new Module(
      payload.code,
      payload.cliteral,
      payload.vliteral,
      payload.idCourse
    );
    this.data.push(newModule);
    return newModule;
  }

  async removeItem(code) {
    await this.moduleRepository.removeModule(code);
    const index = this.data.findIndex((item) => item.code === code);
    if (index === -1) {
      throw "No existe un módulo con código " + code;
    }
    this.data.splice(index, 1);
    return {};
  }

  toString() {
    let modulesToString = `Módulos (total ${this.data.length})`;
    this.data.forEach(
      (item) =>
        (modulesToString += `
    - ${item}`)
    );
    return modulesToString;
  }
}
