const mongooseDelete = require('mongoose-delete')
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
  faltas: {
    type: Number,
    default: "0"
  }
},
  {
    timestamps: true,
    versionKey:false
  }
);

asistenciaSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
const Asistencia = mongoose.model('Asistencia', asistenciaSchema);

module.exports = Asistencia;
