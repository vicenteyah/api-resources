const bcrypt = require('bcrypt')

module.exports = {
    matchPassword: async(password, hash) => {
        return bcrypt.compare(password,hash)
    }
}