var fs = require('fs');
var _ = require('lodash');

var DATA = 'data/todos.json';
var PRETTIFY_WS = 4;

function getAll(resolve) {
    fs.readFile(DATA, function(err, data) {
      resolve(JSON.parse(data));
    });
}

function commit(data, resolve) {
    fs.writeFile(DATA, JSON.stringify(data, null, PRETTIFY_WS));
}

function add(todo, resolve) {
    getAll(function (data) {
        data.todos.push(todo);
        commit(data);
        resolve(data);
    });
}

function del(id, resolve) {
    getAll(function (data) {
        var todos = _.filter(data.todos, function (todo) {
            return todo.id != id;
        });
        data.todos = todos;
        commit(data);
        resolve(data);
    });
}

module.exports = {
  getAll: getAll,
  commit: commit,
  add: add,
  del: del
}