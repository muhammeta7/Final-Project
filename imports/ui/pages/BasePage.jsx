// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class BasePage extends Component {

 

  render() {

    const buttonStyle = {
      margin: '10px'
    }

    return (
      <Container>
        <div>

          <Card> 
            <CardMedia
              overlay={<CardTitle title="Welcome to MySwolenessPal! Tracking your workout progress just got 10 sets easier! We've made it easier for you create and log your workouts." 
              subtitle="To get started please signup. If you are returning user simply login." />}>
              <img src="img/people.jpg" />
            </CardMedia>
            <CardActions>
               <Row>
                <center>
                  <Row>
                    <RaisedButton style={buttonStyle} label="Signup" secondary={true} href = "users/signup"/>
                    <RaisedButton style={buttonStyle} label="Login" primary={true} href = "users/login"/>
                  </Row>
                </center>
              </Row>
            </CardActions>
          </Card>

        </div>
      </Container>
    );
  }
};
export default BasePage;




