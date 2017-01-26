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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class UserProfile extends Component{




	constructor(props){
    	super(props);
    	this.state = {routine_ids : [], routines: [], value: ""};
	}


	routines(){
		return Routine.find({user_id: Meteor.userId()}).fetch()
	}

	handleChange(event,index,value){
		this.setState({value: value});
	} 

	componentWillMount(){

		Meteor.call("getRoutines", (err,res) => {
			if(err) throw err;

			this.setState({routine_ids: res})
			console.log(res)

			Meteor.call("getRoutineNames", res, (err,res2) => {

				this.setState({routines: res2})
				console.log(res2)
			})
		})
		

	}
	renderRoutines(){
		let routines = this.state.routines;
		let routine_id = this.state.routine_ids;

		return routines.map((routine,routine_id) => {

			return (
				<MenuItem key={routine_id} value={routine_id} primaryText={routine}/>
			);
		});
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
				    		<DropDownMenu value={this.state.value} onChange={this.handleChange}>
				    			{this.renderRoutines()}
				    		</DropDownMenu>
				    	</center>
				    </Row>
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
			<div>
				<Card>
					<CardTitle title="Your current routine"/>

				</Card>
			</div>
		</Container>
		)
	}




};
export default UserProfile;