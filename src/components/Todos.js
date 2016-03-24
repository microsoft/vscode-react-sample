import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';

import TodosStore from './TodosStore';


class Todos extends React.Component {
  
  constructor() {
      super();
      this.styles = {
        float: 'left',
        width: '50%'
      };
      this.state = {
        notes: TodosStore.getAll()
      };
  }

  componentDidMount() {
    TodosStore.subscribe((action) => {
      this.setState({
        notes: action.notes
      });
    });
  }
  
  handleClick(note) {
    TodosStore.remove(note);
  }
  
  create(note) {
    return (<ListItem onMouseDown={this.handleClick.bind(null, note)} key={note.id}>
              {note.text}
           </ListItem>
    );
  }

  render() {
    const todos = this.state.notes.map(this.create.bind(this));
    return (
      <List style={this.styles}>
        {todos}
      </List>
    );
  }
}

export default Todos;
