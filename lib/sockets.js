var models = require('../models');

module.exports = {
	socketsInit: function(io){
		io.on('connection', function (socket) {
			console.log('connected');
			socket.on('disconnect', function(){ console.log('disconnect'); });
		});
	}
}