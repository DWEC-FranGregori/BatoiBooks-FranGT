export class User {
  constructor(id, email, nick) {
    this.id = id;
    this.email = email;
    this.nick = nick;
  }

  toString() {
    return `Soy ${this.nick} con id ${this.id} y mi correo es ${this.email}`;
  }
}
