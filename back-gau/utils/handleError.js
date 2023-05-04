const handleHttpError = (res, msg = "Algo Salio mal", code = 403) => {
    res.status(code)
    res.send({ error: msg })
}



module.exports = { handleHttpError }