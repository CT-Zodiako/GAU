const customHeader = (req,res,next) =>{
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === '123'){
            next()
        }else{
            res.status(403)
        res.send({error: "Api key incorrecta"})
        }
    } catch (error) {
        res.status(403)
        res.send({error: "Errore en el custom header"})
    }
}

module.exports = customHeader