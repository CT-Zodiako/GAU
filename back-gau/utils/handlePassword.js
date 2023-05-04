const bcrypjs = require('bcryptjs')

const encriptar = async (contrasennaPlana) => {
    const hash = await bcrypjs.hash(contrasennaPlana, 10)
    return hash
}

const comparar = async (contrasennaPlana, hashContrasenna) => {
    return await bcrypjs.compare(contrasennaPlana, hashContrasenna)
}

module.exports = { encriptar, comparar }