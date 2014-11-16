var LDAP = require('LDAP');

module.exports = {
	checkAuth: function(req, res, next){ 
		if (!req.session.user_id){
			console.log('redirect');
			res.redirect('login');
			next();
		}else{
			console.log('not redirecting');
			next(); 
		}
	}
}
