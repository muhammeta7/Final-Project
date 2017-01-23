import {Component} from 'react';
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { IndexLink, Link, browserHistory } from 'react-router';

const createIcon = <FontIcon className="material-icons">queue</FontIcon>;
const logIcon = <FontIcon className="material-icons">directions_run</FontIcon>;


var DashboardNav = React.createClass ({

  _goToCreateWorkout: function() {
    browserHistory.push('/workout/create');
  },

  _goToLogWorkout: function() {
    browserHistory.push('/workout/log');
  },
  
  render: function() {
    return (

      <Paper zDepth={5}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Create Workout"
            icon={createIcon}
            onTouchTap={this._goToCreateWorkout}
          />
          <BottomNavigationItem
            label="Log Workout"
            icon={logIcon}
            onTouchTap={this._goToCreateWorkout}
          />
        </BottomNavigation>
      </Paper>

    );
  }
});

export default DashboardNav;