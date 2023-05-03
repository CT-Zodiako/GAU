const { handleHttpError } = require('../utils/handleError')
const { verificarToken } = require('../utils/handleJwt')
const { profesoresModel } = require('../models')

const autentificacionMiddleware = async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            handleHttpError(res, 'no token en headers', 401)
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verificarToken(token)
        if (!dataToken._id) {
            handleHttpError(res, 'error id token', 401)
        }
        next()
    } catch (error) {
        console.log(error)
        handleHttpError(res, 'No tiene sesion', 401)
    }
}

module.exports = autentificacionMiddleware