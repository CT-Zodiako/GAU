const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  idEstudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estudiante',
    required: true
  },
  idClase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clase',
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  horaEntrada: {
    type: Date,
    required: true
  },
});

const Asistencia = mongoose.model('Asistencia', asistenciaSchema);

module.exports = Asistencia;
