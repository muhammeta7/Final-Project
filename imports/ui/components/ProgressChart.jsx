// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor';

// Import Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// Create Component
class ProgressChart extends Component {
  
  constructor(props) {
    super(props);
    this.state = { currentRoutine: '', workouts: [], workout_id: '', workoutName: '' }
  }

  componentWillMount() {
    Meteor.call('getCurrentRoutine', (err, res) => {

      this.setState({ currentRoutine: res.routineName })

      Meteor.call('getWorkoutOptions', res.routine_id, (err, res2) => {

        this.setState({ workouts: res2, workout_id: res2[0]._id, workoutName: res2[0].workoutName })

        Session.set(this.state)
      })
    })
  }

  componentDidUpdate() {
    Session.set(this.state)
    console.log(this.state)
  }

  changeDropDownField(event, index, value) {
    Meteor.call('getWorkoutName', value, (err, res) => {
      this.setState({ workout_id: value, workoutName: res })
    })
  }

  renderWorkouts(){
    let workouts = this.state.workouts;
    let workout_id = this.state.workout_id;

    return workouts.map((workout,key) => {
      return (
        <MenuItem key={key} value={workout._id} primaryText={workout.workoutName}/>
      );
    });
  }

  render(){
    return(
      <Card>
        <DropDownMenu value={this.state.workout_id} onChange={this.changeDropDownField.bind(this)}>
          {this.renderWorkouts()}
        </DropDownMenu>
        <CardHeader>
          <div>
            <Blaze template="myTemplate" routineId={this.state.currentRoutine} workouts={this.state.workouts}/>
          </div>
        </CardHeader>
      </Card>
    )
  }
}



export default ProgressChart;