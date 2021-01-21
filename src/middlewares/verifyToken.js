'use strict'
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const verifyToken = (req, res ,next) => {
    let token = req.headers["x-access-token"]

    if(!token){
        return res.status(403).send({message:"No Token Provided!"})
    }

    jwt.verify(token, SECRET , (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message: 'Unauthorized!'
            })
        }
        req.userName = decoded.userName
        //onsole.log(decoded)
        next()
    })
}

module.exports =  verifyToken