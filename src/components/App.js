import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import Notes from './Notes';
import NewNote from './NewNote';


class App extends Component {

    constructor() {
        super();
    }

    getChildContext(){
      return {
        muiTheme: getMuiTheme()
      };
    }

    render() {
        return (
            <div styles={{
                margin: 0,
                width: '100%',
                height: '100%'
            }}>
                <AppBar title="Notes" />
                <div styles={{
                    marginTop: 20,
                    marginLeft: 20
                }}>
                    <NewNote />
                    <Notes />
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object
};


export default App;
