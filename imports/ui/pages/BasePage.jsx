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
import AppBarExampleComposition from './AppBarExampleComposition.jsx'





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
  <MuiThemeProvider>
  <AppBarExampleComposition/>
    <Container>
        <div>
    <RaisedButton
      label="SignUp"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      href = "./sign-up"
    />
    </div>
      

    </Container>
  </MuiThemeProvider>
  );

export default BasePage;