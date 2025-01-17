const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().alphanum().min(5).max(15)
const price = Joi.number().integer().min(10)
const image = Joi.string().uri();

const createProductsSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductsSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {createProductsSchema, updateProductsSchema, getProductSchema}
