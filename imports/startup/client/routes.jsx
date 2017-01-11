// Import Packages
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Import Pages and/or Components
import HomePage from '../../ui/pages/HomePage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';
import LogWorkout from '../../ui/pages/LogWorkout.jsx';

// React Router
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/log-workout" component={LogWorkout} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);
