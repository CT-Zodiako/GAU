const {validationResult} = require("express-validator")

const validacionResultados = (req,res,next) =>{
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.send({errors: err.array()})
    }
}

module.exports = validacionResultados