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
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';




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
                  fullWidth={true}
                />
              </CardHeader>
            </Card>
          </Row>

          <br />

          <Row>
            <Card>
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
                            fullWidth={true}
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
                                <Container>
                                  <TextField
                                    floatingLabelText="Excercise Name"
                                    hintText="Bench Press"
                                    fullWidth={true}
                                  />
                                  <SelectField value={1} autoWidth={true} fullWidth={true}>
                                    <MenuItem value={1} primaryText="lb" />
                                    <MenuItem value={2} primaryText="kg" />
                                    <MenuItem value={3} primaryText="body weight" />
                                  </SelectField>
                                </Container>
                              }
                            />
                            <CardText expandable={true}>
                              <Container>


                                <Row>
                                  <Card>
                                    <CardHeader
                                      avatar={
                                        <div>
                                          <FloatingActionButton secondary={false} mini={true}><ContentAdd/></FloatingActionButton>
                                          <i> </i>
                                          <FloatingActionButton secondary={true} mini={true}><ContentRemove/></FloatingActionButton>
                                          <i> </i>
                                          <i> Please leave the Reps field empty for Lift Until Failure (xf)</i>
                                        </div>
                                      }
                                      title={
                                        <TextField
                                          floatingLabelText="Reps for Set 1"
                                          type="number"
                                          min="0"
                                          hintText="15"
                                          underlineShow={false}
                                          fullWidth={true}
                                        />
                                      }
                                    />
                                  </Card>
                                </Row>


                                <Row>
                                  <Card>
                                    <CardHeader
                                      title={
                                        <TextField
                                          floatingLabelText="Reps for Set 2"
                                          type="number"
                                          min="0"
                                          hintText="15"
                                          underlineShow={false}
                                          fullWidth={true}
                                        />
                                      }
                                    />
                                  </Card>
                                </Row>


                                <Row>
                                  <Card>
                                    <CardHeader
                                      title={
                                        <TextField
                                          floatingLabelText="Reps for Set 3"
                                          type="number"
                                          min="0"
                                          hintText="15"
                                          underlineShow={false}
                                          fullWidth={true}
                                        />
                                      }
                                    />
                                  </Card>
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
                                  fullWidth={true}
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
            <Container>
              <center>
                <Row>
                  <RaisedButton label="Submit"  primary={true} />
                  <span> </span>
                  <RaisedButton label="Cancel" />
                </Row>
              </center>
            </Container>

        </Container>
      </MuiThemeProvider>
    );
  }
}

export default CreateWorkout;


