var path = require('path');
var l = require('../lib/lib.js');
var a = require('../lib/auth.js');
var i = require('../lib/io.js');
var u = require('../lib/util.js');

module.exports = function(app) {
  app.get('/alerts', a.checkAuth, function(req, res) {

  });

  app.get('/callback/:jobid', function(req, res) {
    var jobid = req.param('jobid');
    console.log(jobid, 'get: /callback/:jobid');
    i.alert('info', 'Job Completed', 'Hive Query', 'jobID: '+jobid);
    res.status(200).end();
  });

  app.post('/callback', function(req, res){
    var body = req.body;
    var query = body.str;
    console.log(body);
    l.hiveQuery(query, function(err, conf){
      if(err){
        res.msg(err);
        res.status(500).end();
      }else{
        res.send(conf);
      }
    });
  });

  app.post('/columns', a.checkAuth, function(req, res) {
    var body = req.body;
    l.columns(body, function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/configs', a.checkAuth, function(req, res) {
    l.configs(function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/dbs', a.checkAuth, function(req, res) {
    l.dbs(function(err, conf){
      if(err){
        console.log(err);
        u.log("error", "Database retreival error", "/dbs", "webhcat failed to respond with db info");
        res.status(500).end();
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/hosts', a.checkAuth, function(req, res) {
    l.hosts(function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/hostStatus', a.checkAuth, function(req, res) {
    l.hostStatus(function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/', function(req, res) {
  	res.redirect('/login');
  });

  app.post('/jobDetail', a.checkAuth, function(req, res) {
    var id = req.body.id;
    l.jobDetail(id, function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/jobs', a.checkAuth, function(req, res) {
    l.jobs(function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.post('/login', function(req, res) {
    var body = req.body;
    a.checkUser(body, function(err, obj){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        if(obj.status == 'ok'){
          req.session.user_id = obj.user;
          res.send(obj);
        }else{
          res.send(obj);
        }
      }
    })
  });

  app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
  });

  app.get('/statusDump', a.checkAuth, function(req, res) {
    l.statusDump(function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.post('/tables', a.checkAuth, function(req, res) {
    var body = req.body.db;
    l.tables(body, function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

  app.get('/users', a.checkAuth, function(req, res) {
    l.users(function(err, conf){
      if(err){
        res.msg(err);
        res.send(500);
      }else{
        res.send(conf);
      }
    });
  });

};
