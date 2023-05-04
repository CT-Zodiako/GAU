const { check } = require("express-validator")
const validacionResultados = require('../utils/handleValidator')

const validacionCrearClase = [
    check("nombreClase")
        .exists()
        .notEmpty(),
    check("idProfesor")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

const validacionTraerClase = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

module.exports = { validacionCrearClase, validacionTraerClase }