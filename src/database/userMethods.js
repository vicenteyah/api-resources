const User = require('../models/user')

const getUserOnDB = async(filters, next)=>{
    try {
        const userList = await User.find(filters,{password:false} , (err,usrlist)=> {
            if(err) throw err
            return usrlist
        })
        return userList
    } catch (error) {
        console.log(error)
        next(error)
    }
}

/*const createUser = async (params , validateSignup)=>{
    try {
        const user = new User(params)
        await user.save(validateSignup)
        
    } catch(e) {
        console.log(e)
    }
}*/


module.exports = {
    getUserOnDB
}