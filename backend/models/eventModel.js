 const mongoose = require('mongoose');
const event_model = new mongoose.Schema({
   title : {type: String, required: true, maxLength: 100 },
   description :{type: String, required: true, maxLength:200 },
   location : {type: String, required: true, maxLength: 100 },
   date: {type: String, required: true},
   event_organiser: {type: String, required: true, maxLength: 100 },
   event : {type: String, required: true},
   event_time : {type: String, required: true, maxLength: 5 },
   event_link : {type: String, required: true }
  });
  const eventModel = mongoose.model('eventModel',event_model);
  module.exports = eventModel;
 
 
 