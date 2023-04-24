const {check} = require("express-validator")
const validacionResultados = require('../utils/handleValidator')

const validacionCrearEstudiante = [
    check("idEstudiante")
    .exists()
    .notEmpty(),
    check("nombreCompleto")
    .exists()
    .notEmpty(),
    check("numeroIdentificacion")
    .exists()
    .notEmpty(),
    (req,res,next)=>{
        return validacionResultados(req,res,next)
    }
]

const validacionTraerEstudiante = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req,res,next)=>{
        return validacionResultados(req,res,next)
    }
]

module.exports = {validacionCrearEstudiante, validacionTraerEstudiante}