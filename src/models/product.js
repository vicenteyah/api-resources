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

productSchema.methods.setImgUrl = function setImgUrl(filename){
    const { host ,port } = appConfig
    this.imgUrl = `${host}:${port}/${filename}`
}

module.exports = mongoose.model('Products',productSchema)