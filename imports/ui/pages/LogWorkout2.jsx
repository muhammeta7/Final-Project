// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';

// Page
const LogWorkout2 = () => (
  <MuiThemeProvider>
    <div>

      {/* Title with Date Picker */}
      <Card>
        <CardHeader>
           <h4>[Workout Name]</h4>
           <h5>[Workout Day]</h5>
           <DatePicker hintText="Date of Workout" firstDayOfWeek={0} defaultDate={new Date()} />
         </CardHeader>
      </Card>

      <Divider />
      <br />

      {/* List of Excerises */}
      <Card>
        <CardHeader
          title="[Excerise Name]"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <TextField
            hintText="100"
            floatingLabelText="Set 1 (x15)"
            floatingLabelFixed={true}
            underlineShow={false}
          />
        </CardText>
      </Card>

      <br />

      <Card>
        <CardHeader
          title="[Excerise Name]"
          actAsExpander={true}
          showExpandableButton={true}
        />
      </Card>



    </div>
  </MuiThemeProvider>

);

export default LogWorkout2;

