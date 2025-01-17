const express = require('express');
const router = express.Router()
const OrdesServices = require('../services/ordesServices');
const service = new OrdesServices()


router.get('/', (req, res) => {
  const ordes = service.find()
  res.json(ordes)
});

module.exports = router;
