const mongoose = require('mongoose');

const claseSchema = new mongoose.Schema({
  nombreClase: {
    type: String,
    required: true
  },
  idProfesor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profesor',
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
});

const Clase = mongoose.model('Clase', claseSchema);

module.exports = Clase;
