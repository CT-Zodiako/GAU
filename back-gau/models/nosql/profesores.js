const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
  idProfesor: {
    type: String,
    required: true,
    unique: true
  },
  nombreCompleto: {
    type: String,
    required: true
  },
  numeroIdentificacion: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Profesor = mongoose.model('Profesor', profesorSchema);

module.exports = Profesor;
