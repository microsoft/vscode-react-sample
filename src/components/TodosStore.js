import _ from 'lodash';

const seed = [{
  text: 'Tweet about build',
  id: 1
}, {
  text: 'Build an app',
  id: 2
}, {
  text: 'Learn new tech',
  id: 3
}, {
  text: 'PRs on VS Code',
  id: 4
}];

class TodosStore {
  
  constructor() {
    this.idCount = 10; 
    this.todos = seed;
    this.subscribers = [];
  }
  
  add(note) {
    this.idCount++;
    note.id = this.idCount;
    this.todos.push(note);
     
    this.publish({
        actionType: 'add',
        data: note
    });
    return this.idCount;
  }
  
  remove(note) {
     _.remove(this.todos, (n) => {
         return n.id == note.id
     });
     this.publish({
         actionType: 'remove',
         data: note
     });
  }
  
  getAll() {
      return this.todos;
  }
  
  publish(action) {
    action.todos = this.getAll();
    this.subscribers.forEach((subscriber) => {
       subscriber(action); 
    });
  }
  
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}

// export singleton
export default new TodosStore();