
const { firmarToken } = require('../utils/handleJwt')
const { profesoresModel } = require('../models')
const { encriptar, comparar } = require('../utils/handlePassword')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

const registrarCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encriptar(req.password)
        const body = { ...req, password }
        const dataProfesor = await profesoresModel.create(body)
        dataProfesor.set('password', undefined, { strict: false })
        const data = {
            token: await firmarToken(dataProfesor),
            user: dataProfesor
        }
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "Error registrarProfesor")
    }

}

const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const profesor = await profesoresModel.findOne({ numeroIdentificacion: req.numeroIdentificacion }).select("password")
        if (!profesor) {
            handleHttpError(res, "Profesor no existe", 404)
        }
        const hashPassword = profesor.get('password')
        const verificar = await comparar(req.password, hashPassword)

        if (!verificar) {
            handleHttpError(res, "Error en contraseña", 401)
        }
        profesor.set('password', undefined, { strict: false })
        const data = {
            token: firmarToken(profesor),
            profesor
        }

        res.send({ data })
    } catch (error) {
        handleHttpError(res, "Error en controladorLogin", 404)
    }
}

module.exports = { registrarCtrl, loginCtrl }