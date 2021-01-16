const bcrypt = require('bcrypt')

module.exports = {
    generateHash: (password,saltRounds) => {
        const salt = bcrypt.genSaltSync(saltRounds)
        return bcrypt.hashSync(password, salt)
    }
}