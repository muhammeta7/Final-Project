// Import the Meteeeeeeooooor!
import { Meteor } from 'meteor/meteor';

// Import React
import React from 'react';
import { Component } from 'react';
import { browserHistory } from 'react-router';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
  
// Import Components
import AddRoutineName from '../components/AddRoutineName';
import AddWorkoutPrimary from '../components/AddWorkoutPrimary';
import AddWorkoutSecondary from '../components/AddWorkoutSecondary';
import Store from '../../reducers/index';
import setSnackBar from '../../actions/snackbar.js';



// Page Component
class CreateWorkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routineName: "",
      workouts: [
        {
          workoutName: "",
          exercises: [
            {
              exerciseName: "",
              exerciseUnit: 1,
              reps: [""]
            }
          ]
        }
      ]
    };
  }

  _changeRoutineName(value){
    this.setState({routineName: value});
    //console.log('Routine Name:' + '\n' + value)
  }

  _addAnotherWorkout(){

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Push to the workouts array
    workoutsArray.push(
      {
        workoutName: "",
        exercises: [
          {
            exerciseName: "",
            exerciseUnit: 1,
            reps: [""]
          }
        ]
      }
    );

    // Update the state
    this.setState({workouts: workoutsArray});

  }

  _removeSelectedWorkout(iOfWorkout){

    // // Get current workouts array
    // let workoutsArray = this.state.workouts;
    
    // // Remove unwanted Workout using its position in the Workouts array
    // workoutsArray.splice(iOfWorkout, 1);

    // // Update the state
    // this.setState({workouts: workoutsArray});

    // console.log('Delete Workout: ' + iOfWorkout)

    this.setState((prevState) => ({
      workouts: prevState.workouts.filter((_, i) => i !== iOfWorkout)
    }));

  }


  _editWorkoutName(iOfWorkout, nameOfWorkout){
    //console.log('Workout:' + '\n' + iOfWorkout)
    //console.log('Name:' + '\n' + nameOfWorkout)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Set object at correct array position to the new name value 
    workoutsArray[iOfWorkout].workoutName = nameOfWorkout;

    // Update the state
    this.setState({workouts: workoutsArray});

  }


  _addAnotherExercise(iOfWorkout){
    //console.log('add exercise to workout: ' + iOfWorkout)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Push to the excercise array
    workoutsArray[iOfWorkout].exercises.push(
      {
        exerciseName: "",
        exerciseUnit: 1,
        reps: [""]
      }
    );

    // Update the state
    this.setState({workouts: workoutsArray});
    
  }

  _removeSelectedExercise(iOfWorkout, iOfExercise){

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Remove unwanted Exercise using its position in the Exercises array
    workoutsArray[iOfWorkout].exercises.splice(iOfExercise, 1);

    // Update the state
    this.setState({workouts: workoutsArray});

    console.log('Delete Exercise: ' + iOfExercise + ' in Workout: ' + iOfWorkout)

  }

  _editExerciseName(iOfWorkout, iOfExercise, nameOfExercise){
    // console.log('Workout:' + iOfWorkout)
    // console.log('Exercise: ' + iOfExercise)
    // console.log('Name: ' + nameOfExercise)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Set selected exercise in selected workout to selected name
    workoutsArray[iOfWorkout].exercises[iOfExercise].exerciseName = nameOfExercise;

    // Update the state
    this.setState({workouts: workoutsArray});

  }

  _editExerciseUnits(iOfWorkout, iOfExercise, unitsOfExercise){
    // console.log('Workout:' + iOfWorkout)
    // console.log('Exercise: ' + iOfExercise)
    // console.log('Units: ' + unitsOfExercise)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Set selected exercise in selected workout to selected name
    workoutsArray[iOfWorkout].exercises[iOfExercise].exerciseUnit = unitsOfExercise;

    // Update the state
    this.setState({workouts: workoutsArray});

  }


  _addAnotherRep(iOfWorkout, iOfExercise){
    //console.log('add rep to exercise: ' + iOfExercise + ' in workout: ' + iOfWorkout)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Push reps to selected exercise in selected workout
    workoutsArray[iOfWorkout].exercises[iOfExercise].reps.push("");

    // Update the state
    this.setState({workouts: workoutsArray});

  }

  _removeLastRep(iOfWorkout, iOfExercise){
    //console.log('remove rep from exercise: ' + iOfExercise + ' in workout: ' + iOfWorkout)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Only delete the last rep if the array of reps has more than 1 entry
    let repArrayLength = workoutsArray[iOfWorkout].exercises[iOfExercise].reps.length;
    if(repArrayLength > 1){
      workoutsArray[iOfWorkout].exercises[iOfExercise].reps.splice(-1,1);
    }

    // Update the state
    this.setState({workouts: workoutsArray});

  }

  _editNumberOfReps(iOfWorkout, iOfExercise, iOfRep, numberOfReps){
    // console.log('Workout:' + iOfWorkout)
    // console.log('Exercise: ' + iOfExercise)
    // console.log('Rep: ' + iOfRep)
    // console.log('Count: ' + numberOfReps)

    // Get current workouts array
    let workoutsArray = this.state.workouts;

    // Edit selected Rep in selected Exercise in selected Workout
    workoutsArray[iOfWorkout].exercises[iOfExercise].reps[iOfRep] = numberOfReps;

    // Update the state
    this.setState({workouts: workoutsArray});

  }


  _uploadRoutine(event, index, value){
    // console.log(this.state)

    // Push to Database
    Meteor.call('addRoutine', this.state, function(err, res){

      if(err){
        Store.dispatch(setSnackBar(true, 'Error. Routine could not be uploaded.', '#F44336'));
      }
      else{
        // Notify User that they submitted successfully
        Store.dispatch(setSnackBar(true, 'Routine created successfully.', '#4CAF50'));
        // Move to the Dashboard
        browserHistory.push({ 
          pathname: '/dashboard'
        });  
      }

    });

  }

  _cancelRoutine(event, index, value){
    // Cancel takes you back to dashboard, nothing is saved to DB
    browserHistory.push({ 
      pathname: '/dashboard'
    });
  }

  render() {

    return (
      <Container>


        {/* Name the Routine */}
        <Row>
          <AddRoutineName _changeRoutineName={this._changeRoutineName.bind(this)} />
        </Row>


        <br />


        {/* Name the Workout(s) */}
        <Row>
          <Card>
            <CardText>

              {/* ++++++++++ ITERATE OVER WORKOUTS ++++++++++ */}
              {this.state.workouts.map(function(search, i) {
                
                // First, render the primary workout
                if(i==0){
                  return (
                    <div key={"workout-"+i}>
                      <AddWorkoutPrimary
                        _submissionObject={this.state}
                        _iOfWorkout={i}

                        _addAnotherWorkout={this._addAnotherWorkout.bind(this)}
                        _editWorkoutName={this._editWorkoutName.bind(this)}
                        _workoutName={this.state.workouts[i].workoutName}

                        _addAnotherExercise={this._addAnotherExercise.bind(this)}
                        _removeSelectedExercise={this._removeSelectedExercise.bind(this)}
                        _editExerciseName={this._editExerciseName.bind(this)}
                        _editExerciseUnits={this._editExerciseUnits.bind(this)}

                        _addAnotherRep={this._addAnotherRep.bind(this)}
                        _removeLastRep={this._removeLastRep.bind(this)}
                        _editNumberOfReps={this._editNumberOfReps.bind(this)}
                      />
                    </div>
                  );
                }
                // Then, render any additional workouts
                else{
                  return (
                    <div key={"workout-"+i}>
                      <br/>
                      <AddWorkoutSecondary
                        _submissionObject={this.state}
                        _iOfWorkout={i}

                        _removeSelectedWorkout={this._removeSelectedWorkout.bind(this)}
                        _editWorkoutName={this._editWorkoutName.bind(this)}
                        _workoutName={this.state.workouts[i].workoutName}

                        _addAnotherExercise={this._addAnotherExercise.bind(this)}
                        _removeSelectedExercise={this._removeSelectedExercise.bind(this)}
                        _editExerciseName={this._editExerciseName.bind(this)}
                        _editExerciseUnits={this._editExerciseUnits.bind(this)}

                        _addAnotherRep={this._addAnotherRep.bind(this)}
                        _removeLastRep={this._removeLastRep.bind(this)}
                        _editNumberOfReps={this._editNumberOfReps.bind(this)}
                      />
                    </div>
                  );
                }

              }.bind(this))}
              {/* +++++++++++++++++++++++++++++++++++++++++++ */}

            </CardText>
          </Card>
        </Row>
        

        <br/>


        {/* Submit or Cancel Form Submisson */}
        {/* This will need a way to collect all the data from the forms above and then hit an api on the backend */}
        {/* Maybe add a confirmation modal too... Create this workout? You will not be able to edit after this */}
        <Row>
          <center>
            <Row>
              <RaisedButton label="Submit" primary={true} onClick={this._uploadRoutine.bind(this)} />
              <span> </span>
              <RaisedButton label="Cancel" onClick={this._cancelRoutine.bind(this)} />
            </Row>
          </center>
        </Row>


      </Container>
    );
  }
}

export default CreateWorkout;


