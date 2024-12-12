const express = require("express");
const cors = require("cors")
const app = express();
const dotenv = require('dotenv');
dotenv.config();


var authRouter = require('./routes/oauth');
var requestRouter = require('./routes/request');
var onboardRouter = require('./routes/onboarding');

app.options('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", ['X-Requested-With','content-type','credentials']);
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.status(200);
    next()
  })

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/oauth', authRouter);
app.use('/request', requestRouter);
app.use('/onboarding', onboardRouter);

module.exports = app;