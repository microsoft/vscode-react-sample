import React, {Component} from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';

import NotesStore from './NotesStore';

class Notes extends Component {
  
  constructor() {
      super();
  }

  componentDidMount() {
    NotesStore.subscribe((action) => {
      this.setState({
        notes: action.notes
      });
    });
  }
  
  handleClick(event) {
    NotesStore.remove({
      // note data
    });
  }
  
  create(note) {
    return (<ListItem onMouseDown={this.handleClick} key={note.text}>
              {note.text}
           </ListItem>
    );
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
