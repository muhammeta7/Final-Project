// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


// Create Component
class AddRepSecondary extends Component {

  constructor(props) {
    super(props);
  }

  _handleChange(event, index, value){
    // Edit the number of Reps for the selected Exercise in the selected Workout
    this.props._editNumberOfReps(this.props._iOfWorkout, this.props._iOfExercise, this.props._iOfRep, event.target.value);
  }

  render(){
    return(
      <Card>
        <CardHeader
          title={
            <TextField
              onChange={this._handleChange.bind(this)}
              value={this.props._numberOfReps}
              floatingLabelText={"Reps for Set " + (this.props._iOfRep + 1)}
              type="number"
              min="0"
              hintText="15"
              fullWidth={true}
            />
          }
        />
      </Card>
    )
  }
}


export default AddRepSecondary;