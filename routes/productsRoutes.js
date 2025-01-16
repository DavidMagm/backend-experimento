const express = require('express');
const router = express.Router()
const ProductService = require('../services/productsServies.js');
const service = new ProductService()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
});

router.post('/', async (req, res) => {
  const body = req.body
  const newProducts = await service.create(body)
  res.status(201).json(newProducts)
});

router.patch('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
  const {id} = req.params
  const newProducts = await service.delete(id)
  res.json(newProducts)
});

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const product = await service.findOne(id)
  res.json(product)

});

module.exports = router;
