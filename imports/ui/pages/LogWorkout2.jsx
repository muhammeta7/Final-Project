// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

// Page
const LogWorkout2 = () => (
  <MuiThemeProvider>
    <Card>
      <CardHeader
        title="Without Avatar"
        subtitle="Subtitle"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </MuiThemeProvider>

);

export default LogWorkout2;

