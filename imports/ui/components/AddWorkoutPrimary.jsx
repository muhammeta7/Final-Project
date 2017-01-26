// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

// Import Components
import AddExercisePrimary from '../components/AddExercisePrimary';
import AddExerciseSecondary from '../components/AddExerciseSecondary';


// Create Component
class AddWorkoutPrimary extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  _handleChange(event, index, value){
    // Change Locally
    //this.setState({value: event.target.value});
    //console.log(event.target.value)

    // Change Globally
    this.props._editWorkoutName(this.props._iOfWorkout, event.target.value);
  }

  _handleClick(event){
    // Add another (blank) workout to the end of the array of objects
    this.props._addAnotherWorkout();
  }

  render(){
    return(
      
      <Card>
        <CardHeader
          actAsExpander={false}
          showExpandableButton={true}
          avatar={<FloatingActionButton onClick={this._handleClick.bind(this)} secondary={false} mini={true}><ContentAdd/></FloatingActionButton>}
          title={
            <TextField
              onChange={this._handleChange.bind(this)}
              value={this.props._workoutName}
              floatingLabelText="Workout Name"
              hintText="Chest Day"
              fullWidth={true}
            />
          }
        />
        <CardText expandable={true}>
          <Container>

            {/* ++++++++++ ITERATE OVER EXERCISES ++++++++++ */}
            {this.props._submissionObject.workouts[this.props._iOfWorkout].exercises.map(function(search, i) {

              // First, render the primary excercise
              if(i==0){
                return (
                  <div key={"workout-" + this.props._iOfWorkout + "-excercise-" + i} >
                    <AddExercisePrimary
                      _submissionObject={this.props._submissionObject}

                      _iOfWorkout={this.props._iOfWorkout}
                      _iOfExercise={i}

                      _addAnotherExercise={this.props._addAnotherExercise.bind(this)}
                      _editExerciseName={this.props._editExerciseName.bind(this)}
                      _editExerciseUnits={this.props._editExerciseUnits.bind(this)}
                      _exerciseName={search.exerciseName}

                      _addAnotherRep={this.props._addAnotherRep.bind(this)}
                      _removeLastRep={this.props._removeLastRep.bind(this)}
                      _editNumberOfReps={this.props._editNumberOfReps.bind(this)}
                    />
                  </div>
                );
              }
              // Then, render any additional excercises
              else{
                return(
                  <div key={"workout-" + this.props._iOfWorkout + "-excercise-" + i}>
                    <br/>
                    <AddExerciseSecondary
                      _submissionObject={this.props._submissionObject}

                      _iOfWorkout={this.props._iOfWorkout}
                      _iOfExercise={i}
                      
                      _removeSelectedExercise={this.props._removeSelectedExercise.bind(this)}
                      _editExerciseName={this.props._editExerciseName.bind(this)}
                      _editExerciseUnits={this.props._editExerciseUnits.bind(this)}
                      _exerciseName={search.exerciseName}

                      _addAnotherRep={this.props._addAnotherRep.bind(this)}
                      _removeLastRep={this.props._removeLastRep.bind(this)}
                      _editNumberOfReps={this.props._editNumberOfReps.bind(this)}
                    />
                  </div>
                );
              }

            }.bind(this))}
            {/* +++++++++++++++++++++++++++++++++++++++++++ */}

          </Container>
        </CardText>
      </Card>
    )
  }
}


export default AddWorkoutPrimary;                          