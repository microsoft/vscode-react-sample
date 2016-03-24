import React, {Component} from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';


class Notes extends Component {

  createItem(item) {
    return (<ListItem key={item.text} rightIconButton={<DoneIcon />}>
              {item.text}
           </ListItem>
    );
  }
  
  onClick() {
    // remove from list
    console.log('finished item');
    // trigger an undo ability
  }

  render() {
    return (
      <List style={{width: 400}}>{this.props.items.map(this.createItem)}</List>
    );
  }
}


export default Notes;
