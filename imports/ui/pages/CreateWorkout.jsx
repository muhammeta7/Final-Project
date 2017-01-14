// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import Badge from 'material-ui/Badge';



class CreateWorkout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Container>

          {/* Name the Routine */}
          <Row>
            <Card>
              <CardHeader>
                <h2>Create a Workout Routine</h2>
                <TextField
                  floatingLabelText="Routine Name"
                  hintText="My Fitness Plan"
                />
              </CardHeader>
              <CardText>

                {/* Add Workouts (i.e. Days of Excercises) */}
                <Container>

                    <Card>
                      <CardHeader
                        actAsExpander={true}
                        showExpandableButton={true}
                        avatar={<FloatingActionButton secondary={false} mini={true}><ContentAdd/></FloatingActionButton>}
                        title={
                          <TextField
                            floatingLabelText="Workout Name"
                            hintText="Chest Day"
                          />
                        }
                      >
                       </CardHeader>
                       <CardText expandable={true}>





                        <Container>
                          <Card>
                            <CardHeader
                              actAsExpander={true}
                              showExpandableButton={true}
                              avatar={<FloatingActionButton secondary={false} mini={true}><ContentAdd/></FloatingActionButton>}
                              title={
                                <TextField
                                  floatingLabelText="Excercise Name"
                                  hintText="Bench Press"
                                />
                              }
                            />
                            <CardText expandable={true}>
                              <Container>


                                <Row>
                                  <Col sm={6} xs={6}>
                                    <Card>
                                      <CardHeader
                                        avatar={
                                          <div>
                                            <FloatingActionButton secondary={false} mini={true}><ContentAdd/></FloatingActionButton>
                                            <FloatingActionButton secondary={true} mini={true}><ContentRemove/></FloatingActionButton>
                                          </div>
                                        }
                                        title={
                                          <TextField
                                            floatingLabelText="Reps for Set 1"
                                            type="number"
                                            min="0"
                                            hintText="15"
                                            underlineShow={false}
                                          />
                                        }
                                      />
                                    </Card>
                                  </Col>
                                </Row>


                                <Row>
                                  <Col sm={6} xs={6}>
                                    <Card>
                                      <CardHeader
                                        
                                        title={
                                          <TextField
                                            floatingLabelText="Reps for Set 2"
                                            type="number"
                                            min="0"
                                            hintText="15"
                                            underlineShow={false}
                                          />
                                        }
                                      />
                                    </Card>
                                  </Col>
                                </Row>


                                <Row>
                                  <Col sm={6} xs={6}>
                                    <Card>
                                      <CardHeader
                                      
                                        title={
                                          <TextField
                                            floatingLabelText="Reps for Set 3"
                                            type="number"
                                            min="0"
                                            hintText="15"
                                            underlineShow={false}
                                          />
                                        }
                                      />
                                    </Card>
                                  </Col>
                                </Row>


                              </Container>
                            </CardText>
                          </Card>

                          <br/>



                          {/* Add another Ex */}


                          <Card>
                            <CardHeader
                              actAsExpander={true}
                              showExpandableButton={true}
                              avatar={<FloatingActionButton secondary={true} mini={true}><ContentRemove/></FloatingActionButton>}
                              title={
                                <TextField
                                  floatingLabelText="Excercise Name"
                                  hintText="Bench Press"
                                />
                              }
                            />
                          </Card>



                        </Container>

                       </CardText>
                    </Card>

                </Container>




              </CardText>
            </Card>
          </Row>
          
          <br/>

          
       





            {/* Submit Button */}
   
                  {/* This will need a way to collect all the data from the forms above and then hit an api on the backend */}
                  {/* Maybe add a confirmation modal too... Create this workout? You will not be able to edit after this */}


        </Container>
      </MuiThemeProvider>
    );
  }
}

export default CreateWorkout;


