// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-UI components
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { browserHistory } from 'react-router';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import style from '../../../client/styles.js';


class UserProfile extends Component{

	constructor(props){
    super(props);
    this.state = {routine_ids : [], 
    		routines: [],
    		value: "",
    		currentRoutineName: "",
    		age: "",
    		weight: "",
    		height: ""
    	};
	}


	routines(){
		return Routine.find({user_id: Meteor.userId()}).fetch()
	}

	handleChange(event,index,value){

		console.log(event, index, value)		
		Meteor.call("getRoutineName", value, (err, res) => {
			this.setState({value: value, currentRoutineName: res});	
			console.log(this.state)

		});
		Meteor.call("setCurrentRoutine", value, (err,res) =>{
			console.log(value);
			console.log("updated current routine");
		})		
	} 

	handleSubmit(e){
		e.preventDefault();
		let height = document.getElementById("height").value;
		let weight = document.getElementById("weight").value;
		let age = document.getElementById("age").value;
		data = {
			age: age,
			weight: weight,
			height: height
		}
		Meteor.call("updateUser", data, (err,res) => {
			console.log("successfully updated")
		})
		browserHistory.push("/profile")

	}

	componentWillMount(){

		// Meteor.call("getRoutines", (err,res) => {
		// 	if(err) throw err;

		// 	this.setState({routine_ids: res})
		// 	console.log("should be array:" + res)
		// 	Meteor.call("getRoutineNames", res, (err,res2) => {

		// 		this.setState({routines: res2})
		// 		console.log("names: " + res2);
		// 		console.log(this.state.value)
		// 	})
		// })
		Meteor.call("getRoutineObjects", (err,res) => {
			console.log(res)
			if(res.length == 0){
				var none = "no Routine";
				this.setState({currentRoutineName: none, value: "0"})
			}
			else{
			this.setState({routines: res});
			}
		})
	}

	componentDidMount(){

		Meteor.call("getCurrentRoutine", (err,res) => {
			console.log("routine: " + res.routineNames)
			this.setState({value: res.routine_id, currentRoutineName: res.routineName})
			console.log("value " + this.state.value)

		})
	}

	renderRoutines(){
		let routines = this.state.routines;
		if(routines.length == 0){
			routines = [{
				_id: "0",
				routineName: "No current Routine has been created"
			}]

		}

		return routines.map((routine) => {			
			return (
				<MenuItem style={style.dropdownStyle} key={routine._id} value={routine._id} primaryText={routine.routineName}/>
			);
		});
	}

	_goToCreateWorkout () {
    browserHistory.push('/workout/create');
  }

	 
	render (){

		return (

			<Container>
				
				<div>
					<Card>
						
						<CardTitle title="Welcome back, you're looking great. Now let's select a routine." style={style.profileTitleStyle} />
						
				    <Row style={style.paddingStyle}>
				    	<center>
				    		<DropDownMenu style={style.dropdownStyle} value={this.state.value} onChange={this.handleChange.bind(this)}>
				    			{this.renderRoutines()}
				    		</DropDownMenu>
				    	</center>
				    </Row>


				    <CardText style={style.cardTextStyle} >
				    	<Row>
					    	<center>
					    		If you haven't already, create a new Routine!
					    	</center>
				    	</Row>
				    	
				    	<br />

				    	<Row>
					    	<center>
					    		<RaisedButton label="Create New Routine" secondary={true}  onClick={this._goToCreateWorkout}/>
					    	</center>
				    	</Row>
		        </CardText>
			
					</Card>
				</div>
				<br/>
				<div>
					<Card>

						<CardTitle title="Your Current Routine:"  style={style.profileTitleStyle} />
						<CardText style={style.routineName}>

				      	{this.state.currentRoutineName}
				    	</CardText>
				    	<br/>
				    	 <TextField
				            hintText= "Please enter your height in feet' inches "
				            floatingLabelText="height"
				            id="height"
				            fullWidth={true}
				         />
				         <TextField
				            hintText= "Please enter your weight in lb"
				            floatingLabelText="weight"
				            id="weight"
				            fullWidth={true}
				         />
				         <TextField
				            hintText= "Please enter your age"
				            floatingLabelText="age"
				            id="age"
				            fullWidth={true}
				         />
				         <center>
					         <RaisedButton
					            id="submit"
					            label="submit"
					            primary={true}
					            onTouchTap={this.handleSubmit}
					         />
				         </center>
					</Card>
				</div>

			</Container>

		);
	}
	
};

export default UserProfile;