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

  render(){
    return(

      <Col sm={3} xs={4}>
        <TextField
          hintText="[prev weight]"
          type="number"
          min="0"
          floatingLabelText="Set [i] (x[rep/f])"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={this._handleChange.bind(this)}
        />
      </Col>

    );
  }
}


export default LogRepWeight;