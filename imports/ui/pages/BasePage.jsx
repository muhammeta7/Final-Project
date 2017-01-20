// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';




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
};

const BasePage = () => (
  
    <Container>
        <div>
    <Card>
      
      <CardText>
      
       <h1>Welcome to MySwolenessPal! Tracking your workout progress just got 10 sets easier!</h1>
       <h2>To get started please login or signup below</h2>     
      </CardText>

       <CardActions>
        <FlatButton label="Login" href = "users/login"/>
        <FlatButton label="Signup" href = "users/signup"/>
       </CardActions>
          </Card>
    </div>
    

    </Container>
  
  );

export default BasePage;