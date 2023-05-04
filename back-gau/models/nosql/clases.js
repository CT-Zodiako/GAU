const mongooseDelete = require('mongoose-delete')
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
},
  {
    timestamps: true,
    versionKey:false
  }
);

claseSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
const Clase = mongoose.model('Clase', claseSchema);

module.exports = Clase;
