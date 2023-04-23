const mongoose = require("mongoose");

const dbConexion = async () =>{
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`***CONEXION CORRECTA***`)
    } catch (error) {
        console.log(`***CONEXION FALLIDA***`);
        console.log(error);
    }
}

module.exports = dbConexion;
