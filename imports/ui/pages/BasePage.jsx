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

// const {loading, stepIndex} = this.state;

 //  dummyAsync = (cb) => {
 //    this.setState({loading: true}, () => {
 //      this.asyncTimer = setTimeout(cb, 500);
 //    });
 //  };

 //  handleNext = () => {
 //    const {stepIndex} = this.state;
 //    if (!this.state.loading) {
 //      this.setState({
 //        loading: false,
 //        stepIndex: stepIndex + 1,
 //        finished: stepIndex >= 2,
 //      });
 //    }
 //  }

 //  handlePrev = () => {
 //    const {stepIndex} = this.state;
 //    if (!this.state.loading) {
 //      this.dummyAsync(() => this.setState({
 //        loading: false,
 //        stepIndex: stepIndex - 1,
 //      }));
 //    }
 //  }


 //  getStepContent = (stepIndex) => {
 //    switch (stepIndex) {
 //      case 0:
 //        return (
 //          <Container>
 //          <p>
 //            To get started with the app you first need to login or signup.
 //          </p>
 //          <FlatButton label="Login" href = "users/login"/>
 //          <FlatButton label="Signup" href = "users/signup"/>
 //          </Container>
 //        );
 //      case 1:
 //        return (
 //          <div>
 //            <TextField style={{marginTop: 0}} floatingLabelText="Ad group name" />
 //            <p>
 //              Ad group status is different than the statuses for campaigns, ads, and keywords, though the
 //              statuses can affect each other. Ad groups are contained within a campaign, and each campaign can
 //              have one or more ad groups. Within each ad group are ads, keywords, and bids.
 //            </p>
 //            <p>Something something whatever cool</p>
 //          </div>
 //        );
 //      case 2:
 //        return (
 //          <p>
 //            Try out different ad text to see what brings in the most customers, and learn how to
 //            enhance your ads using features like ad extensions. If you run into any problems with your
 //            ads, find out how to tell if they're running and how to resolve approval issues.
 //          </p>
 //        );
 //      default:
 //        return 'You\'re a long way from home sonny jim!';
 //    }
 //  }

 // renderContent = () =>{
 //    const {finished, stepIndex} = this.state;
 //    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

 //    if (finished) {
 //      return (
 //        <div style={contentStyle}>
 //          <p>
 //            <a
 //              href="#"
 //              onClick={(event) => {
 //                event.preventDefault();
 //                this.setState({stepIndex: 0, finished: false});
 //              }}
 //            >
 //              Click here
 //            </a> to reset the example.
 //          </p>
 //        </div>
 //      );
 //    }

 //    return (
 //      <div style={contentStyle}>
 //        <div>{this.getStepContent(stepIndex)}</div>
 //        <div style={{marginTop: 24, marginBottom: 12}}>
 //          <FlatButton
 //            label="Back"
 //            disabled={stepIndex === 0}
 //            onTouchTap={this.handlePrev}
 //            style={{marginRight: 12}}
 //          />
 //          <RaisedButton
 //            label={stepIndex === 2 ? 'Finish' : 'Next'}
 //            primary={true}
 //            onTouchTap={this.handleNext.bind(this)}
 //          />
 //        </div>
 //      </div>
 //    );
 //  }






// const styles = {
//   button: {
//     margin: 12,
//   },
//   exampleImageInput: {
//     cursor: 'pointer',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     width: '100%',
//     opacity: 0,
//   },
// }

  render = () => (
  
    <Container>
        <div>
    <Card>
    

       
       <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="../../../public/bigstock-Diet-And-Exercise-2530754 (1)" />
    </CardMedia>
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
    )
}
export default BasePage;




