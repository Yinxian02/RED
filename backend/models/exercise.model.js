const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: {type: String, required: true },
  creator: {type: String, required: true},
  age: {type: String, required: true},
  number: {type: Number, required: true },
  durationHours: {type: Number, required: true },
  durationMins: {type: Number, required: true },
  materials: [{type: String, required: true }],
  instructions: [{type: String, required: true}], 
  youtube: {type: String, required: true},
  picture: {type: String, required: true}
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;