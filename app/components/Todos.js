import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';

import TodosStore from './TodosStore';


class Todos extends React.Component {
  
  constructor() {
      super();
      this.styles = {
        float: 'left',
        width: '50%',
        margin: '3%'
      };
      this.state = { todos: [] };
  }

  componentDidMount() {
    TodosStore.getAll().then((data) => {
      console.log('get all', data);
      this.setState({
        todos: data.todos
      });
    });
    
    TodosStore.subscribe((action) => {
      this.setState({
        todos: action.todos
      });
    });
  }
  
  handleClick(note) {
    TodosStore.remove(note);
  }
  
  create(todo) {
    return (<ListItem 
              onMouseDown={this.handleClick.bind(null, todo)} 
              key={todo.id}
              leftIcon={<ChevronRightIcon />}
              primaryText={todo.text}
              secondaryText={todo.timestamp}>
           </ListItem>
    );
  }

  render() {
    const todos = this.state.todos.map(this.create.bind(this));
    return (
      <div>
        <List style={this.styles}>
          {todos}
        </List>
        <select>
            <option value="1">Q1. Jan - Mar</option>
            <option value="2">Q2. Apr - Jun</option>
            <option value="3">Q3. Jul - Sep</option>
            <option value="4">Q4. Oct - Dec</option>
        </select>
      </div>
    );
  }
}

export default Todos;
