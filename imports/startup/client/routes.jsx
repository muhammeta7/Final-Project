// Import Packages
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Material-ui click listener
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Import Pages and/or Components
import HomePage from '../../ui/pages/HomePage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';
import LogWorkout from '../../ui/pages/LogWorkout.jsx';
import LogWorkout2 from '../../ui/pages/LogWorkout2.jsx';
import SignUp from '../../ui/pages/SignUp.jsx';
import Login from '../../ui/pages/Login.jsx';

// React Router
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/log-workout" component={LogWorkout} />
    <Route path="/log-workout-2" component={LogWorkout2} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);

