import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Store from '../../reducers/index.js';

var NavBar = React.createClass({

  _goToIndex: function(){
    browserHistory.push('/dashboard');
  },

  _toggleAppDrawer: function(){
    Store.dispatch({
      type: "OPEN_DRAWER",
      open: true
    });
    console.log(Store.getState());
    console.log("Drawer opening!");
  },

  render: function() {
    return (
      <AppBar
        className="navbar"
        title="Workout App Jawn"
        iconClassNameRight="logo"
        onTitleTouchTap={this._goToIndex}
        onLeftIconButtonTouchTap={this._toggleAppDrawer}
        zDepth={1}
        style={{
          position: 'fixed', top: 0,
          textAlign: 'center',
          fontFamily: 'Raleway',
          fontSize : '60px',
          backgroundColor: '#263238' 
        }}
      />
    ); 
  }

});

export default NavBar;
