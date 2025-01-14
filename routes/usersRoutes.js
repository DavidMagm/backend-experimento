const express = require('express');
const router = express.Router()

router.get('/:id', (req, res) => {
  res.json({
    name: 'David',
    nickName: 'david00',
    email: 'david@gmail.com'
  })
});

module.exports = router;
