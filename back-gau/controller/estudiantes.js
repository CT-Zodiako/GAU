const { matchedData } = require('express-validator')
const { estudiantesModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')


const traerEstudiantes = async (req, res) => {
    try {
        const data = await estudiantesModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerEstudiantes')
    }
}

const traerEstudiante = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await estudiantesModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerEstudiante')
    }
}

const crearEstudiante = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await estudiantesModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en crearEstudiante')
    }
}

const actualizarEstudiante = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await estudiantesModel.findOneAndUpdate(id,body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en actualizarEstudiante')
    }

}

const eliminarEstudiante = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await estudiantesModel.delete({_id:id})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en eliminarEstudiante')
    }
}

module.exports = { traerEstudiantes, traerEstudiante, crearEstudiante, actualizarEstudiante, eliminarEstudiante }