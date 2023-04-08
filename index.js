const express = require("express");
const path = require('path');
const app= express();
const port=8000;
const bodyParser = require('body-parser');


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