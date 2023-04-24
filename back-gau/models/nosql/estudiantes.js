const mongooseDelete = require('mongoose-delete')
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  idEstudiante: {
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
  huellaDigital: {
    type: String,
  },
  asistencias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asistencia'
    }
  ]
});
estudianteSchema.plugin(mongooseDelete, {overrideMethods: 'all'})
const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
