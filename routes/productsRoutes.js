const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router()

router.get('/', (req, res) => {
  const {size} = req.query
  const products = []
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    });
  }
  res.json(products)
});

router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
});

router.patch('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'updated name',
    data: body,
    id,
  })
});

router.delete('/:id', (req, res) => {
  const {id} = req.params
  res.json({
    message: 'delete',
    id,
  })
});

router.get('/:id', (req, res) => {
  const {id} = req.params
  if(id == '999') {
    res.status(404).json({
      message: 'not found'
    })
  } else {
    res.status(200).json({
      id,
      name: 'product 2',
      price: 2000
    })
  }

});

module.exports = router;
