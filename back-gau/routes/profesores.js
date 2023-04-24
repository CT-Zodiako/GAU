const express = require('express')
const {validacioncrearProfesor,validacionTraerProfesor} = require('../validators/profesores')
const {traerProfesores,traerProfesor, crearProfesor, actualizarProfesor, eliminarProfesor} = require('../controller/profesores')
const router = express.Router()

//TODO http://localhost/profesores  GET,POST,DELETE,PUT

router.get("/",traerProfesores)

router.get("/:id",validacionTraerProfesor, traerProfesor)

router.put("/:id",validacionTraerProfesor, validacioncrearProfesor, actualizarProfesor)

router.post("/", validacioncrearProfesor, crearProfesor)

router.delete("/:id",validacionTraerProfesor, eliminarProfesor)

module.exports = router