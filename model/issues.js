var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var issueSchema = new Schema({
  regno: {type:String},
  type: {type:String,required:true},
	date: {type:Date,required:true},
	description: {type:String,required:true}
});
issueSchema.plugin(uniqueValidator);
var issueModel = mongoose.model('issue',issueSchema);
module.exports = issueModel;
