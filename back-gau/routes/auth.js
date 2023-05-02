const express = require('express')
const router = express.Router()
const { validacionLogin, validacionRegistrarProfesor } = require('../validators/auth')
const { firmarToken } = require('../utils/handleJwt')
const { profesoresModel } = require('../models')
const { encriptar } = require('../utils/handlePassword')
const { matchedData } = require('express-validator')



router.post("/registrar", validacionRegistrarProfesor, async (req, res) => {
    req = matchedData(req)
    const contrasennaHashd = await encriptar(req.password)
    const body = { ...req, contrasennaHashd }
    const dataProfesor = await profesoresModel.create(body)
    dataProfesor.set('password', undefined, { strict: false })
    const data = {
        token: await firmarToken(dataProfesor),
        user: dataProfesor
    }
    res.send({ data: data })
})

module.exports = router