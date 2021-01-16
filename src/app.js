const express = require('express')
require('dotenv').config()
const apiProduct = require('./routes/product.route')
const authApi = require('./routes/auth.route')
const bodyParser = require('body-parser')
const morgan = require('mongoose-morgan')
const app = express()




app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(morgan({
    connectionString: 'mongodb://localhost:27017/store'
}))

/*app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, PUT, DELETE');
    next();
})*/

app.use( express.static(__dirname+'/../storage/imgs'))
app.use('/v2',apiProduct)
app.use('/v2',authApi)

module.exports = app