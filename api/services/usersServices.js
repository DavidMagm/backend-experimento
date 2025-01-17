const { faker } = require('@faker-js/faker');

class UsersServices {
  constructor() {
    this.users = [];
    this.generate()
  }

  generate() {
    const limit = 30;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.number.int(),
        name: faker.person.fullName(),
        email: faker.finance.accountName()
      });
    }
  }

  find() {
    return this.users
  }
}

module.exports = UsersServices;
