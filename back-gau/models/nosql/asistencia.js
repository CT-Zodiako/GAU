const mongooseDelete = require('mongoose-delete')
const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  idAsistencia: {
    type: String,
    required: true,
    unique: true
  },
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
  },
  horaEntrada: {
    type: Date,
  },
});

asistenciaSchema.plugin(mongooseDelete, {overrideMethods: 'all'})
const Asistencia = mongoose.model('Asistencia', asistenciaSchema);

module.exports = Asistencia;
