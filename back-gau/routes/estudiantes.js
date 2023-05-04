const express = require('express')
const {validacionCrearEstudiante,validacionTraerEstudiante} = require('../validators/estudiantes')
const {traerEstudiantes,traerEstudiante, crearEstudiante, actualizarEstudiante, eliminarEstudiante} = require('../controller/estudiantes')
const router = express.Router()

//TODO http://localhost/profesores  GET,POST,DELETE,PUT

router.get("/",traerEstudiantes)

router.get("/:id",validacionTraerEstudiante, traerEstudiante)

router.put("/:id",validacionTraerEstudiante,validacionCrearEstudiante ,actualizarEstudiante)

router.post("/", validacionCrearEstudiante, crearEstudiante)

router.delete("/:id",validacionTraerEstudiante, eliminarEstudiante)

module.exports = router