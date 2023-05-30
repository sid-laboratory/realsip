 const mongoose = require('mongoose');
const event_model = new mongoose.Schema({
   description :{type: String, required: true, maxLength:200 },
   location : {type: String, required: true, maxLength: 100 },
   time : {type: String ,required: true},
   date : {type: String ,required: true},

  });
  const eventModel = mongoose.model('eventModel',event_model);
 
 
 