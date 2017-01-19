// Import React Essentials
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import Pages and/or Components
import AppLayout from '../../ui/layouts/AppLayout.jsx';
import AdminRoute from '../../ui/pages/AdminRoute.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import SignUpPage from '../../ui/pages/SignUpPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';
import loading from '../../actions/loading';
import Store from '../../reducers/index.js';
import LogWorkout from '../../ui/pages/LogWorkout.jsx';
import CreateWorkout from '../../ui/pages/CreateWorkout.jsx';


// Release the meeeettteeeoooor!
Meteor.startup( () => {

  Store.subscribe(refresh);
  function refresh() {
    console.log("REFRESH");
    browserHistory.replace(location);
  }

  function redirectIfSignedIn(){
    if(Meteor.userId() != null){
http://stackoverflow.com/questions/5410682/parsing-a-json-string-in-ruby      console.log("Redirecting Signed In User");
      browserHistory.replace('/');
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


  function redirectUnlessAdmin(Store){
    Tracker.autorun(() => {
      console.log("RUNNING ADMIN CHECK");
      if(Meteor.userId() === null){
        console.log("Redirecting Visitor");
        browserHistory.replace('/users/login');
        return;
      }

      if(!Meteor.user()){
        return
      }

      if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
        console.log("Redirecting Non-Admin");
        browserHistory.replace('/users/login');
      } else {
        console.log("Admin is present");
        console.log("state in route: "+ JSON.stringify(Store.getState()));
        Store.dispatch(loading(false));
      }
    });
  }

  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ AppLayout }>
        <IndexRoute onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } />
        <Route path="users" onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn }>
          <Route path="login" component={LoginPage}/>
          <Route path="signup" component={SignUpPage}/>
          <Route path="workout/log" component={LogWorkout} />
          <Route path="workout/create" component={CreateWorkout} />
        </Route>
        <Route path="admin" onChange={ redirectUnlessAdmin(Store) } onEnter={ redirectUnlessAdmin(Store) }>
          <IndexRoute component={ AdminRoute }/>
        </Route>
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById( 'render-target' )
  );
});
