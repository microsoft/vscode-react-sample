import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui/svg-icons/toggle/star';

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
