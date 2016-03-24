import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';

class NewNote extends Component {
    
    constructor() {
        super();
    }
    
    onKeyDown(event) {
        if (event.keyCode === 13) {
            console.log('enter was pressed');
            
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