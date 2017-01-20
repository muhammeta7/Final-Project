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
    this.state = {value: 0};
  }

  _handleChange(event, date){

    // Update Locally
    this.setState({value: event.target.value});
    console.log(event.target.value)

    // Update Globally
    //this.props._logRepWeight(event.target.value);

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