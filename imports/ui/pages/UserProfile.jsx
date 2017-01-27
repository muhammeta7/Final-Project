// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-UI components
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import style from '../../../client/styles.js';

// Import Components
import ProfileNav from '../components/ProfileNav';

class UserProfile extends Component{

	constructor(props){
    	super(props);
    	this.state = {routine_ids : [], routines: [], value: "", currentRoutineName: ""};
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
			this.setState({routines: res})
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

		return routines.map((routine) => {			
			return (
				<MenuItem style={style.dropdownStyle} key={routine._id} value={routine._id} primaryText={routine.routineName}/>
			);
		});
	}
	 

	render (){

		return (

			<Container>
				
				<div>
					<Card>
						
						<CardTitle title="Welcome back, you're looking great. Now let's select a routine." style={style.profileTitleStyle} />
						
				    <Row>
				    	<center>
				    		<DropDownMenu style={style.dropdownStyle} value={this.state.value} onChange={this.handleChange.bind(this)}>
				    			{this.renderRoutines()}
				    		</DropDownMenu>
				    	</center>
				    </Row>

				    <CardText>
			        <ProfileNav />
		        </CardText>
			
					</Card>
				</div>

				<div>
					<Card>

						<CardTitle title="Your Current Routine:"  style={style.profileTitleStyle} />
						<CardText style={style.routineName}>
				      {this.state.currentRoutineName}
				    </CardText>

					</Card>
				</div>

			</Container>

		);
	}
	
};

export default UserProfile;