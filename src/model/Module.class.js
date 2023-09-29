class Module {
  constructor(code, cliteral, vliteral, idCourse) {
    this.code = code;
    this.cliteral = cliteral;
    this.vliteral = vliteral;
    this.idCourse = idCourse;
  }

  toString() {
    return `El módulo ${this.vliteral} con código ${this.code}`;
  }
}
