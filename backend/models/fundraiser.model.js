const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fundraiserSchema = new Schema({
  fundraiserName: {type: String, required: false}, 
  date: {type: Date, required: true}, 
  location: {type: String, required: true},
  description: {type: String, required: true},
  poster: {type: String, required: true},
  signUp: {type: String, required: true},
}, {
  timestamps: true,
});

function validatePath(fieldType) {
  fundraiserSchema.path(fieldType).validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
  }, 'Invalid' + fieldType + 'URL.');
}

validatePath('signUp');

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);

module.exports = Fundraiser;