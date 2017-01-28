// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

// Import Style
import style from '../../../client/styles.js';

// Create Component
class AddRoutineName extends Component {

  constructor(props) {
    super(props);
    this.state = {routineName: ""};
  }

  _handleChange(event, index, value){
    // Update Locally
    this.setState({routineName: event.target.value});

    // Update in Parent
    this.props._changeRoutineName(event.target.value);
  }

  render(){
    return(
      <Card>
        <CardHeader>
          <h2 style={style.logRoutineHeaderStyle}><b>Create a Workout Routine</b></h2>
          <TextField
            value={this.state.routineName}
            onChange={this._handleChange.bind(this)}
            floatingLabelText="Routine Name"
            hintText="My Fitness Plan"
            fullWidth={true}
          />
        </CardHeader>
      </Card>
    )
  }
}


export default AddRoutineName;