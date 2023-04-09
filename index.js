const express = require("express");
const path = require('path');
const app= express();
const port=8000;
// to parse the request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// cookies
const cookieParser= require("cookie-parser");
app.use(cookieParser());

// database connection 
const db = require("./config/mongoose") ;
const user = require("./models/users");
const { Collection } = require("mongoose");


app.use(express.static("assets"));
const expresslayouts= require("express-ejs-layouts");
app.use(expresslayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// setting up routes
app.use('/',require("./routes"));



//to use static files like css js 
const { urlencoded } = require("express");
app.use(express.urlencoded());
app.use(express.static("assets"));




// view engine to render ejs files
app.set("view engine","ejs");
app.set("views","./views");


// app.get('/', function (req, res) {
//     console.log("rendering landing page ");
//     return res.render("landing");
// })







// fire up express server 
app.listen(port,function(err){
    if(err){
        console.log(`Error in runnning server : ${err}`);
    }
    console.log(`Server is running on port numer : ${port}`);
})