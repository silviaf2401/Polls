var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollSchema = new mongoose.Schema({
  name: {
    type: String
  },
  question: {
    type: String,
    required: [true, "Question field cannot be blank"],
    minlength: [8, "Question must be at least 8 characters long"],
  },
  opt1: {
    type: String,
    required: [true, "Option 1 field cannot be blank"],
    minlength: [3, "Option 1 must be at least 3 characters long"]
  },
  opt2: {
    type: String,
    required: [true, "Option 2 field cannot be blank"],
    minlength: [3, "Option 2 must be at least 3 characters long"]
  },
  opt3: {
    type: String,
    required: [true, "Option 3 field cannot be blank"],
    minlength: [3, "Option 3 must be at least 3 characters long"]
  },
  opt4: {
    type: String,
    required: [true, "Option 4 field cannot be blank"],
    minlength: [3, "Option 4 must be at least 3 characters long"]
  },
  opt1vote: {
    type: Number,
  },
  opt2vote: {
    type: Number,
  },
  opt3vote: {
    type: Number,
  },
  opt4vote: {
    type: Number,
  }
}, {timestamps:true});

var Poll = mongoose.model('Poll', PollSchema);