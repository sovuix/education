class Company {
  constructor (name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getMail() {
    return this.email;
  }
}

const iridium = new Company('iridium', 'iris@mail.ru');

