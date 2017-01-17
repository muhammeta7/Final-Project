// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

// Create Component
class AddRepPrimary extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  _handleChange(event, index, value){
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  _handleAddClick(){
    // Add another Rep to the selected Exercise in the selected Workout
    this.props._addAnotherRep(this.props._iOfWorkout, this.props._iOfExercise);
  }

  _handleRemoveClick(){
    // Remove last Rep in the selected Exercise in the selected Workout
    this.props._removeLastRep(this.props._iOfWorkout, this.props._iOfExercise);
  }

  render(){
    return(
      <Card>
        <CardHeader
          avatar={
            <div>
              <FloatingActionButton onClick={this._handleAddClick.bind(this)} secondary={false} mini={true}><ContentAdd/></FloatingActionButton>
              <i> </i>
              <FloatingActionButton onClick={this._handleRemoveClick.bind(this)} secondary={true} mini={true}><ContentRemove/></FloatingActionButton>
              <i> </i>
              <i> Please leave the Reps field empty if you plan to Lift Until Failure (xf)</i>
            </div>
          }
          title={
            <TextField
              value={this.state.value}
              onChange={this._handleChange.bind(this)}
              floatingLabelText={"Reps for Set " + (this.props._iOfRep + 1)}
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


export default AddRepPrimary;