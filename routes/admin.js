const path = require('path');

const express = require('express');
//const rootDir = require('../util/path');
const Appointment = require("../models/formmodel");

const router = express.Router();
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
//const mongoUtil  = require("../util/db");



// /admin/add-appointment => GET
router.get('/add-appointment/:id', async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  //const data = await mongoUtil.getdb().collection("appointmentform").find();
  const data = await Appointment.findById(id);
  res.send(data);
});

// /admin/add-appointment => POST
router.post('/add-appointment',async (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const probdesc = req.body.probdesc;
  const dt = req.body.dateandtime;
  console.log(req.body);
  const appointment = new Appointment({name:name,phone:phone,gender:gender,probdesc:probdesc,dateandtime:dt});
  const data = await appointment.save();
  console.log(data.id);
  res.send(data.id);
  //res.redirect('/appointments');
  

  //mongoUtil.getdb().collection("appointmentform").insertOne(req.body);
  
});

router.post('/update-appointment/:id',(req,res)=>{
  const id = req.params.id;
  const updatedname = req.body.name;
  const updatedphone = req.body.phone;
  const updatedgender = req.body.gender;
  const updatedprobdesc = req.body.probdesc;
  const updateddt = req.body.dateandtime;
  Appointment.findById(id).then((appointment)=>{
    appointment.name = updatedname;
    appointment.phone = updatedphone;
    appointment.gender = updatedgender;
    appointment.probdesc = updatedprobdesc;
    appointment.dateandtime = updateddt;
    appointment.save();
  });

});

module.exports = router;