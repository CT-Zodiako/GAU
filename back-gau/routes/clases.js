const express = require('express')
const { validacionTraerClase, validacionCrearClase } = require('../validators/clases')
const { traerClases, traerClase, actualizarClase, crearClase, eliminarClase } = require('../controller/clases')
const autentificacionMiddleware = require('../middleware/sesion')
const router = express.Router()

router.get("/", autentificacionMiddleware, traerClases)

router.get("/:id", validacionTraerClase, traerClase)

router.put("/:id", validacionTraerClase, validacionCrearClase, actualizarClase)

router.post("/", validacionCrearClase, crearClase)

router.delete("/:id", validacionTraerClase, eliminarClase)

module.exports = router