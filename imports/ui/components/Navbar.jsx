import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Store from '../../reducers/index.js';

var NavBar = React.createClass({

  _goToHome: function(){
    browserHistory.push('/home');
  },

  _toggleAppDrawer: function(){
    Store.dispatch({
      type: "OPEN_DRAWER",
      open: true
    });
    console.log(Store.getState());
    console.log("Drawer opening!");
  },

  _handleLogout(e){
    e.preventDefault();
    Meteor.logout(function(err){
      if(!err){
        browserHistory.push('/users/login');
        Store.dispatch(setSnackBar(true, 'You\'ve been signed out successfully.', '#4CAF50'));
      }
    });
  },


  render: function() {
    return (
      
      <AppBar
        className = "navbar"
        title = "My Swoleness Pal"
        onLeftIconButtonTouchTap = {this._toggleAppDrawer}
        zDepth = {1}
        style = {{
          position: 'fixed', top: 0,
          backgroundColor: '#263238' 
        }}
        titleStyle = {{
          textAlign: 'center',
          fontFamily: 'Raleway',
          fontSize: 40,
          padding: 10
        }}
        iconElementRight = { Meteor.user() != null ? <FlatButton label="Log Out" /> : <FlatButton label="Welcome" />}
        onRightIconButtonTouchTap = {this._handleLogout} 
      />

    ); 
  }
});

export default NavBar;
