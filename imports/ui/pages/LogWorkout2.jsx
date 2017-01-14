// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';


// Page
const LogWorkout2 = () => (
  <MuiThemeProvider>
    <Container>

      {/* Title with Date Picker */}
      <Row>
        <Card>
          <CardHeader>
             <h2>[Workout Name]</h2>
             <h4>[Workout Day]</h4>
             <DatePicker hintText="Date of Workout" firstDayOfWeek={0} defaultDate={new Date()} underlineShow={false} />
           </CardHeader>
        </Card>
      </Row>

      <br />


      {/* List of Excerises */}
      <Row>

        {/* Iterate Over Excerises */}

          {/* Lift 1 */}
          <Card>
            <CardHeader
              title="[Excerise Name]"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>

              <Container>
                <Row>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="100"
                      type="number"
                      min="0"
                      floatingLabelText="Set 1 (x25)"
                      floatingLabelFixed={true}
                      underlineShow={false}
                    />
                  </Col>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="150"
                      type="number"
                      min="0"
                      floatingLabelText="Set 2 (x15)"
                      floatingLabelFixed={true}
                      underlineShow={false}
                    />
                  </Col>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="165"
                      type="number"
                      min="0"
                      floatingLabelText="Set 3 (x10)"
                      floatingLabelFixed={true}
                      underlineShow={false}
                    />
                  </Col>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="175"
                      type="number"
                      min="0"
                      floatingLabelText="Set 4 (x8)"
                      floatingLabelFixed={true}
                      underlineShow={false}
                    />
                  </Col>

                </Row>

              </Container>

            </CardText>
          </Card>


          {/* Add a break after each Lift */}
          <br/>

          {/* Lift 2 */}
          <Card>
            <CardHeader
              title="Bench Press"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>

              <Container>
                <Row>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="100"
                      type="number"
                      min="0"
                      floatingLabelText="Set 1 (x25)"
                      floatingLabelFixed={true}
                      underlineShow={false}
                    />
                  </Col>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="150"
                      type="number"
                      min="0"
                      floatingLabelText="Set 2 (x15)"
                      floatingLabelFixed={true}
                      underlineShow={false}
                    />
                  </Col>

                  <Col sm={4} xs={6}>
                    <TextField
                      hintText="165"
                      type="number"
                      min="0"
                      floatingLabelText="Set 3 (x10)"
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

