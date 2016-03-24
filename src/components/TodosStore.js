import _ from 'lodash';


class TodosStore {
  
  constructor() {
    this.nodeCount = 10; 
    this.notes = [{
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
    this.subscribers = [];
  }
  
  add(note) {
    this.nodeCount++;
    note.id = this.nodeCount;
    this.notes.push(note);
     
    this.publish({
        actionType: 'add',
        data: note
    });
    return this.nodeCount;
  }
  
  remove(note) {
     _.remove(this.notes, (n) => {
         return n.id == note.id
     });
     this.publish({
         actionType: 'remove',
         data: note
     });
  }
  
  getAll() {
      return this.notes;
  }
  
  publish(action) {
    action.notes = this.getAll();
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