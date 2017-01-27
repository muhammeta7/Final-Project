import React from 'react';
import { Link, browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Store from '../../reducers/index.js';
import setSnackBar from '../../actions/snackbar.js';
import style from '../../../client/styles.js';

class DrawerLeft extends React.Component {

  _handleClose(){
    Store.dispatch({
      type: "CLOSE_DRAWER",
      open: false
    });
  }

  _handleLogout(e){
    e.preventDefault();
    Meteor.logout(function(err){
      if(!err){
        browserHistory.push('/users/login');
        Store.dispatch(setSnackBar(true, 'You\'ve been signed out successfully.', '#4CAF50'));
      }
    });
    Store.dispatch({
      type: "CLOSE_DRAWER",
      open: false
    });
  }

  _handleOpen(){
    self = this;
    if(location.pathname == '/'){
      setTimeout(function(){
        self.props.snackbar.open = false;
      }, 100);
    }
    return this.props.drawer.drawerOpen
  }

  render() {

    return (
      <div>
        <Drawer
          docked  = {false}
          width = {200}
          open = {this._handleOpen()}
          onRequestChange = {(open) => this._handleClose() }
          disableSwipeToOpen = {true}
          containerStyle = {style.drawerStyle}
        >
          
          { Meteor.user() != null ? (
              [ 

              <Link key="workout-create" to="/workout/create" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleClose}>Create Workout</MenuItem></Link>,
              <Link key="dashboard" to="/dashboard" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleClose}>Dashboard</MenuItem></Link>, 
              <Link key="workout-log" to="/workout/log" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleClose}>Log Workout</MenuItem></Link>,
              <Link key="logout" to="#" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleLogout}>Sign Out</MenuItem></Link>,
              <Link key="profile" to="/profile" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleClose}>User Profile</MenuItem></Link>

              ]
            ) : (
              [
                <Link key="login" to="/users/login" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleClose}>Login</MenuItem></Link>,
                <Link key="signup" to="/users/signup" className="menu-link" ><MenuItem style={style.linkStyle} onTouchTap={this._handleClose}>Sign Up</MenuItem></Link>
              ]
            )
          }

        </Drawer>
      </div>
    );
  }
}

module.exports = DrawerLeft;
