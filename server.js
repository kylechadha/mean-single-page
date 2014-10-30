
// Application Set Up
// ----------------------------------------------
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080; 


// Configuration
// ----------------------------------------------
// mongoose.connect(db.url); 
var db = require('./config/db');


// Express Set Up
// ----------------------------------------------
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 


// Routes
// ----------------------------------------------
require('./app/routes')(app);


// Server
// ----------------------------------------------
app.listen(port);               
console.log('Magic happens on port ' + port);


// Exports
// ----------------------------------------------
exports = module.exports = app;
