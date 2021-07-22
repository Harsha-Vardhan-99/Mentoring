const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require("../models/usermodel");


const isAdmin = (req,res,next)=>{

};


router.post("/authenticate",(req,res)=>{
    console.log(req.body);
    User.findOne({"email":req.body.email}).then((user)=>{
        if(user===null){
            res.redirect('/');
        }
        else{
            bcrypt.compare(req.body.pwd,user.pwd).then(result=>{
                if(result){
                req.session.isAuth = true;
                console.log(req.session);
                console.log(req.session.id);
                res.send("login");
                }
                else{
                    console.log("invalid password");
                }
            })
        }

    })
});


module.exports = router;
