 const mongoose = require('mongoose');
const event_model = new mongoose.Schema({
   description :{type: String, required: true, maxLength:200 },
   location : {type: String, required: true, maxLength: 100 },
   event_start : {type: Date ,required: true},
   event_end : {type : Date, required: true},
   event_organiser : { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' }
  });
  const eventModel = mongoose.model('eventModel',event_model);
  module.exports = eventModel;
 
 
 