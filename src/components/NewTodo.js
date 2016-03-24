import React from 'react';
import TextField from 'material-ui/lib/text-field';

import TodosStore from './TodosStore';

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {
    
    constructor() {
        super();
        this.styles = {
            float: 'left',
            width: '30%'
        };
    }
    
    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text == '') {
                return;
            }
            TodosStore.add({
                text: event.target.value.trim()
            });
            
            // clear input
            event.target.value = '';
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