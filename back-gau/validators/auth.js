const { check } = require("express-validator")
const validacionResultados = require('../utils/handleValidator')

const validacionRegistrarProfesor = [
    check("nombreCompleto")
        .exists()
        .notEmpty(),
    check("numeroIdentificacion")
        .exists()
        .notEmpty(),
    check("password")
        .exists()
        .notEmpty(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

const validacionLogin = [
    check("numeroIdentificacion")
        .exists()
        .notEmpty(),
    check("password")
        .exists()
        .notEmpty(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]


module.exports = { validacionLogin,validacionRegistrarProfesor }