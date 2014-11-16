var express = require('express');
var router  = express.Router();
var a = require('../lib/auth.js');

router.get('/', a.checkAuth, function(req, res) {
	console.log('following index route');
	res.render('index', { user: req.session.user_id });
});

module.exports = router;