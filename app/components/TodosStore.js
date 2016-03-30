import _ from 'lodash';
import $ from 'jquery';
import TodoData from './TodoData';

const URL = 'http://localhost:3001/todos'

function getAll() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: URL,
      method: 'GET',
      dataType: 'json',
      success: resolve,
      error: reject
    });
  });
}

function remove(todo) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${URL}/${todo.id}`,
      method: 'DELETE',
      dataType: 'json',
      success: resolve,
      error: reject
    });
  });
}

function add(todo) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${URL}`,
      crossDomain: true,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: resolve,
      error: reject,
      data: JSON.stringify(todo)
    });
  });
}

class TodosStore {
  
  constructor() {
    this.idCount = 10; 
    this.subscribers = [];
  }
  
  add(todoText) {
    this.idCount++;
    let todo = new TodoData(todoText, this.idCount);
    
    add(todo).then(() => {
      this.publish({
        actionType: 'add',
        data: todo
      });
    });
     
    return this.idCount;
  }
  
  remove(todo) {
    remove(todo).then(() => {
      this.publish({
          actionType: 'remove',
          data: todo
      });
    });
  }
  
  getAll() {
      return getAll();
  }
  
  publish(action) {
    this.getAll().then((data) => {
      action.todos = data.todos;
      this.subscribers.forEach((subscriber) => {
        subscriber(action);
      });
    });
  }
  
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}

// export singleton
export default new TodosStore();