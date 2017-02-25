var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var promise = require('bluebird');

var app = express();

app.set('port', 8080);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));

app.use('/app',express.static(__dirname + "/app"));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(app.get('port'), function(){
    console.log("Listening on port", app.get('port'));
});