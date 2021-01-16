const express = require('express')
const { saveUser, signIn } = require('../controllers/auth.controller')
const verifySignUp = require('../middlewares/verifySignUp')
const verifyEmtyFields = require('../middlewares/verifyEmptyFields')
const authApi = express.Router()

authApi.post('/signup',verifyEmtyFields,verifySignUp, saveUser)
authApi.post('/login', signIn)

module.exports = authApi