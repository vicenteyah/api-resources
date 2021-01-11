const express = require('express')
require('dotenv').config()
const apiProduct = require('./routes/product.route')
const bodyParser = require('body-parser')
const morgan = require('mongoose-morgan')
const app = express()




app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan({
    connectionString: 'mongodb://localhost:27017/store'
}))

app.use('/v2',apiProduct)

module.exports = app