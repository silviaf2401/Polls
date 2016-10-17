var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be blank"],
    minlength: [2, "Name must be at least 2 characters long"]
  },
  id: {
    type: String
  }
}, {timestamps:true});

var User = mongoose.model('User', UserSchema);