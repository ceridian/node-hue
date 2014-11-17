var express = require('express');
var router  = express.Router();
var a = require('../lib/auth.js');
var models = require('../models');

router.get('/', a.checkAuth, function(req, res) {
	models.HOST.findAll().complete(function(err, hosts){
		if(err){
			console.log(err);
		}else{
			if(hosts.length < 1){
				res.render('wizard', { user: req.session.user_id });
			}else{
				res.render('index', { user: req.session.user_id });
			}
		}
	});
});

module.exports = router;