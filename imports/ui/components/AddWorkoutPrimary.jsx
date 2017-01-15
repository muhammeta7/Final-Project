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
class AddFirstWorkout extends Component {

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

  _handleClick(){
    // Add another (blank) workout to the end of the array of objects
    this.props._addAnotherWorkout();
  }

  render(){
    return(
      
      <Card>
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
          avatar={<FloatingActionButton onClick={this._handleClick.bind(this)} secondary={false} mini={true}><ContentAdd/></FloatingActionButton>}
          title={
            <TextField
              onChange={this._handleChange.bind(this)}
              floatingLabelText="Workout Name"
              hintText="Chest Day"
              fullWidth={true}
            />
          }
        />
        <CardText expandable={true}>
          <Container>

            {/* First Exercise */}
            <AddExercisePrimary />

            <br/>

            {/* MAPPING NEEDED HERE -> Additional Exercises */}
              <AddExerciseSecondary />

          </Container>
        </CardText>
      </Card>
    )
  }
}


export default AddFirstWorkout;                          