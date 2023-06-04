 const mongoose = require('mongoose');
const event_model = new mongoose.Schema({
   Title : {type: String, required: true, maxLength: 100 },
   description :{type: String, required: true, maxLength:200 },
   location : {type: String, required: true, maxLength: 100 },
   date: {type: Date, required: true},
   Organizer: {type: String, required: true, maxLength: 100 },
   selected: {type: Boolean, required: true},
   selectedHour :{type : choice, required: true},
   selectedMinute :{type : choice, required: true},
   Location : {type: String, required: true, maxLength: 100 },
   event_organiser : { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' }
  });
  const eventModel = mongoose.model('eventModel',event_model);
  module.exports = eventModel;
 
 
 