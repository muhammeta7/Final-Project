// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Import Components
import LogWorkoutDate from '../components/LogWorkoutDate';
import LogExercise from '../components/LogExercise';


// Page Component
class LogWorkout extends Component {

  constructor(props) {
    super(props);

    // Sample Data
    this.state = {
      routineName: "Tommy's Gym Routine",
      workoutName: "Chest Day",
      exercises: [
        {
          exerciseName: "Bench Press",
          exerciseUnit: 1,
          reps: [25, 15, 12, 10]
        },
        {
          exerciseName: "Push Ups",
          exerciseUnit: 3,
          reps: ["", "", ""]
        },
        {
          exerciseName: "Pec Fly",
          exerciseUnit: 2,
          reps: [15, 15, 15]
        }
      ]
    };

  }

  _uploadWorkout(event, index, value){
    console.log('Exit Page and Keep Changes')
    console.log(this.state)
  }

  _cancelWorkout(){
    console.log('Exit Page and Don\'t Save and/or Delete Changes.')
  }

  render() {
    return (

      <MuiThemeProvider>
        <Container>

          {/* Title with Date Picker */}
          <Row>
            <LogWorkoutDate
              _routineName={this.state.routineName}
              _workoutName={this.state.workoutName}
            />
          </Row>


          {/* List of Excerises */}
          <Row>

            {/* ++++++++++ ITERATE OVER EXERCISES ++++++++++ */}
            {this.state.exercises.map(function(search, i) {

              return (
                <div key={"routine-" + this.state.routineName + "-workout-" + this.state.workoutName + "-exercise-" + i} >
                  <br/>
                  <LogExercise
                    _routineId={this.state.routineName}
                    _workoutId={this.state.workoutName}

                    _exerciseId={i}
                    _exerciseName={search.exerciseName}
                    _exerciseUnit={search.exerciseUnit}

                    _repArray={search.reps}
                  />
                </div>
              );

            }.bind(this))}
            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}

          </Row>

          <br />
          {/* Submit or Cancel Form Submisson */}
          {/* This will need a way to collect all the data from the forms above and then hit an api on the backend */}
          {/* Maybe add a confirmation modal too... Create this workout? You will not be able to edit after this */}
          <Row>
            <center>
              <Row>
                <RaisedButton label="Submit" primary={true} onClick={this._uploadWorkout.bind(this)} />
                <span> </span>
                <RaisedButton label="Cancel" onClick={this._cancelWorkout.bind(this)} />
              </Row>
            </center>
          </Row>


        </Container>
      </MuiThemeProvider>

    );
  }

};

export default LogWorkout;

