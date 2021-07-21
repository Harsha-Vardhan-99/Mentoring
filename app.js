const path = require('path');


const express = require('express');
const mongoose = require("mongoose");
const Appointment = require("./models/formmodel");
//const mongoConnect = require("./util/db")

const app = express();
var cors = require('cors');

app.use(cors());

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const authenticationRoutes = require('./routes/authentication');

app.use(express.json());

app.use(express.static("public"));

app.use('/admin', adminRoutes);
app.use("/login",authenticationRoutes);


app.use('/appointments',(req, res, next) => {

   Appointment.find().then(appointments=>{
   res.render("appointments",{data: appointments});
   });
   
});

app.use('/',(req, res, next) => {
   res.sendFile(__dirname+"\\views\\login.html");
});

// mongoConnect.connecttoserver(function(err,client){
//    if(err) console.log(err);
//    app.listen(3000);
// });

mongoose.connect("mongodb+srv://harshavardhan:zZymg6LyH8KLgKEw@cluster0.outsu.gcp.mongodb.net/mentoring?retryWrites=true&w=majority")
.then(result=>{
   app.listen(3000)
})
.catch(err=>{
   console.log(err)
});
   
