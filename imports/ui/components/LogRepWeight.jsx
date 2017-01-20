// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import TextField from 'material-ui/TextField';


// Create Component
class LogRepWeight extends Component {

  constructor(props) {
    super(props);
  }

  _handleChange(event, date){

    // Log the Weight of the selected Rep in the selected Exercise
    this.props._editCurrentWorkoutRepWeight(this.props._exerciseNumber, this.props._repNumber, event.target.value);

    // console.log('Weight: ' + event.target.value)
    // console.log('In Exercise: ' + this.props._exerciseNumber)
    // console.log('In Rep: ' + this.props._repNumber)

  }

  _writeFailure(repValue){

    // Return xf for any empty array (lift to failure)
    if(repValue == ""){
      return "f";
    }
    else{
      return "";
    }

  }


  render(){
    return(

      <Col sm={3} xs={4}>
        <TextField
          hintText={this.props._prevWorkoutRepWeight}
          type="number"
          min="0"
          floatingLabelText={"Set " + (this.props._repNumber + 1) + " (x" + this.props._repCount + this._writeFailure(this.props._repCount) + ")"}
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={this._handleChange.bind(this)}
        />
      </Col>

    );
  }
}


export default LogRepWeight;