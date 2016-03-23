import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import TodoList from '../TodoList';
import NewTodo from '../NewTodo';

import s from './App.scss';


class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    text: 'Go to the grocery store'
                },
                {
                    text: 'Book flight for build'
                },
                {
                    text: 'Write a cool, new app'
                }
            ]
        };
    }

    getChildContext(){
      return {
        muiTheme: getMuiTheme()
      };
    }

    render() {
        return (
            <div className={s.app}>
                <AppBar
                  title="Todo"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <div style={{
                  marginTop: 20,
                  marginLeft: 20
                }}>
                    <NewTodo />
                    <TodoList items={this.state.todos}/>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object
};

export default App;
