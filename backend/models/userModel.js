const mongoose = require('mongoose');
const user_model = new mongoose.Schema({
    firstName: {type: String, required: true, maxLength: 50 },
    lastName: {type: String, required: true, maxLength: 50 },
    roll_number : {type: String, required: true, maxLength: 10 , minLength:10, unique: true, trim: true},
    email : {type: String, required: true, unique : true, trim : true },
    password : {type: String, required: true, minLength:8},
    role : {type: String, enum : ['user', 'admin'], default: 'user'}
  });

  const userModel = mongoose.model('userModel',user_model);
  module.exports = userModel;
 
 
 