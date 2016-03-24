import React, {Component} from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';


class Notes extends Component {
  
  constructor() {
      super();
      this.state = {
          notes: [{
              text: 'some note'
          }, 
          {
            text: 'another note'
          }]
      };
  }

  create(note) {
    return (<ListItem onMouseDown={this.handleClick} key={note.text}>
              {note.text}
           </ListItem>
    );
  }
  
  componentDidMount() {
    // register with dispatcher for AddNote actions
    // register with dispatcher for RemoveNote actions
  }
  
  componentWillUnmount() {
    // unregister all event listeners
  }
  
  handleClick() {
    console.log('removed note');
    // dispatch a RemoveNote event
  }

  render() {
    const todos = this.state.notes.map(this.create.bind(this));
    return (
      <List style={{width: 400}}>
        {todos}
      </List>
    );
  }
}


export default Notes;
