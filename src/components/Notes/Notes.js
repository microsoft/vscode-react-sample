import React, {Component} from 'react';
import Reflux from 'reflux';
import NoteStore from '../../stores/NoteStore';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';


class Notes extends Component {
  
  getInitialState() {
      return {
          notes: {
              text: 'some note'
          }
      };
  }

  createItem(note) {
    return (<ListItem key={note.text} rightIconButton={<DoneIcon />}>
              {note.text}
           </ListItem>
    );
  }
  
  componentDidMount() {
    
  }
  
  onClick() {
    // remove from list
    console.log('removed note');
    // trigger an undo ability
  }

  render() {
    return (
      <List style={{width: 400}}>{this.state.notes.map(this.createItem)}</List>
    );
  }
}

Notes.mixins = [Reflux.connect(NoteStore, 'notes')];


export default Notes;
