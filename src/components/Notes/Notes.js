import React, {Component} from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


class Notes extends Component {

  createItem(item) {
    return <ListItem key={item.text}>{item.text}</ListItem>;
  }

  render() {

    return (
      <List>{this.props.items.map(this.createItem)}</List>
    );
  }
}


export default Notes;
