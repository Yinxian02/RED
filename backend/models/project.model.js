const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: {type: String, required: false}, 
  year: {type: Number, required: true}, 
  location: {type: String, required: true},
  description: {type: String, required: true},
  picture: {type: String, required: true},
  youtube: {type: String}, 
  report: {type: String} 
}, {
  timestamps: true,
});

function validatePath(fieldType) {
  projectSchema.path(fieldType).validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
  }, 'Invalid' + fieldType + 'URL.');
}

// validatePath('picture');
validatePath('youtube');
validatePath('report');


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;