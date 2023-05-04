const express = require('express')
const {validacionCrearAsistencia,validacionTraerAsistencia} = require('../validators/asistencia')
const {traerAsistencias,traerAsistencia, actualizarAsistencia, crearAsistencia, eliminarAsistencia} = require('../controller/asistencia')
const router = express.Router()


router.get("/",traerAsistencias)

router.get("/:id",validacionTraerAsistencia, traerAsistencia)

router.put("/:id",validacionTraerAsistencia,validacionCrearAsistencia,actualizarAsistencia)

router.post("/", validacionCrearAsistencia, crearAsistencia)

router.delete("/:id", validacionTraerAsistencia, eliminarAsistencia)

module.exports = router