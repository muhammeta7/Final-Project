// Import Packages
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'

// Import Pages and/or Components
import HomePage from '../../ui/pages/HomePage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';
import LogWorkout from '../../ui/pages/LogWorkout.jsx';
import LogWorkout2 from '../../ui/pages/LogWorkout2.jsx';
import SignUp from '../../ui/pages/SignUp.jsx';
import Login from '../../ui/pages/Login.jsx';

// pages
import SignupPage from '../../ui/pages/SignupPage.jsx'
import LoginPage from '../../ui/pages/LoginPage.jsx'



// React Router
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/home" component={HomePage} />
    <Route path="/log-workout" component={LogWorkout} />
    <Route path="/log-workout-2" component={LogWorkout2} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFoundPage} />


    <Route path="login" component={LoginPage}/>
    <Route path="signup" component={SignupPage}/>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={MainContainer}/>
    </Route>
    
  </Router>
);
