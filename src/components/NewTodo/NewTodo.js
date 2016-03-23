import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';

class NewTodo extends Component {
    
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <TextField hintText="New todo item"/><br/>
            </div>
        );
    }
}

export default NewTodo;