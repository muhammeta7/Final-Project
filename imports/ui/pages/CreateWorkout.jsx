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
    this.state = {dataSubmission: []};
  }

  _selectFieldChange(event, index, value){
    this.setState({value});
  }

  render() {

    return (
      <MuiThemeProvider>
        <Container>


          {/* Name the Routine */}
          <Row>
            <AddRoutineName />
          </Row>


          <br />


          {/* Name the Workout(s) */}
          <Row>
            <Card>
              <CardText>

                {/* Add First Workout */}
                <AddWorkoutPrimary />


                {/* Add Additional Workouts */}
                <br/>
                <AddWorkoutSecondary />

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
                <RaisedButton label="Submit"  primary={true}  />
                <span> </span>
                <RaisedButton label="Cancel" />
              </Row>
            </center>
          </Row>

        </Container>
      </MuiThemeProvider>
    );
  }
}

export default CreateWorkout;


