// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui 
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';


// Create Component
class LogWorkoutDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      controlledDate: new Date(),
    };
  }

  _handleChange(event, date){
    // Update Locally
    this.setState({
      controlledDate: date,
    });

    // Update in Parent
    this.props._editCurrentWorkoutDate(date);
  }

  render(){
    return(
      <Card>
        <CardHeader>
           <h2>{this.props._routineName}</h2>
           <h4>{this.props._workoutName}</h4>
           <DatePicker
            hintText="Date of Workout"
            firstDayOfWeek={0}
            fullWidth={true}
            value={this.state.controlledDate}
            onChange={this._handleChange.bind(this)}
          />
         </CardHeader>
      </Card>
    )
  }
}


export default LogWorkoutDate;