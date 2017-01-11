import React from 'react';
import { Component } from 'react';

class Login extends Component {
  render() {
    return (

      <div>

        {/* Title*/}
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header"><h4>Login</h4></li>
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
                <input id="password" placeholder="Password" type="password" className="validate" />
                <label for="password"></label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="container">
              <div className="row">
                <center>
                  <input className="btn sign-up-btn" type="submit" value="Login" />
                </center>
              </div>
            </div>

          </form>
        </div>

      </div>

    );
  }
}

export default Login;