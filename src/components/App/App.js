import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import Notes from '../Notes';
import NewNote from '../NewNote';

import s from './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            notes: [
                {
                    text: "go to the grocery store"
                },
                {
                    text: 'read medium article about engineering'
                },
                {
                    text: 'create build session'
                },
                {
                    text: 'fix bug #232'
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
                    title="Notes"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                <div style={{
                    marginTop: 20,
                    marginLeft: 20
                }}>
                    <NewNote />
                    <Notes items={this.state.notes}/>
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object
};


export default App;
