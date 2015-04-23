// modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var l = require('./lib/lib.js');
var a = require('./lib/auth.js');
var app = express();
var app2 = express();
// global

debugFlag = false;

// settings
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'jfalajgiyiaog7a90g7a6gyaoyga7g0aygalyhga',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app2.use(logger('dev'));
app2.use(bodyParser.json());

require('./routes/routes.js')(app);
require('./routes/httpRoutes.js')(app2);


app.get('/404', function(req, res, next){
  next();
});

// 404

app.use(function(req, res, next){
  res.redirect('/');
});

// error handlers

app.use(function(err, req, res, next) {
  if(err){
  	res.status(err.status || 500);
  	res.send(err);
  }else{
    res.redirect('/');
  }
});

setInterval(function(){
  l.hostStatus(function(){
    return;
  });
}, 10000);

module.exports = app;
