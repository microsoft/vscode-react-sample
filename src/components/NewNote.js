import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';

import NotesStore from './NotesStore';

class NewNote extends Component {
    
    constructor() {
        super();
    }
    
    onKeyDown(event) {
        if (event.keyCode === 13) {
            console.log('enter was pressed');
            NotesStore.add({
                timestamp: new Date(),
                text: event.target.value.trim()
            });
        }
    }
    
    render() {
        return (
            <div>
                <TextField onKeyDown={this.onKeyDown} hintText="New todo"/>
            </div>
        );
    }
}

export default NewNote;