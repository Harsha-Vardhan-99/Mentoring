const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })



// /admin/add-appointment => GET
router.get('/add-appointment', (req, res, next) => {
  
});

// /admin/add-appointment => POST
router.post('/add-appointment',urlencodedParser ,(req, res, next) => {
  console.log(req.body);
  res.send({message:"hello"});
  //res.redirect('/');
});

module.exports = router;