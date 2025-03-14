const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const dotenv = require('dotenv');
dotenv.config();

// var googleAuthRouter = require('./routes/google-oauth');
// var googleRequestRouter = require('./routes/google-request');
const userRouter = require('./routes/user-routes');
const jobsRouter = require("./routes/jobs-routes");

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

// app.use('/google-oauth', googleAuthRouter);
// app.use('/google-request', googleRequestRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 9000;

async function start(){
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    });
  } catch (error) {
    console.log(error)
  }
}

start();