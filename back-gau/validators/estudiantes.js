const { check } = require("express-validator")
const validacionResultados = require('../utils/handleValidator')

const validacionCrearEstudiante = [
    check("nombreCompleto")
        .exists()
        .notEmpty(),
    check("numeroIdentificacion")
        .exists()
        .notEmpty(),
    check("faltas")
        .exists(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

const validacionTraerEstudiante = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

module.exports = { validacionCrearEstudiante, validacionTraerEstudiante }