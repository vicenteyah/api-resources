const express = require('express')
const { addProduct } = require('../controllers/product.controller')
const apiProduct = express.Router()


apiProduct.post('/product', addProduct)

module.exports = apiProduct