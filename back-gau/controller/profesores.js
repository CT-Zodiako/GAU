const { matchedData } = require('express-validator')
const { profesoresModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const traerProfesores = async (req, res) => {
    try {
        const data = await profesoresModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerProfesores')
    }
}

const traerProfesor = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await profesoresModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en traerProfesor')
    }
}

const crearProfesor = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await profesoresModel.create(body)
        res.send({ data })
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'Error en crearProfesores')
    }
}

const actualizarProfesor = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await profesoresModel.findOneAndUpdate(id,body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en actualizarProfesor')
    }

}

const eliminarProfesor = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await profesoresModel.delete({_id:id})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error en eleminarProfesor')
    }
}

module.exports = { traerProfesores, traerProfesor, crearProfesor, actualizarProfesor, eliminarProfesor }