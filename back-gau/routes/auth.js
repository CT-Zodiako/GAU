const express = require('express')
const router = express.Router()
const { validacionLogin, validacionRegistrarProfesor } = require('../validators/auth')
const { registrarCtrl, loginCtrl } = require('../controller/auth')



router.post("/registrar", validacionRegistrarProfesor, registrarCtrl)
router.post("/login", validacionLogin, loginCtrl)

module.exports = router