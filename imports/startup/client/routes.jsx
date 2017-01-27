// Import React Essentials
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import Pages and/or Components
import AppLayout from '../../ui/layouts/AppLayout.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import SignUpPage from '../../ui/pages/SignUpPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';
import loading from '../../actions/loading';
import Store from '../../reducers/index.js';
import LogWorkout from '../../ui/pages/LogWorkout.jsx';
import CreateWorkout from '../../ui/pages/CreateWorkout.jsx';
import HomePage from '../../ui/pages/HomePage.jsx';
import Dashboard from '../../ui/pages/Dashboard.jsx';
import UserProfile from '../../ui/pages/UserProfile.jsx';
import SelectWorkout from '../../ui/pages/SelectWorkout.jsx';

// Release the meeeettteeeoooor!
Meteor.startup( () => {

  Store.subscribe(refresh);
  function refresh() {
    console.log("REFRESH");
    browserHistory.replace(location);
  }

  function redirectIfSignedIn(){
    if(Meteor.userId() != null){
      // http://stackoverflow.com/questions/5410682/parsing-a-json-string-in-ruby
      console.log("Redirecting Signed In User");
      browserHistory.replace('/dashboard');
    } else {
      console.log("User is NOT there");
    }
  }

  function redirectUnlessSignedIn(){
    if(Meteor.userId() === null){
      console.log("Redirecting Visitor");
      browserHistory.replace('/users/login');
    } else {
      console.log("User is there");
    }
  }

  render(

    <Router history={ browserHistory } >

      <Route path="/" component={ AppLayout } >

        {/* Home Page */}
        <IndexRoute component={ HomePage }  onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } />

        {/* Signup & Login Routes */}
        <Route path="users" onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } >
          <Route path="login" component={ LoginPage } />
          <Route path="signup" component={ SignUpPage } />
        </Route>

        {/* Log Workout, and Create Workout Routes */}
        <Route path="workout" onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } >
          <Route path="log" component={LogWorkout} />
          <Route path="create" component={ CreateWorkout } />
          <Route path="select" component={ SelectWorkout } />
        </Route>

        {/* User Profile */}
        <Route path="profile" component={ UserProfile } onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } />
        
        {/* Dashboard Route */}
        <Route path="dashboard" component={ Dashboard } onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } />

        {/* 404 Error */}
        <Route path="*" component={ NotFound } />

      </Route>

    </Router>,
    document.getElementById( 'render-target' )
  );
});
