const express = require('express')
const { addProduct ,getProducts ,updateProduct ,getProduct ,deleteProduct } = require('../controllers/product.controller')
const verifyToken = require('../middlewares/verifyToken')
const apiProduct = express.Router()


apiProduct.post('/product',verifyToken, addProduct)
apiProduct.get('/products',getProducts)
apiProduct.get('/product/:productId',getProduct)
apiProduct.put('/product/:productId', updateProduct )
apiProduct.delete('/product/:productId', deleteProduct)

module.exports = apiProduct