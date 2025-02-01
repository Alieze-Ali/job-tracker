const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();


var googleAuthRouter = require('./routes/google-oauth');
var googleRequestRouter = require('./routes/google-request');
var onboardRouter = require('./routes/onboarding-routes');
const userRouter = require("./routes/user-routes");

const errorHandlerMiddleware = require("./middleware/error-handler")

app.options('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", ['X-Requested-With','content-type','credentials']);
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.status(200);
    next()
  })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/google-oauth', googleAuthRouter);
app.use('/google-request', googleRequestRouter);
app.use('/onboarding', onboardRouter);
app.use('/dashboard', userRouter);

app.use(errorHandlerMiddleware);

module.exports = app;