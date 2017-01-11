// Import Packages
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Import Pages and/or Components
import HomePage from '../../ui/pages/HomePage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';
import LogWorkout from '../../ui/pages/LogWorkout.jsx';
import SignUp from '../../ui/pages/SignUp.jsx';
import Login from '../../ui/pages/Login.jsx';

// React Router
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/log-workout" component={LogWorkout} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);

