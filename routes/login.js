var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
	console.log('get, /login');
	res.render('login');
});

router.post('/', function(req, res){
	console.log('post, /login');
	var body = req.body;
	var user = body.user;
	var pass = body.pass;
	console.log('user: '+user);
	console.log('pass: '+pass);
	res.send('testting');
});