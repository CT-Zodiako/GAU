const { matchedData } = require('express-validator')
const { clasesModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')


const traerClases = async (req, res) => {
    try {
        const profesor = req.profesor
        const data = await clasesModel.find({})
        res.send({ data, profesor })
    } catch (error) {
        handleHttpError(res, 'Error en traerEstudiantes')
    }
}

const traerClase = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await clasesModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerEstudiante')
    }
}

const crearClase = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await clasesModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en crearEstudiante')
    }
}

const actualizarClase = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await clasesModel.findOneAndUpdate(id, body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en actualizarEstudiante')
    }

}

const eliminarClase = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await clasesModel.delete({ _id: id })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en eliminarEstudiante')
    }
}

module.exports = { traerClase, traerClases, crearClase, actualizarClase, eliminarClase }