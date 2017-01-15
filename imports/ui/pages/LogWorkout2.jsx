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


// Page
const LogWorkout2 = () => (
  <MuiThemeProvider>
    <Container>

      {/* Title with Date Picker */}
      <Row>
        <Card>
          <CardHeader>
             <h3>[Workout Name]</h3>
             <h4>[Workout Day]</h4>
             <DatePicker hintText="Date of Workout" firstDayOfWeek={0} defaultDate={new Date()} underlineShow={false} />
           </CardHeader>
        </Card>
      </Row>

      <br />


      {/* List of Excerises */}
      <Row>
        <Card>
          <CardHeader
            title="[Excerise Name]"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>

            <Container>
              <Row>

                <Col sm={3} xs={6}>
                  <TextField
                    hintText="100"
                    floatingLabelText="Set 1 (x25)"
                    floatingLabelFixed={true}
                    underlineShow={false}
                  />
                </Col>

                <Col sm={3} xs={6}>
                  <TextField
                    hintText="150"
                    floatingLabelText="Set 2 (x15)"
                    floatingLabelFixed={true}
                    underlineShow={false}
                  />
                </Col>

                <Col sm={3} xs={6}>
                  <TextField
                    hintText="165"
                    floatingLabelText="Set 3 (x10)"
                    floatingLabelFixed={true}
                    underlineShow={false}
                  />
                </Col>

                <Col sm={3} xs={6}>
                  <TextField
                    hintText="175"
                    floatingLabelText="Set 4 (x8)"
                    floatingLabelFixed={true}
                    underlineShow={false}
                  />
                </Col>

              </Row>

            </Container>

          </CardText>
        </Card>

      </Row>


    </Container>

  </MuiThemeProvider>

);

export default LogWorkout2;

