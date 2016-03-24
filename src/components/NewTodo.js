import React from 'react';
import TextField from 'material-ui/lib/text-field';

import TodosStore from './TodosStore';

class NewTodo extends React.Component {
    
    constructor() {
        super();
        this.styles = {
            float: 'left',
            width: '30%'
        };
    }
    
    onKeyDown(event) {
        if (event.keyCode === 13) {
            console.log('enter was pressed');
            TodosStore.add({
                timestamp: new Date(),
                text: event.target.value.trim()
            });
        }
    }
    
    render() {
        return (
            <div style={this.styles} >
                <TextField onKeyDown={this.onKeyDown} hintText="New todo"/>
            </div>
        );
    }
}

export default NewTodo;