import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';

class NewNote extends Component {
    
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <TextField hintText="New note"/><br/>
            </div>
        );
    }
}

export default NewNote;