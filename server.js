var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
// set the port of our application
// process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/');

// set the view engine to php
// app.set('view engine', 'php');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('/index');
});

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    // res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
