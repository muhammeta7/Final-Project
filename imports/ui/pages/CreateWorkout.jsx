// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';



// Import Components
import AddRoutineName from '../components/AddRoutineName';
import AddWorkoutPrimary from '../components/AddWorkoutPrimary';
import AddWorkoutSecondary from '../components/AddWorkoutSecondary';

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
    this.setState({routineName: value})
    // console.log('Routine Name:' + '\n' + value)
  }

  _uploadRoutine(event, index, value){
    console.log(this.state)
  }

  _cancelRoutine(event, index, value){
    console.log('Exit Page')
  }

  render() {

    return (
      <MuiThemeProvider>
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
                        <AddWorkoutPrimary />
                      </div>
                    );
                  }
                  // Then, render any additional workouts
                  else{
                    return (
                      <div key={"workout-"+i}>
                        <br/>
                        <AddWorkoutSecondary />
                      </div>
                    );
                  }

                })}
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
      </MuiThemeProvider>
    );
  }
}

export default CreateWorkout;


