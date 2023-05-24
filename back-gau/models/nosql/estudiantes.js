const mongooseDelete = require('mongoose-delete')
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
  faltas: {
    type: Number,
    default: 0
  }
},
  {
    timestamps: true,
    versionKey:false
  }
);
estudianteSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
