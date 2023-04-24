const { matchedData } = require('express-validator')
const { asistenciaModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')


const traerAsistencias = async (req, res) => {
    try {
        const data = await asistenciaModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerEstudiantes')
    }
}

const traerAsistencia = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await asistenciaModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerEstudiante')
    }
}

const crearAsistencia = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await asistenciaModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en crearEstudiante')
    }
}

const actualizarAsistencia = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await asistenciaModel.findOneAndUpdate(id,body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en actualizarEstudiante')
    }

}

const eliminarAsistencia = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await asistenciaModel.delete({_id:id})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en eliminarEstudiante')
    }
}

module.exports = { traerAsistencia, crearAsistencia, traerAsistencias, actualizarAsistencia, eliminarAsistencia }