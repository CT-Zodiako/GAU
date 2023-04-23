const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true
  },
  numeroIdentificacion: {
    type: String,
    required: true,
    unique: true
  },
  huellaDigital: {
    type: String,
    required: true
  },
  asistencias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asistencia'
    }
  ]
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
