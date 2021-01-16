'use strict'

async function verifyEmtyFields(req,res,next){
    try {
        const { userName , completeName , email, password } = req.body
        if(!userName || !completeName || !email || !password){
            res.status(400).send({message:'Failed some fields are empty'})
            return;
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = verifyEmtyFields