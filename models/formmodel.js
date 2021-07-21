
var mongoose=require('mongoose');
  
var appointmentSchema = new mongoose.Schema({
    name:String,
    phone:String,
    gender:String,
    probdesc:String,
    dateandtime:Date
});
  
module.exports = mongoose.model(
    'Appointment', appointmentSchema,"appointmentform");