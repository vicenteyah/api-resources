const mongoose = require('mongoose')
const { appConfig } = require('../config')
const Schema = mongoose.Schema

const productSchema = Schema({
    name:String,
    size:Number,
    unitaryPrice: Number,
    imgUrl:String,
    description: String
},{
    timestamps: true
})


module.exports = mongoose.model('Products',productSchema)