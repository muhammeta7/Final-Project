// Import React
import React from 'react';
import { Component } from 'react';
import { browserHistory } from 'react-router';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

// Import Components
import LogWorkoutDate from '../components/LogWorkoutDate';
import LogExercise from '../components/LogExercise';
import Store from '../../reducers/index';
import setSnackBar from '../../actions/snackbar.js';



// Page Component
class LogWorkout extends Component {

  constructor(props) {
    super(props);

    // Sample Data
    this.state = {
      routineName: "",
      workoutName: "",
      workoutId: "",
      exercises: [],
      currentWorkoutDate: new Date()

    };
  }


  componentWillMount(){

    // Move off the page if nothing was selected in the `/workout/select` route
    if(this.props.location.query.workoutObj == null){
      browserHistory.push({ 
        pathname: '/workout/select'
      });
    }
    else{

      // Collect the Exercises from the "/workout/select" route
      let workoutObj = JSON.parse(this.props.location.query.workoutObj);
      let exercisesNew = workoutObj.exercises;

      // Update the states for workout
      this.setState({exercises: exercisesNew});
      this.setState({workoutName: workoutObj.workoutName});
      this.setState({workoutId: workoutObj._id});

      // Collect the Routine Name and update state
      this.setState({routineName: this.props.location.query.routineName});

      // Pass back the Workout Id so I can get
      Meteor.call('getPreviousWorkoutLog', workoutObj._id, function(err, res){

        // Set the states if there was a prev workout found (via position)
        if(res){
          // Get the current exercises state
          let exercisesArray = this.state.exercises;

          // Iterate over response and set the prevWorkoutArray to old values
          for(let i=0; i < res.length; i++){
            for(let j=0; j < res[i].weights.length; j++){
              // Set the prevWorkoutWeights for the exercises via position
              let prevRepWeight = res[i].weights[j];
              exercisesArray[i].prevWorkoutWeights.push(prevRepWeight); 
            }
          }
          // Update the state
          this.setState({exercises: exercisesArray});
        }

      }.bind(this));

    }

  }

  componentDidMount(){
    // Iterate over the reps arrays (inside each exercise) to generate appropriately sized weight logging array
    let exercisesArray = this.state.exercises;
    for(let i=0; i < exercisesArray.length; i++){
      for(let j=0; j < exercisesArray[i].reps.length; j++){
        exercisesArray[i].currentWorkoutWeights.push("");
      }
    } 
    // Update the state
    this.setState({exercises: exercisesArray});
  }


  _editCurrentWorkoutDate(date){
    // Updates the current workout's date 
    this.setState({currentWorkoutDate: date});
  }


  _editCurrentWorkoutRepWeight(iOfExercise, iOfRep, weight){
    // Get current exercises array
    let exercisesArray = this.state.exercises;
    // Updates the Weight of the selected Rep in the selected Exercise
    exercisesArray[iOfExercise].currentWorkoutWeights[iOfRep] = weight;
    // Update the state
    this.setState({exercises: exercisesArray});
  }


  _uploadWorkout(event, index, value){
    //console.log('Exit Page and Keep Changes')
    //console.log(this.state)

    // In too deep to re-factor all my functions. So I will pull the logged data out...
    let currentLog = [];

    // Pull out all the currentWorkoutWeights from each exercise
    for(let i=0; i<this.state.exercises.length; i++){

      // Make a Object with Name and Weights array
      let logThisEx = {
        exerciseName: this.state.exercises[i].exerciseName,
        weights: this.state.exercises[i].currentWorkoutWeights

      }

      // Push to Log weight array
      currentLog.push(logThisEx)
    }
    

    // Pass in the data for the backend
    let data = {
      workout_id: this.state.workoutId,
      date: this.state.currentWorkoutDate,
      log: currentLog
    }

    // Push to Database
    Meteor.call('logWorkout', data, function(err, res){

      if(err){
        Store.dispatch(setSnackBar(true, 'Error. Workout could not be logged!', '#F44336'));
      }
      else{
        // Notify User that they submitted successfully
        Store.dispatch(setSnackBar(true, 'Workout logged successfully.', '#4CAF50'));
        // Move to the Dashboard
        browserHistory.push({ 
          pathname: '/dashboard'
        });  
      }

    });



  }


  _cancelWorkout(){
    // Cancel takes you back to dashboard, no saving of progress in DB
    browserHistory.push({ 
      pathname: '/dashboard'
    });
  }


  render() {
    return (
      <Container>

        {/* Title with Date Picker */}
        <Row>
          <LogWorkoutDate
            _routineName={this.state.routineName}
            _workoutName={this.state.workoutName}

            _editCurrentWorkoutDate={this._editCurrentWorkoutDate.bind(this)}
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
                  _currentWorkoutWeights={search.currentWorkoutWeights}
                  _prevWorkoutWeightsArray={search.prevWorkoutWeights}

                  _editCurrentWorkoutRepWeight={this._editCurrentWorkoutRepWeight.bind(this)}
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
    );
  }

};

export default LogWorkout;

