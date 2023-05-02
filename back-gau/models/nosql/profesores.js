const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete')

const profesorSchema = new mongoose.Schema({
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
    required: true,
    select: false
  }
},
  {
    timestamps: true,
    versionKey: false
  }
);



profesorSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
const Profesor = mongoose.model('Profesor', profesorSchema);

module.exports = Profesor;
