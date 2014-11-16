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
	var load = {
		status: null,
		error: null,
		user: null,
	};
	models.USER.find({where: { user: user}}).complete(function(err, data){
		if(err){
			console.log(err);
			res.send(err);
		}else{
			if(data.length == 0){
				load.status = 'error';
				load.error = 'Unknown User';
				res.send(load);
			}else{
				var u = data.pass;
				console.log(u);
				if(u != pass){
					load.status = 'error';
					load.error = 'Incorect Password';
					res.send(load);
				}else{
					req.session.user_id = user;
					load.user = user;
					load.status = 'ok';
					res.send(load);
				}
			}
		}
	});
});

module.exports = router;