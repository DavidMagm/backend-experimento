const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      order: 1,
      products: ['product 1', 'product 2']
    },
    {
      order: 2,
      products: ['product 1', 'product 2']
    }
  ])
});

module.exports = router;
