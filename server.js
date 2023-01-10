const express = require('express');
require('dotenv').config();
require('./config/dbConnect');
const app =express();

//middlewares

//routes

//Error handlers middleware


//Listen to serer 
const PORT = process.env.PORT || 9000 ;

app.listen(PORT, console.log(`server is up and running ${PORT}`))

console.log(app);