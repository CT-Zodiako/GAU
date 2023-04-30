const { check } = require("express-validator")
const validacionResultados = require('../utils/handleValidator')

const validacionCrearAsistencia = [
    check("idEstudiante")
        .exists()
        .notEmpty()
        .isMongoId(),
    check("idClase")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

const validacionTraerAsistencia = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validacionResultados(req, res, next)
    }
]

module.exports = { validacionCrearAsistencia, validacionTraerAsistencia }