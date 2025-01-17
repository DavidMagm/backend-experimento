const express = require('express');
const router = express.Router()
const ProductService = require('../services/productsServies.js');
const validateHandler = require('../middleware/valitadorHandler.js');
const { getProductSchema, updateProductsSchema, createProductsSchema } = require('../schema/produtsShema.js');
const service = new ProductService()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
});

router.post('/',
  validateHandler(createProductsSchema, 'body'),
  async (req, res) => {
  const body = req.body
  const newProducts = await service.create(body)
  res.status(201).json(newProducts)
});

router.patch('/:id',
  validateHandler(updateProductsSchema, 'params'),
  validateHandler(updateProductsSchema, 'body'),
  async (req, res) => {
  try {
    const {id} = req.params
    const body = req.body
    const newProducts = await service.update(id, body)
    res.json(newProducts)
  } catch(error) {
    res.status(404).json({
      message: error.message
    })
  }
});

router.delete('/:id', async (req, res,) => {
  try {
    const {id} = req.params
    const newProducts = await service.delete(id)
    res.json(newProducts)
  } catch(error) {
    console.log(error)
  }

});

router.get('/:id',
  validateHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch(error) {
    next(error)
  }

});

module.exports = router;
