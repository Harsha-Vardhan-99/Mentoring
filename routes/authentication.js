const express = require("express");
const router = express.Router();

const User = require("../models/usermodel");


const isAdmin = (req,res,next)=>{

};


router.post("/authenticate",(req,res)=>{
    console.log(req.body);
    User.find(req.body).then((user)=>{
        if(user===[]) console.log("invalid credentials");
        else{
            console.log(user);
        }
    })
});


module.exports = router;
