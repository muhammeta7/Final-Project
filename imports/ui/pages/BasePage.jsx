// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ExpandTransition from 'material-ui/internal/ExpandTransition';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class BasePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      finished: false,
      stepIndex: 0,
    };
  }



  render = () =>{ 

    const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
}

 return (
  
    <Container>
      <div>

        <Card> 

          <CardMedia
            overlay={<CardTitle title="Welcome to MySwolenessPal! Tracking your workout progress just got 10 sets easier!" 
            subtitle="To get started please login or signup below" />}>
            <img src="img/people.jpg" />

          </CardMedia>
          <CardActions>
              <RaisedButton label="Login" primary={true} href = "users/login"/>
              <FlatButton label="Signup" href = "users/signup"/>
          </CardActions>
        </Card>
      </div>
  </Container>
  )
}
}
export default BasePage;




