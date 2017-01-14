// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

// Create Component
class AddRoutineName extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  _handleChange(event, index, value){
    this.setState({value: event.target.value});
    // console.log(event.target.value)
  }

  render(){
    return(
      <Card>
        <CardHeader>
          <h2>Create a Workout Routine</h2>
          <TextField
            value={this.state.value}
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