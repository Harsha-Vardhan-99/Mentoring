const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require("../models/usermodel");



router.post("/signup",(req,res)=>{
    const email = req.body.email;
    const pwd = req.body.pwd;
    const role = req.body.role;
    User.findOne({"email":email}).then((user)=>{
        if(user) console.log("Email already in use")
        else{
            return bcrypt.hash(pwd,12);
        }
    }).then((hashedpwd)=>{
        const user = new User({"email":email,"pwd":hashedpwd,"role":role});
        user.save().then(result=>{
            console.log(result);
            res.send(result.id);
        });
    });
})

module.exports  = router;