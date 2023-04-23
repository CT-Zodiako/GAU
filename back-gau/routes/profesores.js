const express = require('express')
const customHeader = require('../middleware/customHeader')
const {validacioncrearProfesor,validacionTraerProfesor} = require('../validators/profesores')
const {traerProfesores,traerProfesor, crearProfesor } = require('../controller/profesores')
const router = express.Router()

//TODO http://localhost/profesores  GET,POST,DELETE,PUT

router.get("/",traerProfesores)

router.get("/:id",validacionTraerProfesor, traerProfesor)

router.post("/", validacioncrearProfesor, crearProfesor)

module.exports = router