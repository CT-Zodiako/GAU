const express = require('express')
const {validacionTraerClase,validacionCrearClase} = require('../validators/clases')
const {traerClases,traerClase, actualizarClase, crearClase, eliminarClase} = require('../controller/clases')
const router = express.Router()

//TODO http://localhost/profesores  GET,POST,DELETE,PUT

router.get("/",traerClases)

router.get("/:id",validacionTraerClase, traerClase)

router.put("/:id",validacionTraerClase,validacionCrearClase,actualizarClase)

router.post("/", validacionCrearClase, crearClase)

router.delete("/:id", validacionTraerClase, eliminarClase)

module.exports = router