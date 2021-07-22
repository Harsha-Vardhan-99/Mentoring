const path = require('path');


const express = require('express');
const session = require('express-session');
const mongodbStore = require('connect-mongodb-session')(session);
const mongoose = require("mongoose");
const Appointment = require("./models/formmodel");
//const mongoConnect = require("./util/db")

const app = express();
var cors = require('cors');

app.use(cors());


const store  = new mongodbStore({
   uri:"mongodb+srv://harshavardhan:zZymg6LyH8KLgKEw@cluster0.outsu.gcp.mongodb.net/mentoring?retryWrites=true&w=majority",
   collection:'sessions'
});

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const authenticationRoutes = require('./routes/authentication');
const registerRoutes = require('./routes/register');

app.use(session({
   secret:"sample key",
   resave:false,
   saveUninitialized:false,
   store:store,
   cookie:{
      maxAge:60000
   }
}));

app.use(express.json());

app.use(express.static("public"));

app.use('/admin', adminRoutes);
app.use("/login",authenticationRoutes);
app.use("/register",registerRoutes);

app.use("/add-appointment",(req,res)=>{
   if(req.session.isAuth ) res.sendFile(__dirname+"\\views\\index.html");
   else{
      res.redirect('/');
   }
});


app.use('/appointments',(req, res, next) => {
   if(req.session.isAuth ){
      Appointment.find().then(appointments=>{
         res.render("appointments",{data: appointments});
         });
   }
   else{
      res.redirect('/');
   }

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
   
