// import files and packages up here

var topSpotsData = require('./data');

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');


// create your express server below

//var server = app.listen(3000, function(){
//    console.log('Application started.  Listening on port: 3000');
// })

// add your routes and middleware below

app.use(morgan('dev'));
app.use(express.static('public'))//goes to the public folder and starts displaying the html page along with the data files



app.get('/data', function(req, res){
    res.send(topSpotsData);
});



// finally export the express application
module.exports = app;


