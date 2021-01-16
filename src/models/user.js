'use strict'
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = Schema({
    completeName: {type: String, required: true},
    userName : {type: String , required: true},
    email: {type: String , required:true},
    password: {type:String , required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('user',User)