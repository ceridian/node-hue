var exec = require('child_process').exec;
var fs = require('fs');

module.exports = {
	headProc: function(callback){
		var cmd = 'head -n 1 /proc/stat';
		exec(cmd, function(err, res){
			if(err){
				callback(err, null);
			}else{
				callback(null, res)
			}
		});
	},

	proc: function(callback){
		headProc(function(res){
			var trim = res.slice(5, res.length -1);
			var cut = trim.split(' ');
			var user = parseInt(cut[0]);
			var nice = parseInt(cut[1]);
			var system = parseInt(cut[2]);
			var idle = parseInt(cut[3]);
			var iowait = parseInt(cut[4]);
			var irq = parseInt(cut[5]);
			var softirq = parseInt(cut[6]);
			var steal = parseInt(cut[7]);
			var guest = parseInt(cut[8]);
			var old = fs.readFileSync('oldProc', 'UTF-8');
			var cut1 = old.split(' ');
			var prev_user = parseInt(cut1[0]);
			var prev_nice = parseInt(cut1[1]);
			var prev_system = parseInt(cut1[2]);
			var prev_idle = parseInt(cut1[3]);
			var prev_iowait = parseInt(cut1[4]);
			var prev_irq = parseInt(cut1[5]);
			var prev_softirq = parseInt(cut1[6]);
			var prev_steal = parseInt(cut1[7]);
			var prev_guest = parseInt(cut1[8]);
			var total = user + nice + system + idle + iowait + irq + softirq + steal + guest;
			var total_idle = idle + iowait;
			var nonIdle = user + nice + system + irq + softirq + steal + guest;
			var prev_total = prev_user + prev_nice + prev_system + prev_idle + prev_iowait + prev_irq + prev_softirq + prev_steal + prev_guest;
			var prev_total_idle = prev_idle + prev_iowait;
			var prev_nonIdle = prev_user + prev_nice + prev_system + prev_irq + prev_softirq + prev_steal + prev_guest;
			var percent = ((total - prev_total) - (total_idle -prev_total_idle))/(total - prev_total);
			fs.writeFileSync('oldProc', trim);
			callback(parseInt(percent*100));
		});
	}
}

var status = require('./status.js');