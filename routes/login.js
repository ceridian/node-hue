var express = require('express');
var router  = express.Router();
var models = require('../models');

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
	models.USER.find({where: { user: user}}).complete(function(err, data){
		if(err){
			console.log(err);
			res.send(err);
		}else{
			if(data.length == 0){
				res.send('Unknown User');
			}else{
				var u = data.pass;
				console.log(u);
				if(u != pass){
					res.send('Incorect Password');
				}else{
					res.send('ok');
				}
			}
		}
	});
});

module.exports = router;