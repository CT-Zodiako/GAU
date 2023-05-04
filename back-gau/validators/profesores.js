const { check } = require("express-validator")
const validacionResultados = require('../utils/handleValidator')

const validacioncrearProfesor = [
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

const validacionTraerProfesor = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

module.exports = { validacioncrearProfesor, validacionTraerProfesor }