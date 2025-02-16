const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 30;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.number.int(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.number.int(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find() {
    return this.products
  }

  async findOne(id) {

    const product = this.products.find(item => item.id === id)
    if(!product) {
      throw boom.notFound('product not found')
    }
    return product
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id == id)
    if(index == -1) {
      throw boom.notFound('product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return product
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id == id)
    if(index == -1) {
      throw boom.notFound('product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductService;
