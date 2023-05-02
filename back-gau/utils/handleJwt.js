const jsonwebtoken = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const firmarToken = async (profesor) => {
    try {
        const firmar = jsonwebtoken.sign(
            {
                _id: profesor._id
            },
            JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
        return firmar
    } catch (error) {
        console.log('error token')
    }

}

const verificarToken = async (tokenJwt) => {
    try {
        return jsonwebtoken.verify(tokenJwt, JTW_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = { firmarToken, verificarToken }