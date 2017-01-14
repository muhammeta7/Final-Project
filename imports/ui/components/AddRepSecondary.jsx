// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

// Create Component
class AddRepSecondary extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  _handleChange(event, index, value){
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  render(){
    return(
      <Card>
        <CardHeader
          title={
            <TextField
              value={this.state.value}
              onChange={this._handleChange.bind(this)}
              floatingLabelText="Reps for Set [i]"
              type="number"
              min="0"
              hintText="15"
              fullWidth={true}
            />
          }
        />
      </Card>
    )
  }
}


export default AddRepSecondary;