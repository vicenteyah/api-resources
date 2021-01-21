const User = require('../models/user')
const  { generateHash } = require('../utils/generateHash')
const { matchPassword } = require('../utils/matchPassword')
const { generateToken } = require('../utils/generateToken')

async function saveUser(req, res){
    let user = new User()

    user.completeName = req.body.completeName
    user.userName = req.body.userName
    user.email = req.body.email
    user.password = generateHash(req.body.password,10)
   
    try {
        await user.save((err, userStored)=>{
            if(err){
                res.status(500).send({message:'cannot save this user'})
            }else{
                res.status(201).send({message: userStored})
            }
        })

    } catch (error) {
        throw error
    }

}

async function signIn (req, res){
    const userData = {
        userName: req.body.userName,
        password: req.body.password
    }

    let matchUser
    try {
        matchUser = await User.findOne({userName: userData.userName}) 
    } catch (error) {
        throw error
    }

    if(!matchUser){
        res.status(200).send({message: 'User not found'})
        return;
    }
    
    const matchPass = await matchPassword(userData.password, matchUser.password)

    if(!matchPass){
        res.status(203).send({message: 'invalid password'})
        return;
    }

    userData.password = matchUser.password
    const token = generateToken(userData)
    res.status(200).send({message:'Access Success',token: token})
}

module.exports = {
    saveUser,
    signIn
}