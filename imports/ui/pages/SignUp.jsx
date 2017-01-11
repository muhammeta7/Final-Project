import React from 'react';
import { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';


class SignUp extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let userName = document.getElementById("signup-name").value;
    // let password = document.getElementById("signup-password")
    // Accounts.createUser({ username: userName, password: password}, (err) => {
    //  if(err) {
    //   Store.dispatch(setSnackBar(true, err.reason, '#F44336'));
    //   } else {
    //     Store.dispatch(setSnackBar(true, 'You\'ve signed up successfully.', '#4CAF50'));
    //     browserHistory.push('/')
    //   }
    // }); 
  }

  render() {
    const buttonStyle = {
      marginTop: "20px"
    }

    return (

      <div className="row-fluid">

        <div className="col s6 col-offset-s3">
          <h1>Sign Up</h1>
        </div>

        <form name="loginForm" id="signup-form" className="col-xs-12 col-lg-6 col-lg-offset-3">
          <TextField
            hintText="Please enter your username"
            floatingLabelText="Username"
            id="signup-name"
            fullWidth={true}
          />
          <br />
          <TextField
            hintText="Please enter your password"
            floatingLabelText="Password"
            type="password"
            id="signup-password"
            fullWidth={true}
          />
          <br />
          <RaisedButton
            id="signup-button"
            label="signup"
            fullWidth={true}
            primary={true}
            style={buttonStyle}
            onTouchTap={this.handleSubmit}
          />
          <br />
          
          <br />
        </form>

      </div>

    );
  }
}

export default SignUp;



