// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
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
      routineName: "[Routine Name]",
      workoutName: "",
      workoutId: "",
      exercises: [],
      currentWorkoutDate: new Date()

    };

        // ======= OLD EXERCISE DATA ========
        // {
        //   exerciseName: "Decline Bench Press",
        //   exerciseUnit: 1,
        //   reps: [25, 15, 12],
        //   prevWorkoutWeights: [145, 165, 180],
        //   currentWorkoutWeights: []
        // },
        // {
        //   exerciseName: "Push Ups",
        //   exerciseUnit: 3,
        //   reps: ["", "", "", ""],
        //   prevWorkoutWeights: [25, 20, 15, 12],
        //   currentWorkoutWeights: []
        // },
        // {
        //   exerciseName: "Pec Fly",
        //   exerciseUnit: 2,
        //   reps: [15, 15, 15],
        //   prevWorkoutWeights: [90, 100, 110],
        //   currentWorkoutWeights: []
        // }

  }


  componentWillMount(){
    // Collect the Exercises from the "/workout/select" route
    let workoutObj = JSON.parse(this.props.location.query.workoutObj);
    let exercisesNew = workoutObj.exercises;

    // Update the states
    this.setState({exercises: exercisesNew});
    this.setState({workoutName: workoutObj.workoutName});
    this.setState({workoutId: workoutObj._id});
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
    Meteor.call('logWorkout', data);

  }


  _cancelWorkout(){
    console.log('Exit Page and Don\'t Save and/or Delete Changes.')
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

// _prevWorkoutWeightsArray={search.prevWorkoutWeights}

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

