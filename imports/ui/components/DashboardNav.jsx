import {Component} from 'react';
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { IndexLink, Link, browserHistory } from 'react-router';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons"></FontIcon>;



class DashboardNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={5}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Create Workout"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Log Workout"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          
        </BottomNavigation>
      </Paper>
    );
  }
}

export default DashboardNav;