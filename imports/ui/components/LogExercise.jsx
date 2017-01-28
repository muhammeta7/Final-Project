// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

// Import Components
import LogRepWeight from '../components/LogRepWeight';

// Import Style
import style from '../../../client/styles.js';


// Create Component
class LogExercise extends Component {

  constructor(props) {
    super(props);
  }

  _handleChange(event, date){

  }

  _writeUnit(unitNumber){

    // Select the correct unit to write to screen
    if (unitNumber == 1){
      return "lb";
    } 
    else if(unitNumber == 2){
      return "kg";
    }
    else{
      return "body weight";
    }

  }


  render(){
    return(

      <Card>
        <CardHeader
          title={
            <p style={style.logRoutineComponentStyle}> {this.props._exerciseName + "  [" + this._writeUnit(this.props._exerciseUnit) + "]"}</p>
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>

          <Container>
            <Row>

              {/* ++++++++++ ITERATE OVER REPS ++++++++++ */}
              {this.props._repArray.map(function(search, i) {

                return (
                  <LogRepWeight 
                    key={"routine-" + this.props._routineId + "-workout-" + this.props.workoutId + "-exercise-" + this.props._exerciseId + "-rep-" + i}

                    _exerciseNumber={this.props._exerciseId}

                    _repNumber={i}
                    _repCount={search}

                    _prevWorkoutRepWeight={this.props._prevWorkoutWeightsArray[i]}

                    _editCurrentWorkoutRepWeight={this.props._editCurrentWorkoutRepWeight}
                    _currentWorkoutRepWeight={this.props._currentWorkoutWeights[i]}
                  />
                );

              }.bind(this))}

            </Row>
          </Container>

        </CardText>
      </Card>

    );
  }
}


export default LogExercise;