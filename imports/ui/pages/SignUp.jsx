import React from 'react';
import { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>

        {/* Title*/}
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header"><h4>Sign-Up With Us</h4></li>
          </ul>
        </div>

        {/* Form-Inputs */}
        <div className="row">
          <form className="input-field col s8 offset-s2">

            <div className="row">
              <div className="col s6 offset-s3">
                <input id="email" placeholder="Email" type="email" className="validate" />
                <label for="email"></label>
              </div>
            </div>

            <div className="row">
              <div className="col s6 offset-s3">
                <input id="password" placeholder="password" type="password" className="validate" />
                <label for="password"></label>
              </div>
            </div>

            <div className="row">
              <div className="col s6 offset-s3">
                <input id="confirm" placeholder="confirm password" type="password" className="validate" />
                <label for="confirm"></label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="container">
              <div className="row">
                <center>
                  <input className="btn sign-up-btn" type="submit" value="Sign-Up" />
                </center>
              </div>
            </div>

          </form>
        </div>

       


      </div>
    );
  }
}

export default SignUp;



