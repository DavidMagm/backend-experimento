const express = require('express');

const productsRoutes = require('./productsRoutes.js');
const usersRoutes = require('./usersRoutes.js');
const categoriesRoutes = require('./categoriesRoutes.js');
const ordesRoutes = require('./ordesRoutes.js');

function routerApi(app) {
 const router = express.Router()
   app.use('/api/v1', router)
  router.use('/products', productsRoutes)
  router.use('/users', usersRoutes)
  router.use('/categories', categoriesRoutes)
  router.use('/ordes', ordesRoutes)
}

module.exports = routerApi;
