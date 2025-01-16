const express = require('express');
const router = express.Router()
const UsersServices = require('../services/usersServices')
const service = new UsersServices()

router.get('/:id', (req, res) => {
  const users = service.find()
  res.json(users)
});

module.exports = router;
