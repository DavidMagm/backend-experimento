const { faker } = require('@faker-js/faker');

class OrdesServices {
  constructor() {
    this.ordes = [];
    this.generate();
  }

  generate() {
    const limit = 30;
    for (let i = 0; i < limit; i++) {
      this.ordes.push({
        id: faker.number.int(),
        products: [faker.commerce.product(), faker.commerce.product()]
      });
    }
  }

  find() {
    return this.ordes
  }
}

module.exports = OrdesServices;
