var express = require('express');
var bodyParser = require('body-parser')

var database = require('./database');

var server = express();
server.use(bodyParser.json());








server.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});







server.get('/todos', function(req, res, next) {
  database.getAll(function(todos) {
    res.send(todos);
    next();
  });
});





server.post('/todos', function(req, res, next) {
  var todo = req.body;
  database.add(todo, function(todos) {
    res.send(todos);
    next();
  });
});

server.delete('/todos/:id', function(req, res, next) {
  var id = req.params.id;
  
  database.del(id, function(todos) {
    res.send(todos);
    next();
  });
});





var PORT = 3002;
server.listen(PORT, function() {
  console.log('listening at %s', PORT);
});


