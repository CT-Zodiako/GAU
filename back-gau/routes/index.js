const express = require('express')
const router = express.Router()
const fs = require('fs')

const PATH_ROUTES = __dirname;

const removerExtencion = (nombreArchivo) =>{
    return nombreArchivo.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((archivo)=>{
    const nombre = removerExtencion(archivo)
    if(nombre !== 'index'){
        router.use(`/${nombre}`,require(`./${archivo}`))
    }
})

module.exports = router