import React from 'react';
import TextField from 'material-ui/TextField';

import TodosStore from './TodosStore';

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {
    
    constructor() {
        super();
        this.styles = {
            spacing: {
                float: 'left',
                width: '30%',
                margin: '3%'
            },
            prompt: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: 16,
                lineHeight: '16px'
            }
        };
    }
    
    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text == '') {
                return;
            }
            TodosStore.add(event.target.value.trim());
            
            // clear input
            event.target.value = '';
        }
    }
    
    render() {
        return (
            <div style={this.styles.spacing} >
                <p style={this.styles.prompt}>What do you want to get done?</p>
                <TextField 
                    onKeyDown={this.onKeyDown} 
                    hintText="New todo"
                    fullWidth={true}
                />
            </div>
        );
    }
}

export default NewTodo;