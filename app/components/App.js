import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import IconButton from 'material-ui/lib/icon-button';
import StarIcon from 'material-ui/lib/svg-icons/toggle/star';

import Viewport from './Viewport';

class App extends React.Component {
    
    constructor() {
        super();
        this.styles ={
            backgroundColor: '#000'
        };
    }

    getChildContext(){
      return {
        muiTheme: getMuiTheme()
      };
    }

    render() {
        return (
            <div>
                <AppBar 
                    style={this.styles}
                    iconElementLeft={<IconButton><StarIcon /></IconButton>}
                    title="Todos" 
                />
                <Viewport />
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;
