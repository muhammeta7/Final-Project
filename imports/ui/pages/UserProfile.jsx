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

class UserProfile extends Component{
	constructor(props){
    	super(props);
	}
	 

	render (){

		  const buttonStyle = {
      		margin: '10px'
    	}
		
		return (
			<Container>
			<div>
				<Card>
					<CardTitle title="Welcome Back" subtitle="Your looking awesome!" />
					<CardText>
				      Lets Take a look at your progress over the past.
				    </CardText>
				    <Row>
		                <center>
		                  <Row>
		                  	<RaisedButton style={buttonStyle} label="Dashboard" secondary={true} href = "dashboard"/>
							<RaisedButton style={buttonStyle} label="Create Workout" primary={true} href = "workout/create"/>
		                  </Row>
		                </center>
		            </Row>
				    
				</Card>
			</div>
		</Container>
		)
	}




};
export default UserProfile;